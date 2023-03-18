import FloatButton from 'antd/es/float-button';
import PostList from '../components/PostList';
import PostsHeader from '../components/PostsHeader';

function PostsPage() {
  return (
    <>
      <PostsHeader />
      <PostList />
      <FloatButton.BackTop visibilityHeight={700} />
    </>
  );
}

export default PostsPage;
