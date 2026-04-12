import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  console.log("[v0] Contact API called")
  console.log("[v0] RESEND_API_KEY exists:", !!process.env.RESEND_API_KEY)
  
  try {
    const body = await request.json()
    const { name, email, message } = body
    
    console.log("[v0] Form data received:", { name, email, messageLength: message?.length })

    // Validate required fields
    if (!name || !email || !message) {
      console.log("[v0] Validation failed - missing fields")
      return NextResponse.json(
        { error: "Name, Email und Nachricht sind erforderlich" },
        { status: 400 }
      )
    }

    console.log("[v0] Sending email via Resend...")
    
    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: "Kontaktformular <contact@lindaholtkamp.de>",
      to: ["contact@lindaholtkamp.de"],
      replyTo: email,
      subject: `Neue Kontaktanfrage von ${name}`,
      html: `
        <h2>Neue Kontaktanfrage</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>E-Mail:</strong> ${email}</p>
        <hr />
        <h3>Nachricht:</h3>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    })

    if (error) {
      console.error("[v0] Resend error:", JSON.stringify(error, null, 2))
      return NextResponse.json(
        { error: "E-Mail konnte nicht gesendet werden: " + error.message },
        { status: 500 }
      )
    }

    console.log("[v0] Email sent successfully, ID:", data?.id)
    return NextResponse.json({ success: true, messageId: data?.id })
  } catch (error) {
    console.error("Contact API error:", error)
    return NextResponse.json(
      { error: "Ein Fehler ist aufgetreten" },
      { status: 500 }
    )
  }
}
