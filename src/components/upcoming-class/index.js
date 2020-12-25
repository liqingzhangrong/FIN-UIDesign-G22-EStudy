
import { Col, Image, Row, Typography } from 'antd';
import './index.css';
const { Title, Paragraph, Text } = Typography;

const UpcomingClass = (props) =>
{
    return (
        <Row className="class-list-item" align="middle" justify="space-between">
            <Col>
                <Row>
                    <Image src={'/' + props.type + '-icon-small.svg'} />
                    <Col className="class-list-item-col" style={{ marginLeft: '45px' }}>
                        <Title style={{ fontSize: '18px', marginTop: '10px' }}>{props.title}</Title>
                        <Paragraph>{props.room}&#9;&#9;{props.time}</Paragraph>
                    </Col>
                </Row>
            </Col>
            <Col>
                <Image src='/right-arrow.svg' />
            </Col>
        </Row>
    )
}

export default UpcomingClass;