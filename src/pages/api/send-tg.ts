import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { name, phone, message } = JSON.parse(req.body);
    const requestUrl = 'https://api.telegram.org/bot';
    const token = '7575846025:AAEtzENIKZPLK9-lVFDkXudS0egWTWZyFec';
    const chat_id = '1002771886289';

    const requestData = new URLSearchParams({
        chat_id,
        parse_mode: 'html',
        text: `
            <b>${name}</b>
            <br/>
            <b>${phone}</b>
            <br/>
            <br/>
            <em>${message}</em>>
        `,
    });
    console.log(`${requestUrl}${token}/sendMessage?${requestData}`);
    try {
        const result = await fetch(`${requestUrl}${token}/sendMessage?${requestData}`, {
            method: 'GET',
        });
        res.status(200).send({ result });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'fail sending email' });
    }
}
