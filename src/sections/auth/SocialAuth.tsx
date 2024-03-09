import { Button } from '@/src/components/ui/button';
import { Icon } from '@iconify/react';
import useAuth from '@/src/hooks/useAuth';


export function GoogleAuth () {

    const {googleAuth} = useAuth()

    return (
        <Button variant='outline' className='w-full capitalize font-bold justify-start h-12' size='lg' onClick={googleAuth}>
            <Icon icon="devicon:google" className="mr-2 h-6 w-6" />
            continue with Google
        </Button>
    )
}

export default function SocialAuth () {

    return (
        <div className='flex flex-col gap-4'>
            <GoogleAuth />
        </div>
    )
}