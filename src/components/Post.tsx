import { Divider } from 'antd';
import { useQuery } from 'react-query';
import PostService from '../api/PostService';
import IPost from '../models/IPost';
import CommentList from './CommentList';

function Post({ post }: { post?: IPost }) {
  if (post && Object.keys(post).length !== 0) {
    return (
      <div className="Post">
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    );
  }

  const postId = window.location.pathname.split('/')[2];
  const query = useQuery(['post', postId], () => PostService.getOne(+postId));

  if (query.isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="PostWrapper">
      <div className="Post">
        <h3>{query.data?.title}</h3>
        <p>{query.data?.body}</p>
      </div>
      <Divider style={{ borderColor: '#b1b1b2', margin: '0' }} />
      {query.data?.comments && Object.keys(query.data?.comments).length !== 0 && (
        <CommentList comments={query.data?.comments} />
      )}
    </div>
  );
}

export default Post;
