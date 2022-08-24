import Layout from '../components/layout'
import Hero from '../components/Hero'
import Features from './features'

export default function Home() {
  return (
    <div>
      <Layout>
        <Hero/>
        <Features/>
      </Layout>
    </div>
  )
}
