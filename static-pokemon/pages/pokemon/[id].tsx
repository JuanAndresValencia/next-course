import { NextPage, GetStaticProps, GetStaticPaths } from "next"
import { useRouter } from "next/router"
import { Layout } from "../../components/layouts"
import { pokeApi } from '../../api/index'
import { Pokemon } from "../../interfaces"
import { Card, Grid, Text, Button, Container, Image } from "@nextui-org/react"
import { localFavorites } from "../../utils"

interface Props {
  pokemon: Pokemon
}

const Pokemon: NextPage<Props> = ({ pokemon }) => {

  const router = useRouter()

  const onToggleFavorite = () => {
    localFavorites.toggleFavorite(pokemon.id)
  }

  return (
    <Layout title={pokemon.name}>
      <Grid.Container css={{ marginTop: '5px'}} gap={2}>
        <Grid xs={12} sm={4}>
          <Card isHoverable={true} css={{ padding: '30px'}}>
            <Card.Body>
              <Card.Image 
                src={pokemon.sprites.other?.dream_world.front_default}
                alt={pokemon.name}
                width='100%'
                height='200px'
              />
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header css={{ display: 'flex', justifyContent: 'space-between'}}>
              <Text h1 transform="capitalize">{pokemon.name}</Text>
              <Button color='gradient' onPress={onToggleFavorite}>
                Guardar en favoritos
              </Button>
            </Card.Header>

            <Card.Body>
              <Text size={30}>Sprites</Text>

              <Container direction="row" display="flex">
                <Image 
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image 
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image 
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image 
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {

  const pokemon = [...Array(152)].map((value, index) => `${index + 1}`)

  return {
    paths: pokemon.map( id => ({
      params: {id}
    })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  
  const { id } = params as { id: string }

  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`)

  return {
    props: {
      pokemon: data
    }
  }
}

export default Pokemon