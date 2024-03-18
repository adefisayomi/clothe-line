import { Button } from "@/src/components/ui/button";
import { useSettings } from "@/src/hooks";
import { subscribeFormSchema } from "./formSchemas";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import yup from 'yup'
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/src/components/ui/form";
import { Input } from "@/src/components/ui/input";
import axios from 'axios'
import useAlert from "@/src/hooks/useAlert";



export default function FooterNewsLetter () {

    const {subscriptionRef} = useSettings()
    const {setAlert} = useAlert()

    const form = useForm<yup.InferType<typeof subscribeFormSchema>>({
        resolver: yupResolver(subscribeFormSchema),
        defaultValues: {email: ''}
      })

    // ---
    async function onSubmit(data: yup.InferType<typeof subscribeFormSchema>) {
        console.log(data)
        const res = await axios.post('/api/subscriptions', data)
        if (!res.data?.success) return setAlert(res.data.message, 'error')
        else {
            setAlert(res.data.message, 'success')
            return form.reset()
        }
      }

    return (
        <Form {...form}>
            <form  onSubmit={form.handleSubmit(onSubmit)} className="w-full flex items-center gap-1">

                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                        <FormControl>
                        <Input {...field} ref={subscriptionRef} type="email" className=" bg-background h-7 rounded-none flex-1 focus:outline-0 text-xs" placeholder="my@email.com" />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit" className=" h-7 py-1.5 text-xs rounded-sm" size='sm' loading={form.formState.isSubmitting}>
                    subscribe
                </Button>
            </form>
        </Form>
    )
}