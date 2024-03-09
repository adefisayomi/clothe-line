import Routes from "@/src/Routes";
import Page from "@/src/components/Page";
import { useResponsive } from "@/src/hooks";
import Layout from "@/src/layout";
import AuthLogin from "@/src/sections/auth/AuthLogin";
import Link from "next/link";
import { ReactNode } from "react";




export default function Login () {

    const isDesktop = useResponsive() === 'desktop'


    return (
        <Page title="Login ">
            <div className='flex flex-col md:flex-row gap-1 my-5'>
                {isDesktop && <div className="flex-1" />}

                <div className=" flex-1 mb-16 md:mb-0">
                    <h1 className="scroll-m-20 text-md uppercase  font-bold tracking-tight mb-2">
                        Login
                    </h1>
                    <AuthLogin />
                
                    <div className="flex items-center justify-between mt-4">
                        <Link href={Routes.resetPassword} className="text-xs font-bold underline w-fit">Reset password</Link>
                        <Link href={Routes.signup} className="text-xs font-bold underline w-fit">create account?</Link>
                    </div>
                </div>

                <div className=" flex-1 flex flex-col items-end gap-4">
                    <div className="flex flex-col items-end">
                        <h1 className="text-xs font-extrabold uppercase cursor-default mb-1">WORKING HOURS</h1>
                        <ul className="flex flex-col items-start md:items-end gap-1">
                            <li className="hover:underline text-xs capitalize">EU Available Mon-Fri 9am-6.00pm GMT</li>
                            <li className="hover:underline text-xs capitalize">USA Available Mon-Fri 9am-6.00pm EST</li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-end">
                        <h1 className="text-xs font-extrabold underline cursor-default mb-1">contact us</h1>
                        <ul className="flex flex-col  gap-1 md:items-end">
                            <li className="hover:underline text-xs uppercase"><Link href='#'>FAQ</Link></li>
                            <li className="hover:underline text-xs"><Link href='#'>SHIPPING & RETURNS</Link></li>
                            <li className="hover:underline text-xs"><Link href='#'>PAYMENT METHODS</Link></li>
                            <li className="hover:underline text-xs"><Link href='#'>HELP AND CONTACT</Link></li>
                        </ul>
                    </div>
                </div>
                {/* <div className="w-full md:max-w-md flex flex-col gap-3">
                <h1 className="scroll-m-20 text-md uppercase  font-bold tracking-tight mb-2">
                    Login
                </h1>
                <AuthLogin />
            
                <div className="flex items-center justify-between">
                    <Link href={Routes.resetPassword} className="text-sm w-fit">Reset password</Link>
                    <Link href={Routes.signup} className="text-sm w-fit">create account?</Link>
                </div>
                </div>

                {isDesktop && 
                <div className=" flex flex-col gap-2 md:gap-6">
                    <div className="flex flex-col">
                        <h1 className="text-xs font-extrabold uppercase cursor-default mb-1">WORKING HOURS</h1>
                        <ul className="flex flex-col items-start gap-1">
                            <li className="hover:underline text-xs capitalize">EU Available Mon-Fri 9am-6.00pm GMT</li>
                            <li className="hover:underline text-xs capitalize">USA Available Mon-Fri 9am-6.00pm EST</li>
                        </ul>
                    </div>

                    <div className="flex flex-col">
                        <h1 className="text-xs font-extrabold underline cursor-default mb-1">contact us</h1>
                        <ul className="flex flex-col  gap-1">
                            <li className="hover:underline text-xs uppercase"><Link href='#'>FAQ</Link></li>
                            <li className="hover:underline text-xs"><Link href='#'>SHIPPING & RETURNS</Link></li>
                            <li className="hover:underline text-xs"><Link href='#'>PAYMENT METHODS</Link></li>
                            <li className="hover:underline text-xs"><Link href='#'>HELP AND CONTACT</Link></li>
                        </ul>
                    </div>
                </div>} */}
            </div>
        </Page>
    )
}

Login.getLayout = (page: ReactNode) => <Layout>{page}</Layout>