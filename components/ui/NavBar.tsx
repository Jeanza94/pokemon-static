import NextLink from 'next/link'
import { Text, Spacer, useTheme, Link } from '@nextui-org/react'
import Image from 'next/image'

export const NavBar = () => {

    const { theme } = useTheme()

    return (
        <div style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'start',
            padding: '0 20px',
            backgroundColor: theme?.colors.gray200.value
        }}>

            <Image
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
                alt='icono de la aplicación'
                width={70}
                height={70}
            />

            <NextLink href="/" passHref>
                <Link>
                    <Text color='white' h2>P</Text>
                    <Text color='white' h3>okemón</Text>
                </Link>
            </NextLink>
            <Spacer css={{ flex: 1 }} />

            <NextLink href="/favorites" passHref>
                <Link>
                    <Text color='white'>Favoritos</Text>
                </Link>
            </NextLink>
        </div>
    )
}
