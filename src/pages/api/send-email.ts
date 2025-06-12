import type { NextApiRequest, NextApiResponse } from 'next';

import { createTransport } from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { name, phone, message } = JSON.parse(req.body);
    const transport = createTransport({
        host: 'smtp.mail.ru',
        port: 465,
        secure: true,
        auth: {
            user: 'leads@unomo.ru',
            pass: 'zgVXbT3sWz5owiyQ0qMh',
            // pass: '93evigaD70duvame',
        },
    });

    try {
        const result = await transport.sendMail({
            from: 'leads@unomo.ru',
            to: 'caphyper@gmail.ru',
            subject: 'Заявка с сайта',
            text: message,
            html: `<ul>
                <li>Клиент:&nbsp;<b>${name}</b></li>
                <li>Телефон:&nbsp;<b>${phone}</b></li>
                <li>Обращение:&nbsp;<b>${message}</b></li>
            </ul>>`,
        });

        res.status(200).send({ result });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'fail sending email' });
    }
}
