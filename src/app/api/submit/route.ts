// app/api/submit/route.ts
import { NextResponse } from "next/server";
import { google } from "googleapis";

// Your Google Sheets ID and range
const RANGE = "Sheet1!A:D";
const SHEET_ID = process.env.GOOGLE_SHEET_ID;

export async function POST(req: Request) {
  const { name, email, description } = await req.json();

  try {
    // Authenticate with Google
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    // Append the data to the sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: RANGE,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[name, email, description, new Date().toISOString()]], // Add a timestamp
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}
