import React,{useState,useRef} from 'react';
import { Row, Col, Typography, Input, Form, Modal, Button, Image, Tag, Card } from "antd";
import { useDropzone } from "react-dropzone"
import './index.css';
import { history } from '../../history'
const { Link } = Typography;


const TurnInRightSideBar = () => {
    const [isSubmitted,setIsSubmitted] = useState(false);
    const [isHandleFile,setIsHandleFile] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModal2Visible, setIsModal2Visible] = useState(false);
    const inputFile = useRef(null);
    const { getRootProps, getInputProps } = useDropzone({
        onDrop: () => {
          setIsHandleFile(true);
        },
      })
    const showModal = () => {
        setIsModalVisible(true);
      };
    
      const showModal2 = () => {
        setIsModal2Visible(true);
      };

      const handleOk = () => {
        setIsModalVisible(false);
        setIsModal2Visible(true);
      };
    
      const handleCancel = () => {
        setIsModalVisible(false);
      };

      const handleOk2 = () => {
        setIsModal2Visible(false);
        setIsSubmitted(true);
      };
    
      const handleCancel2 = () => {
        setIsModal2Visible(false);
      };

      const onUploadFileClick = () => {
        inputFile.current.click();
      };

      const handleFileUpload = e => {
        setIsHandleFile(true);
      };

    return (
        <div>
        <Col style={{padding: '40px'}}>
            <Row >
                <Col span={8}>
                    <Typography className="side-title" style={{marginTop: '30px', marginBottom: '30px'}}>Nộp bài</Typography>
                </Col>
                <Col span={8} offset={8}>
                    <Typography className="side-title"  style={{marginTop: '30px', marginBottom: '30px',float:"right"}}>3 điểm</Typography>
                </Col>
            </Row>
            <Card onClick={() => { history.push('/classname/classwork') }} className="side-card-1" bodyStyle={{padding: "0"}}>
                <Row style={{height: '100%'}}>
                    <Image className="img" src="/course_img_4.svg"/>
                    <Col style={{marginTop: '40px', marginLeft: '35px'}}>
                        <Typography className="text-1">Đồ án giữa kỳ</Typography>
                        <Typography className="text-2">7 giờ 43 phút</Typography>
                    </Col>
                </Row>
            </Card>
            {isSubmitted === false ?
            <div>
                {isHandleFile === false ? 
            <Card className="card-InputWork" {...getRootProps()}>
                <Image src="/add-file.svg"/>
                <Typography className="text-3"  >Kéo thả tập tin vào đây</Typography>
                <Image src="/line-horizontal.svg"/>
                <Typography className="text-3">hoặc</Typography>
                <Link className="text-3" onClick={onUploadFileClick}>Tải file lên</Link>
                <input {...getInputProps()}
                    style={{ display: "none"}} ref={inputFile}  onChange={handleFileUpload} type="file"
                />
            </Card> : 
            <Card className="card-InputWork">
                <Image src="/file.svg"/>
                <Typography className="text-3">1712908.zip</Typography>
            </Card>
            }
            <Card className="card-note">
                <Input className="text-4" style={{border:"none"}} placeholder="Ghi chú cho giáo viên"></Input>
            </Card>
            <Card className="card-button">
                <Button type="primary" className="submit-classwork-button" onClick={showModal}>
                    <Image style={{paddingRight:"10px"}} src="/submit-classwork.svg"/>
                    Nộp bài
                </Button>
            </Card>
            </div> : 
            <div>
            <Card className="card-InputWork">
                <Image src="/file.svg"/>
                <Typography className="text-3">1712908.zip</Typography>
            </Card>
            <Card className="card-note">
                <Typography className="text-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
            </Card>
            <Card className="card-button" >
                <Button type="primary" className="submit-classwork-button" onClick={showModal}>
                    <Image style={{paddingRight:"10px"}} src="/submit-classwork.svg"/>
                    Sửa bài
                </Button>
                <Typography className="text-4" style={{marginTop:'20px'}}>Chỉnh sửa lần cuối vào 06:11, 23 tháng 08, 2020.</Typography>
            </Card>
            </div>
            }
            
        </Col>
        <Modal  visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}  closable={false}
        footer={false}>
            <Col className="confirm-Modal" >
                <Card className="card-InputWork">
                    <Image  src="/wow.svg"/>
                    <Typography style={{marginTop:"20px"}} className="text-4">Bạn có chắc rằng bạn muốn nộp bài?</Typography>
                    <Button type="primary" className="submit-classwork-button" onClick={handleOk} style={{marginRight:"30px",marginTop:"20px"}}>
                        <Image style={{paddingRight:"10px"}} src="/submit-classwork.svg"/>
                        Nộp bài
                    </Button>
                    <Link style={{color:'red'}} onClick={handleCancel}>Hủy</Link>
                </Card>
            </Col>
        </Modal>
        <Modal  visible={isModal2Visible} onOk={handleOk2} onCancel={handleCancel2}  closable={false}
        footer={false}>
            <Col className="confirm-Modal" >
                <Card className="card-InputWork">
                    <Image  src="/love.svg"/>
                    <Typography style={{marginTop:"20px"}} className="text-4">Bạn đã nộp bài thành công!</Typography>
                    <Button type="primary" className="submit-classwork-button" onClick={handleOk2} style={{marginTop:"20px"}}>
                        <Image style={{paddingRight:"10px"}} src="/submit-classwork.svg"/>
                        Đóng
                    </Button>
                </Card>
            </Col>
        </Modal>
    </div>

    )
}

export default TurnInRightSideBar;
