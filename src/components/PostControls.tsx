import {
  DeleteOutlined,
  EditOutlined,
  LeftOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons';
import { Button, Popconfirm } from 'antd';
import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import PostService from '../api/PostService';
import IPost from '../models/IPost';
import PostUpdateForm from './PostUpdateForm';

function PostControls({ post }: { post: IPost }) {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const updatePost = useMutation({
    mutationFn: (newPost: IPost) => PostService.update(post.id, newPost),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['post'] }),
  });
  const deletePost = useMutation({
    mutationFn: () => PostService.delete(post.id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['posts'] }),
  });

  const onUpdate = (formData: IPost) => {
    updatePost.mutate(formData);
    setOpen(false);
  };

  const onDelete = () => {
    deletePost.mutate();
    navigate(-1);
  };

  return (
    <div className="PostControls">
      <div>
        <Button
          onClick={() => navigate(-1)}
          icon={<LeftOutlined />}
          type="link"
          size="large"
          style={{ fontSize: '17px' }}
        >
          Back
        </Button>
      </div>
      <div style={{ display: 'flex', columnGap: '.5rem' }}>
        <Button icon={<EditOutlined />} size="large" onClick={() => setOpen(true)} />
        <Popconfirm
          title="Deleting a post"
          description="Are you sure to delete this post?"
          icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
          okText="Confirm"
          onConfirm={onDelete}
        >
          <Button icon={<DeleteOutlined />} size="large" />
        </Popconfirm>
      </div>
      <PostUpdateForm post={post} open={open} onUpdate={onUpdate} onCancel={() => setOpen(false)} />
    </div>
  );
}

export default PostControls;
