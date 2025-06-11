import { z } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';
import { isValidPhoneNumber } from 'libphonenumber-js';

const PaymentSchema = z.object({
    firstname: z.string().trim().min(1, 'Введите имя'),
    lastname: z.string().trim().min(1, 'Введите фамилию'),
    patronymic: z.string().trim().min(1, 'Введите отчество'),
    contract: z.string().trim().min(1, 'Введите номер договора'),
    phone: z
        .string()
        .trim()
        .refine((value) => isValidPhoneNumber(value), {
            message: 'Неправильно введен номер телефона',
        }),
    amount: z.number().nullable(),
});

export type PaymentFields = z.infer<typeof PaymentSchema>;
export const paymentResolver = zodResolver(PaymentSchema);
