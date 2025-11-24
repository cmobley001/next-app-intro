import Main from '@/components/Main'
import Button from '@/components/Button'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Card from '@/components/Card'
import Hero from '@/components/Hero'
import Content from '@/components/Content'
import Flex from '@/components/Flex'
import LabWeek from '@/components/LabWeek'
import CardContainer from '@/components/CardContainer'

const cards = [
  {
    title: 'The Coldest Sunset',
    img: 'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'A cold sunset with vibrant colors over the horizon',
    href: '/about',
    subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    tags: ['#sunset', '#nature', '#photography'],
  },
  {
    title: 'The Warmest Sunset',
    img: 'https://images.unsplash.com/photo-1466618572466-002f11d518db?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'A warm glowing sunset with orange and red hues',
    href: '/blog',
    subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    tags: ['#travel', '#adventure', '#blog'],
  },
  {
    title: 'The Coolest Ocean',
    img: 'https://images.unsplash.com/photo-1468861389126-e0ca735dba0d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'A cool ocean view with waves and blue waters',
    href: 'https://unsplash.com',
    subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    tags: ['#ocean', '#waves', '#blue'],
  },
]

const Page = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen">
        <div className="p-12 flex-1">
          <Hero />
          <Main>
            <CardContainer />
          </Main>
          <Content />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Page
