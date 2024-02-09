import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { loginFormSchema } from "./formSchemas"
import yup from 'yup'
import { Button } from "../../components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../../components/ui/form"
import { FloatingInput } from "../../components/ui/floating-input"
import { LabelSeparator } from "~/components/ui/separator"
import SocialAuth from "./SocialAuth"



export default function AuthLogin ({fetcher}: {fetcher: any}) {

    const handleSubmit = (data: any) => fetcher.submit(data, {method: 'POST'})
    const form = useForm<yup.InferType<typeof loginFormSchema>>({
        resolver: yupResolver(loginFormSchema),
        defaultValues: {email: '', password: ''}
      })

    // ---
    function onSubmit(data: yup.InferType<typeof loginFormSchema>) {
        handleSubmit(data)
      }
    

    return (
        <div className="flex flex-col">
        <SocialAuth />
        <LabelSeparator label='or' className='my-4'/>

        <Form {...form}>
            <form  onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">

                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                        <FormControl>
                            <FloatingInput type="email" label="Email" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                        <FormControl>
                            <FloatingInput type="password" label="Password" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />

                <Button size='lg' variant='secondary' loading={fetcher.state === 'submitting'}>
                    Login
                </Button>
            </form>
        </Form>

        </div>
    )
}