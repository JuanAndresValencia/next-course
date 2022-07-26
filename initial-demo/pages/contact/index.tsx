import { MainLayout } from "../../components/layouts/MainLayout";
import Navbar from "../../components/Navbar";
import Link from "next/link";

export default function Contact() {
  return (
    <MainLayout>
      <h1 className={'title'}>
        Ir a <Link href='/'>Home</Link>
      </h1>

      <p className={'description'}>
        Get started by editing{' '}
        <code className={'code'}>pages/contact.js</code>
      </p>
    </MainLayout>
  )
}