import { PageHeader, Input, Avatar, Image } from 'antd';
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
            className="site-page-header"
            backIcon={false}
            extra={[<Input style={{ borderRadius: '20px', width: '225px', marginRight: '15px' }} prefix={<SearchOutlined style={{ marginRight: '10px', }} />} placeholder='Tìm kiếm' />,
            <MessageTwoTone style={{ fontSize: '22px', marginRight: '15px' }} />,
            <BellTwoTone style={{ fontSize: '22px', marginRight: '15px' }} />,
            <Avatar size={22} style={{ marginBottom: '10px' }} src={<Image src="/avatar.jpg" />} />]}
        />
    )
}

export default CustomHeader;