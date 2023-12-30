import { Badge, Col, Flex, Row } from 'antd';
import { status } from './setting';
import Image from 'next/image';

const HeaderBlock = () => {
  return (
    <Row>
      <Col span={18} push={6}>
        <Flex gap="small" vertical align="baseline">
          <h1
            style={{
              fontSize: '1.25rem',
              lineHeight: '1.75rem',
              margin: 0,
            }}
          >
            STUDILY (STY)
          </h1>
          <div className="status-contain">
            {status.map((item, index) => (
              <Badge
                key={index}
                className="text-uppercase font-weight"
                count={item.title}
                style={{ backgroundColor: item.background, color: item.color }}
              />
            ))}
          </div>
        </Flex>
      </Col>
      <Col span={6} pull={18}>
        <Image src="/logo.png" alt="me" width="64" height="64" />
      </Col>
    </Row>
  );
};

export default HeaderBlock;
