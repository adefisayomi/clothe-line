import { AppContext, AppInitialProps, AppLayoutProps } from 'next/app';
import type { NextComponentType } from 'next';
import { ReactNode } from 'react';
import { ThemeProvider } from '@/components/themeProvider';
import '../styles/globals.css'
import AnimateRoute from '@/components/AnimateRoute';
import GlobalStateProvider from '@/src/contexts';
import CustomToast from '@/components/CustomToast';


const MyApp: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = ({
  Component,
  pageProps,
}: AppLayoutProps) => {

  const getLayout = Component.getLayout || ((page: ReactNode) => page);

  return (
    <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
        <GlobalStateProvider>
          <main className='font-mono'>
            <CustomToast />
            <AnimateRoute>
              {getLayout(<Component {...pageProps} />)}
            </AnimateRoute>
          </main>
        </GlobalStateProvider>
      </ThemeProvider>
  )
};

export default MyApp;