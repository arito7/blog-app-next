import {
  Typography,
  ListItem,
  Card,
  CardContent,
  CardActionArea,
} from '@mui/material';
import moment from 'moment';
import { useRouter } from 'next/router';

const PostItem = ({ post }) => {
  const router = useRouter();
  const date = moment(post.createdAt).format('dddd, MMMM Do YYYY');

  return (
    <ListItem>
      <Card>
        <CardActionArea
          onClick={() => {
            router.push(`posts/${post.id}`);
          }}
        >
          <CardContent>
            <Typography variant="h6" align="center">
              {post.title}
            </Typography>
            <Typography variant="body2" align="center">
              {date}
            </Typography>
            <Typography variant="body1">{post.body}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </ListItem>
  );
};

export default PostItem;
