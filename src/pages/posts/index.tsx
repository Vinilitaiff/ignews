import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts(){
  return(
    <>
      <Head>
        <title>Posts | Ignews</title>        
      </Head>
      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="">
            <time>12 de marco de 2021</time>
            <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
            <p>Suponha que seu projeto tenha uma base de código com 150 arquivos</p>
          </a>
          <a href="">
            <time>12 de marco de 2021</time>
            <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
            <p>Suponha que seu projeto tenha uma base de código com 150 arquivos</p>
          </a>
          <a href="">
            <time>12 de marco de 2021</time>
            <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
            <p>Suponha que seu projeto tenha uma base de código com 150 arquivos</p>
          </a>          
        </div>
      </main>
    </>
  );
}