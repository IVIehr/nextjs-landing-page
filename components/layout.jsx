import Head from 'next/head';
import Header from './header';
import Footer from './footer';

export const siteTitle = "Invenerry - Inventory Management System";

const Layout = ({children, featuresId, productId, companyId , marketId}) => {
  return (
    <div>
        <Head>
            <meta
            name="description"
            content="Invenerry - Inventory Management System"
            />
            <link rel="icon" href="/workflow.svg" />
        </Head>
        <Header featuresId={featuresId} productId={productId} companyId={companyId} marketId={marketId}/>
        <main>{children}</main>
        <Footer/>
    </div>
  )
}

export default Layout