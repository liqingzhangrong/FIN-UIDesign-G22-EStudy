import { PageHeader, Input, Avatar, Image, Row, Col } from 'antd';
import
{
    SearchOutlined,
    MessageTwoTone,
    BellTwoTone,
    UserOutlined
} from '@ant-design/icons';
import './index.css';

const CustomHeader = () =>
{
    return (
        <PageHeader
            className=""
            backIcon={false}
            style={{ marginTop: '30px', float: 'right', width: '100%', padding: '0 50px' }}
            extra={[
                <Row align="middle" justify="center" style={{ margin: '0', width: '25vw', }} gutter={25}>
                    <Col span={12} style={{ padding: 0 }}>
                        <Input style={{ borderRadius: '20px', height: '42px' }} prefix={<SearchOutlined style={{ marginRight: '10px', }} />} placeholder='Tìm kiếm' />,
                    </Col>
                    <Col span={12}>
                        <Row justify="center" align="middle" gutter={25}>
                            <Col>
                                <MessageTwoTone style={{ fontSize: '24px', }} />
                            </Col>
                            <Col>
                                <BellTwoTone style={{ fontSize: '24px', }} />
                            </Col>
                            <Col>
                                <Avatar size={24} src={<Image src="/avatar.jpg" />} />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            ]}
        />
    )
}

export default CustomHeader;