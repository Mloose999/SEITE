import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, Email und Nachricht sind erforderlich" },
        { status: 400 }
      )
    }

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: "Kontaktformular <kontakt@lindaholtkamp.com>",
      to: ["info@lindaholtkamp.com"],
      replyTo: email,
      subject: subject || `Neue Kontaktanfrage von ${name}`,
      html: `
        <h2>Neue Kontaktanfrage</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>E-Mail:</strong> ${email}</p>
        <p><strong>Betreff:</strong> ${subject || "Kein Betreff"}</p>
        <hr />
        <h3>Nachricht:</h3>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json(
        { error: "E-Mail konnte nicht gesendet werden" },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, messageId: data?.id })
  } catch (error) {
    console.error("Contact API error:", error)
    return NextResponse.json(
      { error: "Ein Fehler ist aufgetreten" },
      { status: 500 }
    )
  }
}
