import * as yup from 'yup'

export const subscribeFormSchema = yup.object({
    email: yup.string().email().required(),
})