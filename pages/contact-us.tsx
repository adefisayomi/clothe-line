import Page from "@/src/components/Page"
import Layout from "@/src/layout"
import ContactUsForm from "@/src/sections/contact/contactForm"
import { useTheme } from "next-themes"
import Image from "next/image"
import Link from "next/link"
import { ReactNode } from "react"




export default function ContactUs () {

    const {theme} = useTheme()

    return (
        <Page title="Contact-Us">
            <div>
                <div className="w-full flex flex-col md:flex-row gap-4 items-start justify-between">
                    <div className="flex flex-col items-start">
                        <h1 className="text-xs font-extrabold uppercase cursor-default mb-1">WORKING HOURS</h1>
                        <ul className="flex flex-col items-start gap-1">
                            <li className="hover:underline text-xs capitalize">EU Available Mon-Fri 9am-6.00pm GMT</li>
                            <li className="hover:underline text-xs capitalize">USA Available Mon-Fri 9am-6.00pm EST</li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-start md:items-end">
                        <h1 className="text-xs font-extrabold underline cursor-default mb-1">contact us</h1>
                        <ul className="flex flex-col items-start md:items-end gap-1">
                            <li className="hover:underline text-xs uppercase"><Link href='#'>FAQ</Link></li>
                            <li className="hover:underline text-xs"><Link href='#'>SHIPPING & RETURNS</Link></li>
                            <li className="hover:underline text-xs"><Link href='#'>PAYMENT METHODS</Link></li>
                            <li className="hover:underline text-xs"><Link href='#'>HELP AND CONTACT</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="flex items-center justify-between flex-col-reverse md:flex-row mt-1 p-0 ">
                    <div className=" w-full md:max-w-3xl flex flex-col gap-3">
                        <h1 className="text-sm font-extrabold uppercase cursor-default mb-1">SEND AN ENQUIRY</h1>
                        <ContactUsForm />
                    </div>
                    <div>
                        <Image
                            src={ theme === 'dark' ? '/customer-support2.svg' : '/customer-support.svg'}
                            alt="Customer-support"
                            width={600}
                            height={600}
                            objectFit="cover"
                        />
                    </div>
                </div>
            </div>
        </Page>
    )
}

ContactUs.getLayout = (page: ReactNode) => <Layout>{page}</Layout>