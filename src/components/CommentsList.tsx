import { List } from 'antd';
import IComment from '../models/IComment';
import Comment from './Comment';

function CommentsList({ comments }: { comments: IComment[] }) {
  return (
    <div className="CommentsList">
      <List
        itemLayout="horizontal"
        dataSource={comments}
        renderItem={(comment) => <Comment key={comment.id} comment={comment} />}
      />
    </div>
  );
}

export default CommentsList;
