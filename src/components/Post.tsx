import { ConfigProvider, Divider, theme } from 'antd';
import { useQuery } from 'react-query';
import PostService from '../api/PostService';
import IPost from '../models/IPost';
import CommentsSection from './CommentsSection';
import PostControls from './PostControls';

function Post({ post }: { post: IPost }) {
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
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
      }}
    >
      <div className="PostWrapper">
        <PostControls post={query.data!} />
        <div className="Post">
          <h3>{query.data?.title}</h3>
          <p>{query.data?.body}</p>
        </div>
        <Divider style={{ margin: '0' }} />
        <CommentsSection comments={query.data?.comments} postId={query.data!.id} />
      </div>
    </ConfigProvider>
  );
}

export default Post;
