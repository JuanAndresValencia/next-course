import { useTheme, Text, Spacer, Image, Container, Link } from "@nextui-org/react"
import NextLink from "next/link"

export const Navbar = () => {

  const { theme } = useTheme()

  return (
    <div style={{
      display: 'flex',
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'start',
      padding: '0px 20px',
      backgroundColor: theme?.colors.gray200.value
    }}>
      <Image 
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        alt="App icon"
        width={70}
        height={70}
      />
      <NextLink href='/' passHref>
        <Link>
          <Text color="white" h2>P</Text>
          <Text h3>okemon</Text>
        </Link>
      </NextLink>
      <Spacer css={{
        flex: '1'
      }}/>
      <NextLink href='/favorites'>
        <Link>
          <Text>Favoritos</Text>
        </Link>
      </NextLink>
    </div>
  )
}