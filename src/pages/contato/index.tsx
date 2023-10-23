import Input from "antd/es/input/Input";
import { Paragraph, Subtitle2, Title } from "../../styles/components/Text";
import './style.css'
import { Form } from "antd";
import Checkbox from "antd/es/checkbox/Checkbox";
import { Button } from "../../styles/components/Button";


export default function ContactPage() {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    type FieldType = {
        username?: string;
        mail?: string;
        phone?: string;
        service?: string[];
    };

    return (
        <section className="form-page">
            <Title>Contact us</Title>
            <Paragraph >Felis nunc, aliquet quam dictum senectus nunc. </Paragraph>

            <div className="form-container">
                <div className="contact-board">
                    <Subtitle2 color="#fff">Contact Information</Subtitle2>
                    <Paragraph color="#fff">Fill up the form and our Team will get back to you within 24 hours.</Paragraph>
                    <div className="list-contact">
                        <ul>
                            <li>+91 98765 43210</li>
                            <li>domain@paypal.com</li>
                            <li>https://paypal.com</li>
                            <li>Location</li>
                        </ul>
                    </div>
                </div>

                <div className="contact-form">
                    <Form
                        name="contact"
                        initialValues={{ remember: true }}
                        autoComplete="off"
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <Form.Item<FieldType>
                            label="Name"
                            name="username"
                            rules={[{ required: true, message: 'Please input your name!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item<FieldType>
                            label="Mail"
                            name="mail"
                            rules={[{ required: true, message: 'Please input your e-mail!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item<FieldType>
                            label="Phone"
                            name="phone"
                            rules={[{ required: true, message: 'Please input your phone!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <span>What service do you need?</span>
                        <div></div>

                        <Form.Item<FieldType>
                            name="service"
                            valuePropName="checked"
                        >
                            <Checkbox>Web Design</Checkbox>
                            <Checkbox>App Design</Checkbox>
                            <Checkbox>Landing Page</Checkbox>
                            <Checkbox>Graphic Design</Checkbox>
                            <Checkbox>Digital Marketing</Checkbox>
                            <Checkbox>Other</Checkbox>
                        </Form.Item>

                        <Form.Item>
                        <Button backgroundColor="#756BEE">Submit</Button>
                        </Form.Item>
                    </Form>
                </div>

            </div>
        </section>
    )
}