import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import yup from 'yup'
import { contactUsSchema } from "./formSchema"
import { Button } from "@/components/ui/button"
import { FormControl, FormField, FormItem, FormMessage, Form } from "@/components/ui/form"
import { FloatingInput } from "@/components/ui/floating-input"
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"



export default function ContactUsForm () {

    const form = useForm<yup.InferType<typeof contactUsSchema>>({
        resolver: yupResolver(contactUsSchema),
        defaultValues: {email: '', name: '', message: '', reason: '', phone: ''}
      })

    // ---
    function onSubmit(data: yup.InferType<typeof contactUsSchema>) {
        console.log(data)
      }
    

    return (
        <div className="flex flex-col w-full ">
            <Form {...form}>
            <form  onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">

                <div className="flex items-center gap-2 w-full ">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem className="w-full">
                            <FormControl>
                                <FloatingInput type="text" label="Full Name" {...field}/>
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem className="w-full">
                            <FormControl>
                                <FloatingInput type="email" label="Email Address" {...field}/>
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <div className="flex items-center gap-2 w-full ">
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem className="w-full">
                            <FormControl>
                                <FloatingInput type="tel" label="Phone Number" {...field}/>
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="reason"
                        render={({ field }) => (
                            <FormItem className="w-full">
                            <FormControl>
                                <Select>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Enquiry reason" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                        <SelectLabel>{""}</SelectLabel>
                                        <SelectItem value="product information">product information</SelectItem>
                                        <SelectItem value="shipping">shipping</SelectItem>
                                        <SelectItem value="return">return</SelectItem>
                                        <SelectItem value="order info">order info</SelectItem>
                                        <SelectItem value="others">others</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                        <FormControl>
                            <Textarea placeholder="Your message (360 characters max)." rows={8} {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />

                <Button className="w-full max-w-[12rem] h-fit py-1.5 uppercase text-xs rounded-none">
                    send message
                </Button>
            </form>
        </Form>

        </div>
    )
}