import { MainLayout } from "../components/layouts/MainLayout"
import Link from "next/link"
import { DarkLayout } from "../components/layouts/DarkLayout"

export default function About() {
  return (
    <>
      <h1>About page</h1>
      <h1 className={'title'}>
        Ir a <Link href='/'>Home</Link>
      </h1>

      <p className={'description'}>
        Get started by editing{' '}
        <code className={'code'}>pages/about.js</code>
      </p>
    </>
  )
}

About.getLayout = function getLayout( page ) {
  return (
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )
}