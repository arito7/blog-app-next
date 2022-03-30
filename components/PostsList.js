import { Typography, List } from '@mui/material';
import PostItem from './PostsItem.js';
import styles from '../styles/PostsList.module.css';

const PostsList = ({ posts }) => {
  let view = (
    <div>
      <Typography>There are no posts to show.</Typography>
    </div>
  );
  if (posts.length > 0) {
    view = (
      <div>
        <ul className={styles.list}>
          {posts.map((post) => {
            return <PostItem post={post} key={post.id} />;
          })}
        </ul>
      </div>
    );
  }
  return view;
};

export default PostsList;
