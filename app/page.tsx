import Hero from '@/components/Hero'
import Introduction from '@/components/Introduction'
import JoinLivestream from '@/components/JoinLivestream'
import Ministries from '@/components/Ministries'
import FAQ from '@/components/FAQ'

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="relative">
        <Hero />
      </div>
      <Introduction />
      <JoinLivestream />
      <Ministries />
      <FAQ />
    </div>
  )
}

