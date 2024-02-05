import Page from "@/components/Page"
import Layout from "@/src/layout"
import ContactUsForm from "@/src/sections/contact/contactForm"
import Link from "next/link"
import { ReactNode } from "react"




export default function ContactUs () {

    return (
        <Page title="Contact-Us">
            <div className="w-full grid grid-cols-5 gap-4">

                
                <div className="col-span-4">
                    <h1 className="text-xs font-extrabold uppercase cursor-default mb-1">WORKING HOURS</h1>
                    <ul className="flex flex-col items-start gap-1">
                        <li className="hover:underline text-xs capitalize">EU Available Mon-Fri 9am-6.00pm GMT</li>
                        <li className="hover:underline text-xs capitalize">USA Available Mon-Fri 9am-6.00pm EST</li>
                    </ul>

                    <div className="mt-20 w-full max-w-2xl flex flex-col gap-3">
                        <h1 className="text-xs font-extrabold uppercase cursor-default mb-1">SEND AN ENQUIRY</h1>
                        <ContactUsForm />
                    </div>
                </div>

                <div className="col-start-5">
                    <h1 className="text-xs font-extrabold uppercase underline cursor-default mb-2 text-right">contact us</h1>
                    <ul className="flex flex-col items-end gap-1">
                        <li className="hover:underline text-xs uppercase"><Link href='#'>FAQ</Link></li>
                        <li className="hover:underline text-xs"><Link href='#'>SHIPPING & RETURNS</Link></li>
                        <li className="hover:underline text-xs"><Link href='#'>PAYMENT METHODS</Link></li>
                        <li className="hover:underline text-xs"><Link href='#'>HELP AND CONTACT</Link></li>
                    </ul>
                </div>
            </div>
        </Page>
    )
}

ContactUs.getLayout = (page: ReactNode) => <Layout>{page}</Layout>