import Link from "next/link"
import { Icon } from '@iconify/react';
import TextMaxLine from "@/components/TextMaxLine";
import FooterNewsLetter from "@/src/sections/newsletter/footerNewsLetter";


export default function Footer  () {

    return (
        <div className="p-2 mt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-full border-t border-muted">

        <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <Link  href="/" aria-label="Go home" title="Company">
              <span className="text-sm font-bold tracking-wide  uppercase">Adefisayomi/clace</span>
            </Link>
            <div className="mt-6 lg:max-w-sm">
              <TextMaxLine line={3} className='text-xs'>
                Explore a fusion of bold colors, innovative patterns, and quality craftsmanship that reflects the dynamic essence of modern fashion. From trendy hoodies and sneakers to tailored suits and chic accessories, our diverse collection caters to individuals who embrace their unique style while navigating the diverse landscapes of city life.
              </TextMaxLine>
              
              <div className="mt-2">
                <FooterNewsLetter />
              </div>

            </div>
          </div>

          <div className="space-y-2 text-sm">
            <p className="text-xs uppercase font-bold tracking-wide">Contacts</p>
            <div className="flex">
              <p className="mr-1 capitalize">Phone:</p>
              <Link  href="tel:+234-816-920-8730" aria-label="Our phone" title="Our phone" className="transition-colors duration-300 text-xs">+234 816 920 8730</Link>
            </div>
            <div className="flex">
              <p className="mr-1 capitalize">Email:</p>
              <Link  href="mailto:claceey@gmail.com" aria-label="Our email" title="Our email" className="transition-colors duration-300 text-xs">claceey@gmail.com</Link>
            </div>
            <div className="flex">
              <p className="mr-1 capitalize">Address:</p>
              <Link  href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" aria-label="Our address" title="Our address" className="transition-colors duration-300 text-xs">
                19, ogunoloko road, lagos.
              </Link>
            </div>
          </div>

          <div>
            <span className="text-xs font-bold tracking-wide uppercase">Social</span>
            <div className="flex items-center mt-1 space-x-3">
              <Link  href="/" className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
              <Icon icon="ri:facebook-fill" className="w-6 h-6" />
              </Link>
              <Link  href="/" className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
              <Icon icon="logos:twitter" className="w-6 h-6" />
              </Link>
              <Link  href="/" className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
              <Icon icon="mdi:instagram" className="w-6 h-6" />
              </Link>
            </div>

            <p className="mt-4 text-xs">
              Follow us on our socials to be the first to see our latest release.
            </p>
          </div>

        </div>

        <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t border-muted lg:flex-row">
          <p className="text-xs">
            © Copyright 2024 Clace Innovative Horizone. All rights reserved.
          </p>
          <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
              <Link  href="/" className="text-xs transition-colors duration-300 hover:text-deep-purple-accent-400">F.A.Q</Link>
            </li>
            <li>
              <Link  href="/" className="text-xs transition-colors duration-300 hover:text-deep-purple-accent-400">Privacy Policy</Link>
            </li>
            <li>
              <Link  href="/" className="text-xs transition-colors duration-300 hover:text-deep-purple-accent-400">Terms &amp; Conditions</Link>
            </li>
          </ul>
        </div>
      </div>
    )
}