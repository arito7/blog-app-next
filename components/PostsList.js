import { Typography, List } from '@mui/material';
import PostItem from './PostsItem.js';

const PostsList = ({ posts }) => {
  let view = (
    <div>
      <Typography>There are no posts to show.</Typography>
    </div>
  );
  if (posts.length > 0) {
    view = (
      <div>
        <List>
          {posts.map((post) => {
            return <PostItem post={post} key={post.id} />;
          })}
        </List>
      </div>
    );
  }
  return view;
};

export default PostsList;
