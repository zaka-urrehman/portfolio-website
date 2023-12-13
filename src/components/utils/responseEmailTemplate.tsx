import * as React from 'react';

interface EmailTemplateProps {
    
    name: string;
}

export const ResponseEmailTemplate :React.FC<Readonly<EmailTemplateProps>> = ({name}) => (
    <div>
        <h3>I have recieved your email</h3>
        <p> Hey {name}!</p>
        <p>           
            Thank you for reaching out to me!
            I have received your message and would like to express my appreciation for your interest.
            I will get back to you as soon as possible. Please do not reply to this email.
        </p>

    </div>
);