'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from '@/components/ui/card'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { DumbbellIcon, BarChart2Icon } from 'lucide-react'
import {
  aboutTrainer,
  signUp,
  whatYouGet,
  testimonials
} from '@/lib/constants'
import { Header } from './header'
import { Pricing } from './pricing'
import Footer from './footer'
import useScrollToSection from '@/lib/useScrollToSection'

function AboutTrainer ({ name, description }) {
  return (
    <section id='about' className='w-full py-12 md:py-24 lg:py-32'>
      <div className='container grid gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-12 items-center'>
        <div className='relative md:w-[550px] md:h-[550px]'>
          <img
            src='/trainer.jpg'
            width='550'
            height='550'
            alt='Krishali, Fitness Influencer'
            className='mx-auto aspect-square overflow-hidden rounded-full object-cover border-8 border-white/20 shadow-2xl'
          />
          <div className='absolute top-0 justify-center w-full h-full rounded-full bg-gradient-to-b from-transparent to-white/50' />
        </div>
        <div className='flex flex-col justify-center space-y-8'>
          <div className='space-y-6'>
            <h2 className='text-4xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-[#9333ea] to-[#7c3aed] bg-clip-text text-transparent'>
              {`About ${name}`}
            </h2>
            <p className='max-w-[600px] text-muted-foreground text-xl md:text-2xl font-bold'>
              {`${description}`}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function SignUp ({ email, setEmail, isLoading, handleSubmit }) {
  return (
    <section
      id='signup'
      className='w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted'
    >
      <div className='container px-4 md:px-6'>
        <div className='mx-auto max-w-3xl space-y-8 text-center'>
          <h2 className='text-4xl font-bold tracking-tighter sm:text-5xl'>
            {`${signUp.signUpTagline}`}
          </h2>
          <p className='max-w-[600px] mx-auto text-black md:text-xl/relaxed font-bold'>
            {`${signUp.signUpDescription}`}
          </p>
        </div>
      </div>
    </section>
  )
}

function CardWrapper ({
  index,
  card,
  title,
  description,
  content,
  toggleCard,
  activeCard
}) {
  return (
    <Card
      key={index}
      className={`flex flex-col justify-between h-full bg-background shadow-lg ${
        activeCard === index
          ? 'border-2 border-[#9333ea]'
          : 'hover:shadow-xl transition-shadow duration-300'
      }`}
      onClick={() => toggleCard(index)}
    >
      <CardHeader>
        <CardTitle className='bg-gradient-to-r from-[#9333ea] to-[#7c3aed] bg-clip-text text-transparent font-bold'>
          {title}
        </CardTitle>
        <CardDescription className='bg-gradient-to-r from-[#9333ea] to-[#7c3aed] bg-clip-text text-transparent font-bold'>
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className='flex-1 text-muted-foreground'>
        <p>{content}</p>
      </CardContent>
      <CardFooter>
        {card.link || (
          <Button className='w-full bg-gradient-to-r from-[#9333ea] to-[#7c3aed] text-white font-bold hover:from-[#7c3aed] hover:to-[#9333ea] transition-colors'>
            Learn More
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

function InfoCard ({ activeCard, toggleCard }) {
  return (
    <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
      {whatYouGet.map((card, index) => (
        <CardWrapper
          key={index}
          card={card}
          activeCard={activeCard}
          index={index}
          toggleCard={toggleCard}
          title={card.title}
          description={card.description}
          content={card.content}
        />
      ))}
    </div>
  )
}

function Features ({ activeCard, toggleCard }) {
  return (
    <section
      id='whatyouget'
      className='w-full py-12 md:py-24 lg:py-32 bg-muted'
    >
      <div className='container px-4 md:px-6'>
        <div className='mx-auto max-w-5xl space-y-12'>
          <div className='space-y-4 text-center'>
            <h2 className='text-4xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-[#9333ea] to-[#7c3aed] bg-clip-text text-transparent'>
              What You Get
            </h2>
            <p className='max-w-[800px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-bold'>
              Invest in your fitness journey and receive these exclusive
              benefits
            </p>
          </div>
          <InfoCard toggleCard={toggleCard} activeCard={activeCard} />
        </div>
      </div>
    </section>
  )
}

function TestimonialCard ({ content, name, job }) {
  return (
    <Card className='flex flex-col justify-between h-full bg-background shadow-lg hover:shadow-xl transition-shadow duration-300'>
      <CardContent className='flex-1 text-muted-foreground p-4'>
        <blockquote>
          <p>{content}</p>
        </blockquote>
      </CardContent>
      <CardFooter>
        <div className='flex items-center space-x-4'>
          <Avatar className='h-12 w-12 border'>
            <AvatarImage src='/placeholder-user.jpg' />
            <AvatarFallback>EJ</AvatarFallback>
          </Avatar>
          <div>
            <p className='font-medium bg-gradient-to-r from-[#9333ea] to-[#7c3aed] bg-clip-text text-transparent'>
              {name}
            </p>
            <p className='text-sm text-muted-foreground'>{job}</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
function Testimonials ({ clientTestimonials }) {
  return (
    <section
      id='testimonials'
      className='w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted'
    >
      <div className='container px-4 md:px-6'>
        <div className='mx-auto max-w-5xl space-y-12'>
          <div className='space-y-4 text-center'>
            <h2 className='text-4xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-[#9333ea] to-[#7c3aed] bg-clip-text text-transparent'>
              {clientTestimonials.title}
            </h2>
            <p className='max-w-[800px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
              {clientTestimonials.description}
            </p>
          </div>
          <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            <TestimonialCard
              content={clientTestimonials.content[1].testimonial}
              name={clientTestimonials.content[1].name}
              job={clientTestimonials.content[1].job}
            />
            <TestimonialCard
              content={clientTestimonials.content[2].testimonial}
              name={clientTestimonials.content[2].name}
              job={clientTestimonials.content[2].job}
            />
            <TestimonialCard
              content={clientTestimonials.content[0].testimonial}
              name={clientTestimonials.content[0].name}
              job={clientTestimonials.content[0].job}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function Main ({ children, className = '' }) {
  return <main className={className}>{children}</main>
}

function HeroSection ({ handleSignUp }) {
  const scrollToSection = useScrollToSection()

  const handleAction = () => {
    scrollToSection('pricing')
  }
  const handleAction2 = () => {
    scrollToSection('whatyouget')
  }

  return (
    <section className='py-24 bg-gradient-to-br  from-purple-600 to-indigo-700 text-white'>
      <div className='container mx-auto px-4 md:px-6 lg:px-8'>
        <div className='flex flex-col md:flex-row items-center justify-between'>
          <div className='w-full md:w-1/2 text-center md:text-left mb-10 md:mb-0'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6'>
              Transform Your <span className='text-yellow-300'>Body</span> with
              Krishali
            </h1>
            <p className='text-xl md:text-2xl mb-8 font-medium text-purple-100'>
              Experience a revolutionary fitness journey with our evidence-based
              workouts. Track progress, access personalized plans, and connect
              with expert coaches - all in one place.
            </p>
            <div className='flex flex-col gap-4 min-[400px]:flex-row'>
              <Button
                onClick={handleAction2}
                size='lg'
                className='w-full min-[400px]:w-auto bg-gradient-to-r from-[#9333ea] to-[#7c3aed] text-white font-bold hover:from-[#7c3aed] hover:to-[#9333ea] transition-colors'
              >
                Start Your Journey
              </Button>
              <Button
                onClick={handleAction}
                size='lg'
                className='w-full min-[400px]:w-auto bg-gradient-to-r from-[#9333ea] to-[#7c3aed] text-white font-bold hover:from-[#7c3aed] hover:to-[#9333ea] transition-colors'
              >
                Join Now
              </Button>
            </div>
          </div>
          <div className='w-full md:w-1/2 relative'>
            <img
              src='/gym4.jpg'
              alt='Hero Image'
              className='rounded-lg shadow-2xl max-w-full h-auto'
              style={{
                clipPath: 'polygon(10% 0, 100% 0%, 90% 100%, 0% 100%)'
              }}
            />
            <div className='absolute -bottom-10 -left-10 bg-white p-4 rounded-lg shadow-xl'>
              <DumbbellIcon className='w-12 h-12 text-purple-600' />
            </div>
            <div className='absolute -top-10 -right-2 md:-right-10 bg-white p-4 rounded-lg shadow-xl'>
              <BarChart2Icon className='w-12 h-12 text-purple-600' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export function PersonalCoaching () {
  const [activeCard, setActiveCard] = useState(null)
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const toggleCard = (index) => {
    setActiveCard(activeCard === index ? null : index)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsLoading(false)
    setEmail('')
  }
  return (
    <div className='flex flex-col items-center justify-center w-auto min-h-[100dvh]'>
      <Header />
      <Main className='flex-1'>
        <HeroSection handleSignUp={handleSubmit} />
        <AboutTrainer
          name={aboutTrainer.name}
          description={aboutTrainer.description}
        />
        <SignUp
          handleSubmit={handleSubmit}
          isLoading={isLoading}
          email={email}
          setEmail={setEmail}
        />
        <Features toggleCard={toggleCard} activeCard={activeCard} />
        <Testimonials clientTestimonials={testimonials[0]} />
        <Pricing />
      </Main>
      <Footer />
    </div>
  )
}
