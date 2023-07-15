import Image from 'next/image'
import Banner from './components/Banner'
import Training from './components/Training'
import About from './components/About'
import Countries from './components/Countries'
import Animation from './components/Animation'

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Training></Training>
      <About></About>
      <div >
      <Countries></Countries>
      </div>
    </div>
  )
}
