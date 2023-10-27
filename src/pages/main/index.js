import NavBar from '@/components/NavBar'
import Hero from './Hero'
import Footer from '@/components/Footer'
import Page from '@/components/Page'
import Features from './Features'
import HowItWorks from './HowItWorks'
import OpenTheGarden from './OpenTheGarden'

export default function Home() {
  return (
    <Page>
      <NavBar />
      <Hero />
      <Features />
      <HowItWorks />
      <OpenTheGarden />
      <Footer />
    </Page>
  )
}
