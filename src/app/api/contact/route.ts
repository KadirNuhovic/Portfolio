import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    // Here you would typically send an email using a service like Resend, Nodemailer, etc.
    console.log('Contact form submission:', { name, email, message });

    return NextResponse.json(
      { message: 'Message sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to send message.' },
      { status: 500 }
    );
  }
}
