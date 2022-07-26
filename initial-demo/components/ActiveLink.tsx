import Link from "next/link"
import { useRouter } from "next/router"
import { FC } from "react"

const style = {
  color: 'blue',
  textDecoration: 'underline'
}

interface Props {
  text: string
  href: string
}

export const ActiveLink: FC<Props> = ({ text, href }) => {
  
  const { asPath } = useRouter()

  return (
    <Link href={href}>
      <a style={ asPath === href ? style : null }>{text}</a>
    </Link>
  )
}