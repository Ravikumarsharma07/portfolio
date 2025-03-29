import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  content:string;
  email: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,content,email
}) => (
  <div>
    <b>Message from {firstName}!</b>
    <p>{content}</p>
    <p>from: {email}</p>
  </div>
);