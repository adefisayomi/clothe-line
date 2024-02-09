import useResponsive from "@/src/hooks/useResponsive"
import { _products } from "./_data";



export default function Products () {

    const items = [
        <div key="1">Item 1</div>,
        <div key="2">Item 2</div>,
        <div key="3">Item 3</div>,
        <div key="3">Item 3</div>,
        <div key="3">Item 3</div>,
        <div key="3">Item 3</div>,
        <div key="3">Item 3</div>,
      ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-1">
        {_products.map((product, index) => (
          <div key={index} className=" flex ">
            <img
                src={product.url}
                alt=""
                className="object-cover"
            />
          </div>
        ))}
      </div>
    )
}


export function Product () {

    const isDesktop = useResponsive() === 'desktop'

    return (
        <div className={`w-full h-screen ${isDesktop ? 'max-h-[80vh]' : 'max-h-[80vh]'} bg-black border rounded-none border-muted h-auto max-w-full`}>
            <img src="https://images.pexels.com/photos/1964581/pexels-photo-1964581.jpeg?cs=srgb&dl=pexels-atef-khaled-1964581.jpg&fm=jpg" alt="" className="object-cover w-full h-full" />
        </div>
    )
}