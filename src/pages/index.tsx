import type { NextPage } from 'next';
import Head from 'next/head';
import HomeLayout from 'src/modules/home/HomeLayout';

const HomePage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Wikiq</title>
        <meta name="description" content="Single Page Resume Builder" />
        <link rel="icon" type="image/png" href="/icons/resume-icon.png" />
        <script async src="https://con.loser.dev/script.js" data-website-id="97e402d3-f1e6-4f62-a196-47b90e2b0de6"></script>
      </Head>

      <HomeLayout />
    </div>
  );
};

export default HomePage;
