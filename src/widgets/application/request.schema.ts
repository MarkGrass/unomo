import { z } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';
import { isValidPhoneNumber } from 'libphonenumber-js';

const RequestSchema = z.object({
    name: z.string().trim().min(1, 'Введите имя'),
    phone: z
        .string()
        .trim()
        .refine((value) => isValidPhoneNumber(value), {
            message: 'Неправильно введен номер телефона',
        }),
    message: z.string().max(5000, 'Слишком длинный текст'),
    agreement: z.literal<boolean>(true),
});

export type RequestFields = z.infer<typeof RequestSchema>;
export const requestResolver = zodResolver(RequestSchema);
