import { Icon } from '@iconify/react';
import {GithubIcon} from 'lucide-react'
import { Button } from '../../components/ui/button';
import { Form } from "@remix-run/react";
import { SocialsProvider } from 'remix-auth-socials';
import { ReactElement } from 'react';


interface SocialButtonProps {
    provider: SocialsProvider,
    label: string,
    variant?: "default" | "outline",
    icon?: ReactElement
  }

const SocialButton: React.FC<SocialButtonProps> = ({ provider, label, variant, icon }) => (
    <Form action={`/auth/${provider}`} method="POST">
        <Button variant={variant} className='w-full justify-start h-12' size='lg'>
            {icon}
            {label}
        </Button>
    </Form>
);



export function GithubAuth () {
    return (
        <SocialButton 
            provider={SocialsProvider.GOOGLE} 
            label="continue with Github" 
            icon={<GithubIcon className="mr-2 h-6 w-6" />} 
            variant='default' 
        />
    )
}



export function GoogleAuth () {

    return (
        <SocialButton 
            provider={SocialsProvider.GOOGLE} 
            label="continue with Google" 
            icon={<Icon icon="devicon:google" className="mr-2 h-6 w-6" />} 
            variant='outline' 
        />
    )
}

export default function SocialAuth () {

    return (
        <div className='flex flex-col gap-4'>
            <GoogleAuth />
            {/* <GithubAuth /> */}
        </div>
    )
}