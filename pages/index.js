import { Button } from '@mui/material';
import { postPost, API_ENDPOINT } from './api/auth';
import Layout from '../components/Layout';
import PostsList from '../components/PostsList';

export default function Home({ posts }) {
  const onClick = () => {
    postPost({
      title: 'test title 2',
      body: 'another bs post from the client',
      published: true,
    });
  };

  return (
    <Layout title="Home">
      <h1>My Blog</h1>
      <Button onClick={onClick}>Add Post</Button>
      <PostsList posts={posts} />
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_ENDPOINT}/posts`);
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}
