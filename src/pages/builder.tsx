import type { NextPage } from 'next';
import Head from 'next/head';
import BuilderLayout from 'src/modules/builder/BuilderLayout';

const BuilderPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>构建你的简历吧</title>
        <meta name="description" content="Single Page Resume Builder" />
        <link rel="icon" type="image/png" href="/icons/resume-icon.png" />
        <script async src="https://con.loser.dev/script.js" data-website-id="97e402d3-f1e6-4f62-a196-47b90e2b0de6"></script>
      </Head>

      <BuilderLayout />
    </div>
  );
};

export default BuilderPage;
