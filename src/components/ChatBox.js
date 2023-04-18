import { Row, Col } from 'antd';
import React from 'react';
import ActionBox from './ActionBox';
import styles from './ChatBox.less';

const ChatBox = () => {
  return (
    <Row justify="center" align="middle" className={styles.main}>
      <Col>
        <ActionBox
          title="Lorem Ipsum is simply dummy text"
          subtitle="with Test"
          description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          buttonText="Chat Now"
          buttonType="primary"
        ></ActionBox>
      </Col>
    </Row>
  );
};

export default ChatBox;
