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
} from "@/src/components/ui/form"
import { LabelSeparator } from "@/src/components/ui/separator"
import SocialAuth from "./SocialAuth"
import { Input } from "@/src/components/ui/input"
import useAuth from "@/src/hooks/useAuth"



export default function AuthLogin () {

    const {signinWithEmailAndPassword} = useAuth()
    const form = useForm<yup.InferType<typeof loginFormSchema>>({
        resolver: yupResolver(loginFormSchema),
        defaultValues: {email: '', password: ''}
      })

    // ---
    function onSubmit(data: yup.InferType<typeof loginFormSchema>) {
        signinWithEmailAndPassword(data.email, data.password)
      }
    

    return (
        <div className="flex flex-col relative">
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
                            <Input type="email" placeholder="Email" {...field} />
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
                            <Input type="password" placeholder="Password" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />

                <Button size='lg' loading={form.formState.isSubmitting}>
                    Login
                </Button>
            </form>
        </Form>

        </div>
    )
}