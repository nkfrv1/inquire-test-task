import { ConfigProvider, Form, Input, Modal, theme } from 'antd';
import IPost from '../models/IPost';

interface PostCreateFormProps {
  open: boolean;
  onCreate: (data: IPost) => void;
  onCancel: () => void;
}

function PostCreateForm({ open, onCreate, onCancel }: PostCreateFormProps) {
  const [form] = Form.useForm();

  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
      }}
    >
      <Modal
        open={open}
        title="Create a new post"
        okText="Create"
        cancelText="Cancel"
        onCancel={onCancel}
        onOk={() => {
          form
            .validateFields()
            .then((data) => {
              form.resetFields();
              onCreate(data);
            })
            .catch((info) => {
              console.log('Validation Failed:', info);
            });
        }}
      >
        <Form form={form} layout="vertical" name="creat_post_form">
          <Form.Item
            name="title"
            label="Title"
            rules={[{ required: true, message: 'Please enter the title of your new post' }]}
          >
            <Input allowClear={true} />
          </Form.Item>
          <Form.Item
            name="body"
            label="Body"
            rules={[
              {
                required: true,
                message: 'Please fill the field with the content of your new post',
              },
            ]}
          >
            <Input.TextArea maxLength={255} showCount={true} allowClear={true} />
          </Form.Item>
        </Form>
      </Modal>
    </ConfigProvider>
  );
}

export default PostCreateForm;
