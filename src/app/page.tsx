import About from '@/components/about'
import Email from '@/components/email'
import HeroSection from '@/components/heroSection'
import Projects from '@/components/projects'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='mih-h-screen flex flex-col max-w-7xl mx-auto'>
      <div className="container p-6 lg:p-8 mx-auto">
        <HeroSection />
        <About/>
        <Projects/>
        <Email/>        
      </div>
    </main>
  )
}
