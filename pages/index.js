import Layout from '../components/layout'
import Hero from '../components/Hero'
import Features from './features'

const featuresId = "section-features";
export default function Home() {
  return (
    <div>
      <Layout featuresId={featuresId}>
        <Hero/>
        <Features id={featuresId}/>
      </Layout>
    </div>
  )
}
