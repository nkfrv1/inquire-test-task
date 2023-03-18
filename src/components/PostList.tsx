import { useQuery } from 'react-query';
import PostService from '../api/PostService';
import IPost from '../models/IPost';
import Post from './Post';

function PostList() {
  const query = useQuery('posts', PostService.getAll);

  return (
    <div className="PostList">
      {query.data?.map((post: IPost) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;
