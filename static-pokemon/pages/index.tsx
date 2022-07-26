import type { NextPage } from 'next'
import { Button } from '@nextui-org/react'

const Home: NextPage = () => {
  return (
    <>
      <h1>Pokemon app</h1>
      <Button 
        onPress={() => console.log('Hello')}
        color='error'
      >Hello</Button>
    </>
  )
}

export default Home
