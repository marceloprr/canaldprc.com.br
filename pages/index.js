import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Image from 'next/image'
import { getChannelStatistics, getLastestVideos } from '../lib/youtubeChannel'
import Link from 'next/link'
import Date from '../components/date'

export async function getStaticProps() {
  const channelStatistics = await getChannelStatistics()
  const lastestVideos = await getLastestVideos()
  return {
    props: {
      channelStatistics,
      lastestVideos
    },
    revalidate: 10
  }
}

export default function Home({ channelStatistics, lastestVideos }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMdCenter}><br />
        <h1 className={utilStyles.heading2Xl}>E aí Galerinha, tudo beleza?!?!<br />Sejam todos bem vindos ao Canal DPRC!</h1><br />
        <p>Esse é o site sobre nosso canal no{' '}<a href="/redir/mainchannel" target="_blank">Youtube{' '}
          <Image
            src="/images/yt_icon_rgb.png"
            height={20}
            width={26} />
        </a> protagonizado por MarceloP e Christian!!
        </p>
        <p>
          Atualmente nosso canal está com {channelStatistics.subscriberCount} inscritos. E se você não é inscrito ainda, clique <a href="/redir/mainchannel?subscribe" target="_blank">aqui</a> e inscreva-se agora!!!
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingXl}>Veja nossas últimas publicações:</h2>
        {lastestVideos.titles.map(({ id, title, description, pubDate, thumbnail }) => (
          <>
            <div className={utilStyles.boxes}>
              <div className={utilStyles.thumb}>
                <Image src={thumbnail} width='120px' height="90px" />
              </div>
              <div className={utilStyles.link}>
                <a href={`redir/${id}`} target="_blank">{title}</a>
              </div>
              <div className={utilStyles.desc}>
                {description}
              </div>
              <div className={utilStyles.videoDate}>
                <Date dateString={pubDate} />
              </div>
            </div>
          </>
        ))}
      </section>
      <br />
      <footer>
        <img src="/images/DPRC_logo.png" className={utilStyles.footerLogo} />
        <br />
        Siga-nos nas redes sociais
        <div className={utilStyles.footerFlex}>
          <div>
            <a href="/redir/mainchannel?footer" target="_blank">
              <Image
                src="/images/yt_icon_rgb.png"
                height={20}
                width={26} />
              <br />
          DPRC
          </a>
          </div>
          <div>
            <a href="/redir/twitter?footer" target="_blank">
              <Image
                src="/images/twitter_icon_blue.png"
                height={20}
                width={20} />
              <br />
          @dprc_yt
          </a>
          </div>
          <div>
            <a href="/redir/insta?footer" target="_blank">
              <Image
                src="/images/instagram_icon_rgb.png"
                height={20}
                width={20} />
              <br />
          @dprc_yt
          </a>
          </div>
        </div>
        <br />
        Canal DPRC - Todos os Direitos Reservados - 2021
      </footer>
    </Layout>
  )
}
