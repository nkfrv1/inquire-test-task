import { message } from 'antd';
import { useMutation, useQueryClient } from 'react-query';
import CommentService from '../api/CommentService';
import IComment from '../models/IComment';
import CommentCreateForm from './CommentCreateForm';
import CommentsList from './CommentsList';

function CommentsSection({ comments, postId }: { comments?: IComment[]; postId: number }) {
  const [messageApi, contextHolder] = message.useMessage();

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (newComment: IComment) => CommentService.create({ ...newComment, postId: postId }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['post'] }),
  });

  const onCreate = (formData: IComment) => {
    mutation.mutate(formData, { onSuccess: () => success(), onError: () => error() });
  };

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'New comment added',
    });
  };

  const error = () => {
    messageApi.open({
      type: 'error',
      content: 'Some error while submitting a comment',
    });
  };

  return (
    <>
      {contextHolder}
      {comments && Object.keys(comments).length !== 0 && <CommentsList comments={comments} />}
      <CommentCreateForm onCreate={onCreate} />
    </>
  );
}

export default CommentsSection;
