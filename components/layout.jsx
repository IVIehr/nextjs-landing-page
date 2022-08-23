import Head from 'next/head';
import Header from './header';

export const siteTitle = "Invenerry - Inventory Management System";

const Layout = ({children}) => {
  return (
    <div>
        <Head>
            <meta
            name="description"
            content="Invenerry - Inventory Management System"
            />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header/>
          <main>{children}</main>
          <footer>footer</footer>
    </div>
  )
}

export default Layout