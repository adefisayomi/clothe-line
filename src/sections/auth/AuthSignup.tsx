import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { signupFormSchema } from "./formSchemas"
import yup from 'yup'
import { Button } from "@/src/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/src/components/ui/form"
import { Input } from "@/src/components/ui/input"
import { LabelSeparator } from "@/src/components/ui/separator"
import useAuth from "@/src/hooks/useAuth"
import SocialAuth from "./SocialAuth"



export default function AuthSignup () {

    const {signupWithEmailAndPassword}= useAuth()
    const form = useForm<yup.InferType<typeof signupFormSchema>>({
        resolver: yupResolver(signupFormSchema),
        defaultValues: {email: '', password: ''}
      })

    // ---
    function onSubmit(data: yup.InferType<typeof signupFormSchema>) {
        signupWithEmailAndPassword(data.email, data.password)
      }
    

    return (
        <div className="flex flex-col">

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
                    create account
                </Button>
            </form>
        </Form>

        <LabelSeparator label='or' className='my-4'/>
        <SocialAuth />

        </div>
    )
}