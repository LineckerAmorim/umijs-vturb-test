import React from 'react';
import 'antd/dist/antd.css';
import ActionBox from './ActionBox';

const ChatBox = () => {
  return (
    <ActionBox
      title="Lorem Ipsum is simply dummy text"
      subtitle="with Test"
      description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      buttonText="Chat Now"
      buttonType="primary"
    ></ActionBox>
  );
};

export default ChatBox;
