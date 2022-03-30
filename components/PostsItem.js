import moment from 'moment';
import { useRouter } from 'next/router';
import styles from '../styles/PostsItem.module.css';

const PostItem = ({ post }) => {
  const router = useRouter();
  const date = moment(post.createdAt).format('dddd, MMMM Do YYYY');

  const onClick = () => {
    router.push(`/posts/${post.id}`);
  };

  return (
    <li className={styles.post} onClick={onClick}>
      <h6>{post.title}</h6>
      <p>{date}</p>
      <p>{post.body}</p>
    </li>
  );
};

export default PostItem;
