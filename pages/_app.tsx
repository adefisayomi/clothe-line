import { AppContext, AppInitialProps, AppLayoutProps } from 'next/app';
import type { NextComponentType } from 'next';
import { ReactNode } from 'react';
import '../styles/globals.css'
import GlobalStateProvider from '@/src/contexts';
import { ThemeProvider } from '@/src/components/themeProvider';
import CustomToast from '@/src/components/CustomToast';
import AnimateRoute from '@/src/components/AnimateRoute';
import { SessionProvider } from "next-auth/react"



const MyApp: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = ({
  Component,
  pageProps: {session, ...pageProps},
}: AppLayoutProps) => {

  const getLayout = Component.getLayout || ((page: ReactNode) => page);

  return (
    <SessionProvider session={session}>
      <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <GlobalStateProvider>
            <main className='font-mono text-sm'>
              <CustomToast />
              <AnimateRoute>
                {getLayout(<Component {...pageProps} />)}
              </AnimateRoute>
            </main>
          </GlobalStateProvider>
        </ThemeProvider>
      </SessionProvider>
  )
};

export default MyApp;