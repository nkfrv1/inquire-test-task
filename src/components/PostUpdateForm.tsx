import { Form, Input, Modal } from 'antd';
import IPost from '../models/IPost';

interface PostUpdateFormProps {
  post: IPost;
  open: boolean;
  onUpdate: (data: IPost) => void;
  onCancel: () => void;
}

function PostUpdateForm({ post, open, onUpdate, onCancel }: PostUpdateFormProps) {
  const [form] = Form.useForm();

  return (
    <Modal
      open={open}
      title="Update post"
      okText="Confirm"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((data) => {
            form.resetFields();
            onUpdate(data);
          })
          .catch((info) => {
            console.log('Validation Failed:', info);
          });
      }}
    >
      <Form form={form} layout="vertical" name="update_post_form">
        <Form.Item
          name="title"
          label="Title"
          initialValue={post.title}
          rules={[{ required: true, message: 'Please enter the title of your new post' }]}
        >
          <Input allowClear={true} />
        </Form.Item>
        <Form.Item
          name="body"
          label="Body"
          initialValue={post.body}
          rules={[
            {
              required: true,
              message: 'Please fill the field with the content of your new post',
            },
          ]}
        >
          <Input.TextArea
            size="large"
            autoSize={true}
            showCount={true}
            allowClear={true}
            maxLength={500}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default PostUpdateForm;
