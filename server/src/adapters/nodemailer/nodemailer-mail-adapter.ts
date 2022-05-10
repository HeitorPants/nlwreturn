import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../mail-adapters";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "89baf215f1323e",
      pass: "96a11e39480428"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
   async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
        to: 'Heitor de Assis <heitor_work@hotmail.com>',
        subject,
        html: body,
    })
   };
}