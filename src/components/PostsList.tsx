import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import PostService from '../api/PostService';
import IPost from '../models/IPost';
import Post from './Post';

function PostsList() {
  const query = useQuery('posts', PostService.getAll);

  return (
    <div className="PostsList">
      {query.data?.map((post: IPost) => (
        <Link key={post.id} to={`/posts/${post.id}`}>
          <Post key={post.id} post={post} />
        </Link>
      ))}
    </div>
  );
}

export default PostsList;
