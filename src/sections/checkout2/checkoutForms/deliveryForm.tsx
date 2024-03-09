import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { deliverySchema } from "./formSchema"
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
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { CountryComponent } from "./countriesAndState"



export default function DeliveryForm () {

    const form = useForm<yup.InferType<typeof deliverySchema>>({
        resolver: yupResolver(deliverySchema),
        defaultValues: {address: "", city: "", country: "", firstName: "", lastName: "", postcode: "", state: "", phone:''}
      })

    // ---
    function onSubmit(data: yup.InferType<typeof deliverySchema>) {
        console.log(data)
      }

    return (
        <Form {...form}>
            <form  onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                    <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                            <FormItem>
                            <FormControl>
                                <Input type="text" placeholder="First Name" {...field}  />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                            <FormItem>
                            <FormControl>
                                <Input type="text" placeholder="Last Name" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />  
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                            <FormControl>
                                <Input type="tel" placeholder="Phone Number" {...field}  />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="country"
                        render={({ field }) => (
                            <FormItem>
                            <FormControl>
                                <CountryComponent value={field.value} onChange={field.onChange}/>
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />  
                </div>

                <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                        <FormItem>
                        <FormControl>
                            <Input type="text" placeholder="Address" {...field}  />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                    <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                            <FormItem>
                            <FormControl>
                                <Input type="text" placeholder="City" {...field}  />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="state"
                        render={({ field }) => (
                            <FormItem>
                            <FormControl>
                                <Input type="text" placeholder="State" {...field}  />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                <FormField
                        control={form.control}
                        name="postcode"
                        render={({ field }) => (
                            <FormItem>
                            <FormControl>
                                <Input type="text" placeholder="Postal code / Zip code" {...field}  />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <Button size='sm' className="uppercase w-fit" loading={form.formState.isSubmitting}>
                    save shipping information
                </Button>
            </form>
        </Form>
    )
}