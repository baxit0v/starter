import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Sponsor } from '@/components/sponsor'
import { Step } from '@/components/step'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Sponsor/>
      <Step/>
    </div>
  )
}
