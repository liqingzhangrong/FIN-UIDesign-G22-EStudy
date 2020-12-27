import { Button, Card, Col, Image, Input, Modal, Row, Steps, Typography } from "antd";
import React, { useRef, useState } from 'react';
import { useDropzone } from "react-dropzone";
import './index.css';
const { Link } = Typography;

const { Step } = Steps;

const TurnInRightSideBar = () =>
{
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isHandleFile, setIsHandleFile] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModal2Visible, setIsModal2Visible] = useState(false);
    const [current, setCurrent] = useState(0);
    const inputFile = useRef(null);
    const { getRootProps, getInputProps } = useDropzone({
        onDrop: () =>
        {
            setIsHandleFile(true);
        },
    })
    const showModal = () =>
    {
        setIsModalVisible(true);
    };

    const showModal2 = () =>
    {
        setIsModal2Visible(true);
    };

    const handleOk = () =>
    {
        setIsModalVisible(false);
        setIsModal2Visible(true);
        setCurrent(3);
    };

    const handleCancel = () =>
    {
        setIsModalVisible(false);
    };

    const handleOk2 = () =>
    {
        setIsModal2Visible(false);
        setIsSubmitted(true);
    };

    const handleCancel2 = () =>
    {
        setIsModal2Visible(false);
    };

    const onUploadFileClick = () =>
    {
        inputFile.current.click();
    };

    const handleFileUpload = e =>
    {
        setCurrent(current + 1);
        setIsHandleFile(true);
    };

    return (
        <Col style={{ padding: '30px 50px 90px 50px' }}>
            <Row style={{ marginBottom: '30px' }}>
                <Col span={8}>
                    <Typography className="side-title">Nộp bài</Typography>
                </Col>
                <Col span={8} offset={8}>
                    <Typography className="side-title" style={{ float: "right" }}>3 điểm</Typography>
                </Col>
            </Row>
            <Row justify="center" style={{ marginTop: '45px' }}>
                <Steps current={current} labelPlacement="vertical" >
                    <Step title="Chọn file" />
                    <Step title="Thêm ghi chú" subTitle="(Tuỳ chọn)" />
                    <Step title="Nộp bài" />
                </Steps>,
            </Row>
            {isSubmitted === false ?
                <div>
                    {isHandleFile === false ?
                        <Card className="card-InputWork" {...getRootProps()}>
                            <Image src="/add-file.svg" />
                            <Typography className="text-3"  >Kéo thả tập tin vào đây</Typography>
                            <Image src="/line-horizontal.svg" />
                            <Typography className="text-3">hoặc</Typography>
                            <Link className="text-3" onClick={onUploadFileClick}>Tải file lên</Link>
                            <input {...getInputProps()}
                                style={{ display: "none" }} ref={inputFile} onChange={handleFileUpload} type="file"
                            />
                        </Card> :
                        <Card className="card-InputWork">
                            <Image src="/file-2.svg" />
                            <Typography className="text-3">1712908.zip</Typography>
                        </Card>
                    }
                    <Row style={{ marginTop: '30px', borderRadius: '20px' }}>
                        <Input.TextArea onBlur={() => { if (current === 1) setCurrent(2) }} style={{ textAlign: 'center', borderRadius: '20px' }} autoSize={{ minRows: '3', maxRows: '3' }} className="text-4" placeholder="Ghi chú cho giáo viên"></Input.TextArea>
                    </Row>

                    <Card className="card-button">
                        <Button type="primary" className="submit-classwork-button" onClick={showModal}>
                            <Image style={{ paddingRight: "10px" }} src="/submit-classwork.svg" />
                    Nộp bài
                </Button>
                    </Card>
                </div> :
                <div>
                    <Card className="card-InputWork">
                        <Image src="/file-2.svg" />
                        <Typography className="text-3">1712908.zip</Typography>
                    </Card>
                    <Card className="card-note">
                        <Typography className="text-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
                    </Card>
                    <Card className="card-button" >
                        <Button type="primary" className="submit-classwork-button" onClick={showModal}>
                            <Image style={{ paddingRight: "10px" }} src="/submit-classwork.svg" />
                    Sửa bài
                </Button>
                        <Typography className="text-4" style={{ marginTop: '30px' }}>Chỉnh sửa lần cuối vào 06:11, 23 tháng 08, 2020.</Typography>
                    </Card>
                </div>
            }

            <Modal width={435} visible={isModalVisible} centered onOk={handleOk} onCancel={handleCancel} closable={false}
                footer={false}>
                <Row justify="center" style={{ marginTop: '5px' }}>
                    <Image src="/wow.svg" />
                </Row>
                <Row justify="center" style={{ marginTop: "20px" }}>
                    <Typography style={{ fontSize: '16px' }}>Bạn có chắc rằng bạn muốn nộp bài?</Typography>
                </Row>
                <Row justify="center" style={{ marginTop: "20px", marginBottom: '5px' }} gutter={30} align="middle">
                    <Col>
                        <Button type="primary" className="submit-classwork-button" onClick={handleOk}>
                            <Image style={{ paddingRight: "10px" }} src="/submit-classwork.svg" />
                        Nộp bài
                    </Button>
                    </Col>
                    <Col>
                        <Button type="text" style={{ borderRadius: '20px', height: '42px' }} onClick={handleCancel}>Hủy</Button>
                    </Col>
                </Row>
            </Modal>

            <Modal centered width={435} visible={isModal2Visible} onOk={handleOk2} onCancel={handleCancel2} closable={false}
                footer={false}>
                <Row justify="center" style={{ marginTop: '5px' }}>
                    <Image src="/love.svg" />
                </Row>
                <Row justify="center" style={{ marginTop: "20px" }}>
                    <Typography style={{ fontSize: '16px' }}>Nộp bài thành công!</Typography>
                </Row>
                <Row justify="center" style={{ marginTop: "20px", marginBottom: '5px' }} gutter={30} align="middle">
                    <Col>
                        <Button type="primary" className="submit-classwork-button" onClick={handleOk2}>
                            <Image style={{ paddingRight: "10px" }} src="/submit-classwork.svg" />
                        Xác nhận
                    </Button>
                    </Col>
                </Row>
            </Modal>
        </Col>


    )
}

export default TurnInRightSideBar;
