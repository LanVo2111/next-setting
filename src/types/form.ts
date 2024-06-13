import { z } from 'zod'

export const FormDataSchema = z.object({
  firstname: z.string().min(1, '姓（全角）'),
  surname: z.string().min(1, 'Last name is required'),
})

export type FormInput = z.infer<typeof FormDataSchema>;