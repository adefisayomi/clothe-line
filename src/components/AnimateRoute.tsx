import {AnimatePresence, motion} from 'framer-motion'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'



export default function AnimateRoute ({children}: {children: ReactNode}) {

  const {route} = useRouter()

    return (
        <AnimatePresence mode="wait">
          <motion.div
            key={route}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
    )
}