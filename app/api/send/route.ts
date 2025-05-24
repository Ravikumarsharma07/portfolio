import { NextRequest } from "next/server";
import { EmailTemplate } from "../../../components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const {name, email, message} = await req.json();
  try {
    const { data, error } = await resend.emails.send({
      from: "Message from protfolio website <onboarding@resend.dev>",
      to: ["ravikrsharma207@gmail.com"],
      subject: "Message from portfolio website!",
      react: EmailTemplate({ firstName:name, content: message, email:email }),
    });

    if (error) {
      console.log(error);
      return Response.json({ error }, { status: 500 });
    }
    return Response.json(data);
  } catch (error) {
    console.log(error);
    return Response.json({ error }, { status: 500 });
  }
}

export function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
