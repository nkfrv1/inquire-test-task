import { UserOutlined } from '@ant-design/icons';
import { Avatar, List, Typography } from 'antd';
import { BaseSyntheticEvent } from 'react';
import IComment from '../models/IComment';

function Comment({ comment }: { comment: IComment }) {
  const onMouseOver = (e: BaseSyntheticEvent) => (e.target.style.color = '#4096ff');

  const onMouseLeave = (e: BaseSyntheticEvent) => (e.target.style.color = '#fff');

  const onMouseDown = (e: BaseSyntheticEvent) => (e.target.style.color = '#0958d9');

  const onMouseUp = (e: BaseSyntheticEvent) => (e.target.style.color = '#4096ff');

  return (
    <div className="Comment">
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar size="large" icon={<UserOutlined />} />}
          title={
            <span>
              <a
                href={undefined}
                style={{ color: '#fff' }}
                onMouseOver={onMouseOver}
                onMouseLeave={onMouseLeave}
                onMouseDown={onMouseDown}
                onMouseUp={onMouseUp}
              >
                {comment.name}
              </a>
              <Typography.Text type="secondary"> {`<${comment.email}>`}</Typography.Text>
            </span>
          }
          description={<p style={{ fontSize: '15px', color: '#b1b1b2' }}>{comment.body}</p>}
          style={{ alignItems: 'center' }}
        />
      </List.Item>
    </div>
  );
}

export default Comment;
