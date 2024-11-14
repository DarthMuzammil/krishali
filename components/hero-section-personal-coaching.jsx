import { heroSectionPersonalCoaching } from '@/lib/constants'

function Button ({ title }) {
  return (
    <Button
      size='lg'
      className='w-full min-[400px]:w-auto bg-gradient-to-r from-[#9333ea] to-[#7c3aed] text-white font-bold hover:from-[#7c3aed] hover:to-[#9333ea] transition-colors'
    >
      {title}
    </Button>
  )
}

function Container ({ children }) {
  return (
    <section
      className='w-full h-[80vh] bg-cover bg-center bg-no-repeat'
      style={{ backgroundImage: 'url(\'/gym4.jpg\')' }}
    >
      <div className='container grid gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-12 items-center h-full'>
        <div className='flex flex-col justify-center space-y-8'>{children}</div>
      </div>
    </section>
  )
}

function ButtonContainer ({ children, className = '' }) {
  return <div className={className}>{children} </div>
}

function TextContainer ({ children }) {
  return <div className='space-y-6'>{children}</div>
}

function H1 ({ title }) {
  return (
    <h1 className='text-5xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none text-black bg-gradient-to-r from-[#9333ea] to-[#7c3aed] bg-clip-text text-transparent'>
      {title}
    </h1>
  )
}

function Paragraph ({ description }) {
  return (
    <p className='max-w-[600px] text-white text-xl md:text-2xl font-bold'>
      {description}
    </p>
  )
}

export default function HeroSectionPersonalCoaching () {
  return (
    <Container>
      <TextContainer>
        <H1 title={heroSectionPersonalCoaching.title} />
        <Paragraph description={heroSectionPersonalCoaching.description} />
      </TextContainer>
      <ButtonContainer className='flex flex-col gap-4 min-[400px]:flex-row'>
        <Button title={heroSectionPersonalCoaching.button1Title} />
        <Button title={heroSectionPersonalCoaching.button2Title} />
      </ButtonContainer>
    </Container>
  )
}
