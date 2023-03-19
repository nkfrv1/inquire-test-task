import { Form, Input, Button } from 'antd';
import IComment from '../models/IComment';

interface CommentCreateFormProps {
  onCreate: (data: IComment) => void;
}

function CommentCreateForm({ onCreate }: CommentCreateFormProps) {
  const [form] = Form.useForm();

  return (
    <Form
      form={form}
      onFinish={(data) => {
        onCreate(data);
        form.resetFields();
      }}
    >
      <Form.Item
        name="name"
        label="Name"
        rules={[{ required: true, message: 'Please enter your name' }]}
      >
        <Input allowClear={true} />
      </Form.Item>
      <Form.Item
        name="email"
        label="Email"
        rules={[{ required: true, message: 'Please enter your email' }]}
      >
        <Input type="email" allowClear={true} />
      </Form.Item>
      <Form.Item name="body" rules={[{ required: true, message: 'Please enter a comment' }]}>
        <Input.TextArea
          autoSize={true}
          showCount={true}
          allowClear={true}
          maxLength={250}
          placeholder="Leave a comment..."
        />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" style={{ margin: '0 auto' }}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default CommentCreateForm;
