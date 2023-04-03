import Head from 'next/head'
import List from '../components/list'

import PageHeader from '@/components/pageHeader'

export default function Home() {
  return (
    <>
      <Head>
        <title>Annulus Tracker V-0.01</title>
        <meta name="description" content="Track your growth and hardships" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div className='container'>
        <PageHeader />
        <div className='row'>
          <div className="listContainer">
            <List />
          </div>
        </div>
      </div>
    </>
  )
}
