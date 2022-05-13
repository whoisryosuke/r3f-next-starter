import dynamic from 'next/dynamic'
const Shader = dynamic(() => import('@/components/canvas/Shader/Shader'), {
  ssr: false,
})

const DOM = () => {
  return (
    // Add your own DOM elements here
    <></>
  )
}
const R3F = ({r3f = true}) => {
    // 3D components goes here
  return (
    <>
      <Shader />
    </>
  )
}

function Index() {
  return (
      <>
        <DOM />
        <R3F r3f />
    </>
  )
}

export default Index

export async function getStaticProps() {
  return {
    props: {
      title: 'Index',
    },
  }
}