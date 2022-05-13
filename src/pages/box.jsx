import Instructions from '@/components/dom/Instructions'
import dynamic from 'next/dynamic'

const Box = dynamic(() => import('@/components/canvas/Box'), {
  ssr: false,
})

const DOM = () => {
  return (
    // Add your own DOM elements here
    <Instructions />
  )
}

const R3F = ({r3f = true}) => {
  return (
    <>
      <Box route='/' />
    </>
  )
}

const Page = () => {
  return (
    <>
      <DOM />
      <R3F r3f />
    </>
  )
}

export default Page

export async function getStaticProps() {
  return {
    props: {
      title: 'Box',
    },
  }
}
