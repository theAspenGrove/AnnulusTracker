import Head from 'next/head'
import List from '../components/list'

export default function Home() {
  return (
    <>
      <Head>
        <title>Annulus Tracker V-0.01</title>
        <meta name="description" content="Track your growth and hardships" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div className='container'>
        <div className='row'>
          <div className='col CenterCol'>
            <h1>Annulus Tracker</h1>
            <p>Track your growth and hardships</p>
          </div>
        </div>
        <div className='row'>
          <div className='col CenterCol'>
            <List />
          </div>
        </div>
      </div>
    </>
  )
}
