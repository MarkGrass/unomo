import type { NextApiRequest, NextApiResponse } from 'next';

import { B24Hook } from '@bitrix24/b24jssdk';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { name, phone, message } = JSON.parse(req.body);
    const b24 = new B24Hook({
        b24Url: 'https://b24-jk33h1.bitrix24.ru',
        userId: 1,
        secret: '5ex0pfsr3q0qjgf2',
    });

    try {
        const result = b24.callMethod('crm.lead.add', {
            fields: {
                TITLE: 'Заявка с сайта',
                NAME: name,
                STATUS_ID: 'NEW',
                SOURCE_ID: 'WEB',
                OPENED: 'Y',
                COMMENTS: message,
                PHONE: [
                    {
                        VALUE: phone,
                        VALUE_TYPE: 'PERSONAL',
                    },
                ],
            },
        });

        res.status(200).send({ result });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'fail sending email' });
    }
}
