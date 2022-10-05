import Head from "next/head";
import { NavBar } from '../ui';

interface PropsLayout {
    children: JSX.Element
    title?: string,
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin

export const Layout = ({ children, title }: PropsLayout) => {



    return (
        <>
            <Head>
                <title>{title || "Pokemon App"}</title>
                <meta name="author" content="Jean Zapata" />
                <meta name="description" content={`informacion sobre el pokemon ${title}`} />
                <meta name="keywords" content={`${title}, pokemon, pokedex`} />
                <meta property="og:title" content={`Información sobre el ${title}`} />
                <meta property="og:description" content={`Esta es la pagina sobre ${title}`} />
                <meta property="og:image" content={`${origin}/img/banner.png`} />
            </Head>

            <NavBar />

            <main style={{
                padding: '0 20px'
            }}>
                {children}
            </main>
        </>
    )
}
