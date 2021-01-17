import React, { createElement, useState } from 'react';
import { Comment, Tooltip, Avatar, Rate } from 'antd';
import moment from 'moment';
import { UserOutlined } from '@ant-design/icons';

const Review = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [action, setAction] = useState(null);

  const like = () => {
    setLikes(1);
    setDislikes(0);
    setAction('liked');
  };

  const dislike = () => {
    setLikes(0);
    setDislikes(1);
    setAction('disliked');
  };

  const actions = [
    // <Tooltip key="comment-basic-like" title="Like">
    //   <span onClick={like}>
    //     {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
    //     <span className="comment-action">{likes}</span>
    //   </span>
    // </Tooltip>,
    // <Tooltip key="comment-basic-dislike" title="Dislike">
    //   <span onClick={dislike}>
    //     {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
    //     <span className="comment-action">{dislikes}</span>
    //   </span>
    // </Tooltip>,
    <Rate disabled defaultValue={4} />,
    // <span key="comment-basic-reply-to">Reply to</span>,
  ];

  return (
    <Comment
      actions={actions}
      author={<a>Jacky</a>}
      avatar={(
        <Avatar
          style={{ backgroundColor: '#87d068' }}
          icon={<UserOutlined />}
        />
      )}
      content={(
        <p>
          We supply a series of design principles, practical patterns and high quality design
          resources (Sketch and Axure), to help people create their product prototypes beautifully
          and efficiently.
        </p>
      )}
      datetime={(
        <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
          <span>{moment().fromNow()}</span>
        </Tooltip>
      )}
    />
  );
};

export default Review;
