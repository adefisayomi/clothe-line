import * as yup from 'yup'

export const deliverySchema = yup.object({
    firstName: yup.string().required().min(2),
    lastName: yup.string().optional(),
    address: yup.string().required(),
    country: yup.string().required(),
    state: yup.string().required(),
    city: yup.string().required(),
    postcode: yup.string().optional(),
    phone: yup.string().required(),
})
