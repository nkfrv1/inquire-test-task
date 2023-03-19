import FloatButton from 'antd/es/float-button';
import PostsList from '../components/PostsList';
import PostsHeader from '../components/PostsHeader';

function PostsPage() {
  return (
    <>
      <PostsHeader />
      <PostsList />
      <FloatButton.BackTop visibilityHeight={700} />
    </>
  );
}

export default PostsPage;
