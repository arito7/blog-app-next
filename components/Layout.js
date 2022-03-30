import Head from 'next/head';
import Appbar from './Appbar';
import styles from '../styles/Layout.module.css';
import { Box } from '@mui/material';

function Layout({ children, title }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>MiBlog | {title}</title>
      </Head>
      <Appbar />
      <main className={styles.main}>
        <Box>{children}</Box>
      </main>
    </div>
  );
}

export default Layout;
