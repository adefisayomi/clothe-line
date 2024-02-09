import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";


export function Shipping () {

  return (
    <div className="w-full flex flex-col gap-3 text-xs">
        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat quidem quae esse in laboriosam voluptate mollitia, voluptatibus saepe, labore, ratione consectetur illum beatae explicabo animi. Natus officia recusandae qui animi amet maiores unde beatae assumenda, similique esse velit perspiciatis aspernatur.
        </p>

        <p>Need more information? Read our <span><Link href={'#'}>Shipping & Delivery conditions</Link></span>.</p>
    </div>
  );
};



export function Payment () {

    return (
      <div className="w-full flex flex-col gap-5 text-xs font-medium">
          <p>We accept all major credits cards as well as Paypal.<span className="underline"><Link href={'#'}>More Info</Link></span>.</p>
          <div className="flex items-center gap-2">
                <Icon icon="formkit:visa" className="w-10 h-10" />
                <Icon icon="logos:paypal" className="w-7 h-7" />
                <Icon icon="logos:google-pay" className="w-10 h-10" />
                <Icon icon="grommet-icons:mastercard" className="w-10 h-10" />
          </div>
      </div>
    );
  };

  
  
export function Help () {

    return (
      <div className="w-full flex flex-col gap-3 text-xs md:max-w-[80%]">
          <div className="space-y-2 text-sm flex flex-col items-start gap-0">
            <div className="flex p-0">
              <p className="mr-1 capitalize">Phone:</p>
              <a href="tel:+234-816-920-8730" aria-label="Our phone" title="Our phone" className="underline text-xs">+234 816 920 8730</a>
            </div>
            <div className="flex">
              <p className="mr-1 capitalize">Email:</p>
              <a href="mailto:claceey@gmail.com" aria-label="Our email" title="Our email" className="underline text-xs">claceey@gmail.com</a>
            </div>
          </div>
  
          <p className="tet-xs capitalize">Customer service support, inquiries related to: prices and currency, order and preorder payment, order status, shipment info, return, and exchange.</p>

          <p className="mt-4"> 
            Need more information? <a href="mailto:claceey@gmail.com" aria-label="Our email" title="Our email" className="underline text-xs">Send</a> us a message.
          </p>
      </div>
    );
  };
  