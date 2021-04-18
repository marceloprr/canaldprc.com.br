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
                    <div style={{
                        width: '100%',
                        height: '144px',
                        backgroundImage: `url("https://yt3.ggpht.com/QYQgAP0x1i0VeNyHmxRjkuOdXy0nhiPmiIWvd71nhZcAaLc6dbr2rp1Nn4OPd7ZAQRPSkMi40A=w2120-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj")`,
                        backgroundSize: 'auto 250px',
                        backgroundRepeat: 'no-repeat',
                        // backgroundPositionY: 'calc(100% + 55px)',

                        backgroundPositionY: '-20px',
                        backgroundPositionX: 'calc(100% + 640px)',
                        backgroundPosition: 'center'
                        }}>
                        <div style={{
                            width:'144px',
                            height: '144px',
                            backgroundImage: 'url("/images/profile.jpg")',
                            backgroundSize: 'cover',
                            position: 'left',
                            padding: '0px',
                            margin: '0px'
                        }} className={utilStyles.logoBorderCircle}>
                        {/* <Image
                            position = "left"
                            padding = "0px"
                            src="/images/profile.jpg"
                            className={utilStyles.logoBorderCircle}
                            height='144px'
                            width='144px'
                            alt={name}
                        /> */}
                        </div>
                    </div>
                    <h1 className={utilStyles.heading2X1}>{name}</h1>

                    </>
                ) : (
                    <>
                        <Link href="/">
                            <a>
                                <Image
                                    priority
                                    src="/images/profile.jpg"
                                    className={utilStyles.borderCircle}
                                    height={108}
                                    width={108}
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