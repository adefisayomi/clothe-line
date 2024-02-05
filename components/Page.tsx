import Head from 'next/head';
import React, { forwardRef } from 'react';

type PropsPage = {
  children: JSX.Element,
  meta?: React.ReactNode,
  title: string,
};

const Page = forwardRef(({ children, meta, title, ...other }: PropsPage, ref: any) => (
  <>
    <Head>
      <title>{ title ? `${title} | Adefisayomi/clace` : 'Adefisayomi/clace' }</title>
      {meta}
    </Head>

    <div ref={ref} {...other} >
      {children}
    </div>
  </>
));

Page.displayName = 'Page'
export default Page;