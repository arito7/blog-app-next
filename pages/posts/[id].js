import { Typography } from '@mui/material';
import Layout from '../../components/Layout.js';
import moment from 'moment';
import { API_ENDPOINT } from '../api/auth';

function Post({ post }) {
  return (
    <Layout>
      <Typography variant="h2">{post.title}</Typography>
      <Typography variant="subtitle2">
        {moment(post.createdAt).format('dddd, MMMM Do YYYY')}
      </Typography>
      <hr />
      <Typography>{post.body}</Typography>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`${API_ENDPOINT}/posts`);
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
  const res = await fetch(`${API_ENDPOINT}/posts/${params.id}`);
  const post = await res.json();

  return { props: { post } };
}

export default Post;
