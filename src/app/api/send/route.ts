import { EmailTemplate } from '@/components/utils/emailTemplate';
import { ResponseEmailTemplate } from '@/components/utils/responseEmailTemplate';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;
const myemail = 'zk.na2486@gmail.com'
export async function POST(req: NextRequest, res: NextResponse) {
  const {name, email, subject, message } = await req.json();

  try {
    // @ts-ignore
    const data = await resend.emails.send({
      from: fromEmail!,
      to: [myemail],
      subject: subject,
      react: EmailTemplate({ subject,name , message, email }),
    });

    // @ts-ignore
    const replyMailToUser = await resend.emails.send({
      from: fromEmail!,
      to: [email],
      subject: "Thank you for contacting! ",
      react: ResponseEmailTemplate({name}),
    });

    // @ts-ignore
    return NextResponse.json(data,replyMailToUser)
  } catch (error) {
    // Use res.json instead of Response.json
    return NextResponse.json({ error });
  }
}
