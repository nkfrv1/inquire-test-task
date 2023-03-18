import { Button } from 'antd';
import FloatButton from 'antd/es/float-button';
import PostList from '../components/PostList';

function PostsPage() {
  return (
    <>
      <div className="PostsHeader">
        <h2>All posts</h2>
        <Button size="large" ghost={true} style={{ fontSize: '17px', fontWeight: '600' }}>
          Create New
        </Button>
      </div>
      <PostList />
      <FloatButton.BackTop visibilityHeight={700} />
    </>
  );
}

export default PostsPage;
