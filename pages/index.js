import Layout from '../components/Layout';
import Link from 'next/link';
import PostsList from '../components/PostsList';
import { isAuth } from '../utils';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import { Menu } from '@mui/icons-material';

export default function Home({ posts }) {
  // const isAuthenticated = isAuth();
  console.log(posts);
  return (
    <Layout title="Home">
      <h1>My Blog</h1>
      <PostsList posts={posts} />
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:5000/posts');
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}
