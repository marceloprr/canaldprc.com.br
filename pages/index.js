import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Image from 'next/image'
import { getChannelStatistics, getLastestVideos } from '../lib/youtubeChannel'
import Link from 'next/link'
import Date from '../components/date'

export async function getStaticProps(){
  const channelStatistics = await getChannelStatistics()
  const lastestVideos = await getLastestVideos()
  return{
    props : {
      channelStatistics,
      lastestVideos
    },
    revalidate : 10
  }
}

export default function Home({ channelStatistics, lastestVideos }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMdCenter}>
        <p>Esse é o site sobre o Christian e o MarceloP, protagonistas do Canal DPRC no{' '}
        <a href="/redir/mainchannel" target="_blank">Youtube{' '}
        <Image
          src="/images/yt_icon_rgb.png"
          height={20}
          width={26}/>
        </a>
        </p>
        <p>
        Atualmente nosso canal está com {channelStatistics.subscriberCount} inscritos, se você não é inscrito ainda, clique aqui e se inscreva agora!!!
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Veja nossas últimas publicações:</h2>
        {lastestVideos.titles.map(({id, title, description, pubDate, thumbnail}) => (
          <>
            <div id="boxes">
              <div style={{float: 'left', width: '120px'}}>
                <Image src={thumbnail} width='120px' height="90px"/>
              </div>
              <div style={{float: 'right', width: '100%'}}>
                <p className={utilStyles.listItem} key={id}>
                  <a href={`redir/${id}`} target="_blank">{title}</a>
                  <br />
                  <strong>Descrição:</strong> {description}
                  <br />
                  <Date dateString={pubDate}/>
                </p>
                </div>
              </div>
            </>
          ))}
      </section>
        
    </Layout>
  )
}
