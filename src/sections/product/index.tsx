import useResponsive from "@/src/hooks/useResponsive"




export default function Product () {

    const isDesktop = useResponsive() === 'desktop'

    return (
        <div className={`w-full h-screen ${isDesktop ? 'max-h-[80vh]' : 'max-h-[80vh]'} bg-black border rounded-none border-muted h-auto max-w-full`}>
            <img src="https://images.pexels.com/photos/1964581/pexels-photo-1964581.jpeg?cs=srgb&dl=pexels-atef-khaled-1964581.jpg&fm=jpg" alt="" className="object-cover w-full h-full" />
        </div>
    )
}