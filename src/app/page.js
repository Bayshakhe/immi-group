import Image from 'next/image'
import Banner from './components/Banner'
import Training from './components/Training'

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Training></Training>
    </div>
  )
}
