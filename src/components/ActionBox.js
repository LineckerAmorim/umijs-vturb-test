import React from 'react';
import { Row, Col, Card, Typography, Avatar } from 'antd';

import styles from './ActionBox.less';
import Button from './Button.js';

const { Title } = Typography;

const ActionBox = ({
  title,
  subtitle,
  description,
  buttonText,
  buttonType,
}) => {
  return (
    <Card className={styles.actionBox}>
      <Title level={3} className={styles.title}>
        {title}
      </Title>

      <p className={styles.subtitle}>{subtitle}</p>

      <p>{description}</p>

      <Row justify="space-between" align="bottom">
        <Col xs={24} md={18}>
          <div>Chat with:</div>
          <Avatar.Group size="large">
            <Avatar src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixqx=ITpzis0SHv&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" />
            <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=ITpzis0SHv&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" />
            <Avatar src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixqx=ITpzis0SHv&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
            <Avatar src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixqx=ITpzis0SHv&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
          </Avatar.Group>
        </Col>

        <Col xs={24} md={6} style={{ marginTop: '1rem' }}>
          <Button text={buttonText} size="large" type={buttonType}></Button>
        </Col>
      </Row>
    </Card>
  );
};

export default ActionBox;
