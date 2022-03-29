import Head from 'next/head';
import Appbar from './Appbar';
import styles from '../styles/Layout.module.css';

function Layout({ children, title }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>MiBlog | {title}</title>
      </Head>
      <Appbar />
      <main className={styles.main}>{children}</main>
    </div>
  );
}

export default Layout;
