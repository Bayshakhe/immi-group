import Image from 'next/image'
import Banner from './components/Banner'
import Training from './components/Training'
import About from './components/About'

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Training></Training>
      <About></About>
    </div>
  )
}
