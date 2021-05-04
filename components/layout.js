import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name  = 'Canal DPRC'
export const siteTitle = 'Canal DPRC'

export default function Layout({children, home}){
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Caveat&family=Montserrat&display=swap" rel="stylesheet"/>
                <meta
                    name="description"
                    content="Página sobre o Canal DPRC no Youtube!"
                />
                <meta name="og:title" content={siteTitle}/>
                <meta name="og:description" content="Conheça nosso site sobre o canal DPRC no Youtube e veja nossos últimos vídeos!"/>
                <meta name="twitter:card" content="summary_large_image"/>
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                    <div className={styles.dprc_bg}/>
                    <div className={styles.dprc_avatar}/>
                    {/* <h1 className={utilStyles.heading2X1}>{name}</h1> */}

                    </>
                ) : (
                    <>
                        <Link href="/">
                            <a>
                                <Image
                                    priority
                                    src="/images/profile.jpg"
                                    className={utilStyles.borderCircle}
                                    height={144}
                                    width={144}
                                    alt={name}
                                />
                            </a>
                        </Link>
                        <h2 className={siteTitle.headingLg}>
                            <Link href="/">
                                <a className={utilStyles.colorInherit}>{name}</a>
                            </Link>
                        </h2>
                    </>
                )}
            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a>← Voltar</a>
                    </Link>
                </div>
            )}
        </div>
    )
}