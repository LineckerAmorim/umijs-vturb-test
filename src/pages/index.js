import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import ChatBox from '../components/ChatBox';
import styles from './index.less';

export default function IndexPage() {
  return (
    <Row justify="center" align="middle" className={styles.main}>
      <Col>
        <ChatBox></ChatBox>
      </Col>
    </Row>
  );
}
