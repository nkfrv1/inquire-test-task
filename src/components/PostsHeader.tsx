import { Button, ConfigProvider, message, theme } from 'antd';
import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import PostService from '../api/PostService';
import IPost from '../models/IPost';
import PostCreateForm from './PostCreateForm';

function PostsHeader() {
  const [open, setOpen] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (newPost: IPost) => PostService.create(newPost),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['posts'] }),
  });

  const onCreate = (formData: IPost) => {
    mutation.mutate(formData, { onSuccess: () => success(), onError: () => error() });
    setOpen(false);
  };

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'New post created',
    });
  };

  const error = () => {
    messageApi.open({
      type: 'error',
      content: 'Some error while creating post',
    });
  };

  return (
    <>
      <ConfigProvider
        theme={{
          algorithm: theme.darkAlgorithm,
        }}
      >
        {contextHolder}
      </ConfigProvider>
      <div className="PostsHeader">
        <h2>All posts</h2>
        <Button
          size="large"
          ghost={true}
          onClick={() => setOpen(true)}
          style={{ fontSize: '17px', fontWeight: '600' }}
        >
          Create New
        </Button>
        <PostCreateForm open={open} onCreate={onCreate} onCancel={() => setOpen(false)} />
      </div>
    </>
  );
}

export default PostsHeader;
