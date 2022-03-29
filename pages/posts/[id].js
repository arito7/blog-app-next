import { Typography } from '@mui/material';
import Layout from '../../components/Layout.js';

function Post({ post }) {
  return (
    <Layout>
      <Typography>{post.title}</Typography>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch('http://localhost:5000/posts');
  const data = await res.json();
  let paths = [];
  if (Array.isArray(data)) {
    paths = data.map((post) => ({
      params: {
        id: post._id,
      },
    }));
  }
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:5000/posts/${params.id}`);
  const post = await res.json();

  return { props: { post } };
}

export default Post;
