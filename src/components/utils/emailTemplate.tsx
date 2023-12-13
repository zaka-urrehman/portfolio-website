import * as React from 'react';

interface EmailTemplateProps {
  subject: string;
  message: string;
  email: string;
  name: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  subject,
  email,
  message,
  name
}) => (
  <div>
    <h2>email from {email}</h2>
    <h3>Name: {name} </h3>
    <h3><span className='font-bold'>Subject:</span> {subject}</h3>      
          
          <p>{message}</p>
  </div>
);