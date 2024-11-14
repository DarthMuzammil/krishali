import Link from 'next/link'
import { pricing } from '@/lib/constants'
import { CheckIcon } from 'lucide-react'

function Container ({ children }) {
  return (
    <div className='container grid items-center justify-center gap-8 px-4 text-center md:px-6 lg:grid-cols-2 lg:gap-16'>
      {children}
    </div>
  )
}

function CallToAction () {
  return (
    <div className='space-y-4'>
      <div className='inline-block rounded-lg bg-[#6c5ce7] px-3 py-1 text-sm font-bold text-white'>
        Personal Coaching
      </div>
      <h2 className='text-3xl font-extrabold tracking-tighter sm:text-4xl md:text-5xl text-[#333]'>
        Unlock Your Muscle Building Potential
      </h2>
      <div className='space-y-2'>
        <p className='mx-auto max-w-[600px] text-[#666] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-medium'>
          Get personalized coaching for muscle building, nutrition, and free
          access to our Hypertrophy app. Take your fitness to the next level
          with our expert guidance.
        </p>
        <div className='mx-auto max-w-[600px] text-[#6c5ce7] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-bold'>
          <div className='text-[#333] font-extrabold'>
            Guaranteed Money Back
          </div>
          - If you're not satisfied, we'll refund your money.
        </div>
      </div>
    </div>
  )
}

function PricingCard () {
  return (
    <div className='flex w-full max-w-md rounded-2xl bg-[#f5f5f5] p-6 shadow-[20px_20px_60px_#d9d9d9,-20px_-20px_60px_#ffffff] relative left-[50%] translate-x-[-50%] justify-center overflow-hidden sm:p-8 md:p-10'>
      <div className='absolute flex inset-0 z-0 bg-gradient-to-br from-[#2980b9] to-[#6dd5fa] opacity-20 blur-[100px] animate-pulse' />
      <div className='relative z-10 space-y-4'>
        <div className='space-y-2'>
          <h3 className='text-2xl font-extrabold text-[#333] sm:text-3xl md:text-4xl'>
            {pricing.title}
          </h3>
          <p className='text-[#666] font-medium sm:text-base md:text-lg'>
            {pricing.description}
          </p>
        </div>
        <div className='flex items-end gap-2'>
          <span className='text-5xl font-extrabold text-[#333] sm:text-6xl md:text-7xl'>
            {pricing.cost}
          </span>
          <span className='text-[#666] font-medium sm:text-base md:text-lg'>
            {pricing.duration}
          </span>
        </div>
        <ul className='grid gap-3 text-[#666] font-medium sm:text-base md:text-lg'>
          {pricing.checklist.map((listItem, index) => {
            return (
              <li key={index} className='flex items-center gap-2'>
                <CheckIcon className='h-5 w-5 fill-[#6c5ce7]' />
                {listItem}
              </li>
            )
          })}
        </ul>
        <div className='flex flex-col gap-2 sm:flex-row'>
          <Link
            href={pricing.contactButton.link}
            className='rounded-2xl bg-[#f5f5f5] px-4 py-2 text-sm font-bold shadow-[5px_5px_15px_#d9d9d9,-5px_-5px_15px_#ffffff] text-[#333]'
            target='_blank'
            rel='noopener noreferrer'
          >
            {pricing.contactButton.title}
          </Link>
          <Link
            href={pricing.purchaseOnlineButton.link}
            className='flex-1 rounded-2xl bg-[#6c5ce7] px-4 py-2 text-sm font-bold text-white shadow-[5px_5px_15px_#d9d9d9,-5px_-5px_15px_#ffffff]'
          >
            <span className='font-extrabold'>
              {pricing.purchaseOnlineButton.title}
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export function Pricing () {
  return (
    <section id='pricing' className='w-full py-12 md:py-24 lg:py-32 bg-white'>
      <Container>
        <CallToAction />
        <PricingCard />
      </Container>
    </section>
  )
}
