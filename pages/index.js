import Layout from './components/layout'
import Hero from './components/Hero'
import Features from './components/features'
import Marketplace from './components/marketplace';
import Products from './components/products';
import Company from './components/company';

const featuresId = "section-features";
const productId = "section-products";
const marketId = "section-market";
const companyId = "section-company";

export default function Home() {
  return (
    <div>
      <Layout featuresId={featuresId} productId={productId} marketId={marketId} companyId={companyId}>
        <Hero/>
        <Features id={featuresId}/>
        <Products id={productId}/>
        <Marketplace id={marketId}/>
        <Company id={companyId}/>
      </Layout>
    </div>
  )
}
