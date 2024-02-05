import * as yup from 'yup'

export const contactUsSchema = yup.object({
    email: yup.string().email().required(),
    name: yup.string().min(3).required(),
    message: yup.string().min(20).max(350).required(),
    reason: yup.string(),
    phone: yup.string(),
})