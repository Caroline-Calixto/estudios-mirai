import { useEffect, useState } from "react";
import { Paragraph, Subtitle2, Title } from "../../styles/components/Text";
import './style.css'
import { Button } from "../../styles/components/Button";
import Input from "antd/es/input/Input";
import { Checkbox, Form } from 'antd';
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";
import { firebaseConfig } from "../../firebase";
import { FieldType } from "../../interfaces/contact";
import { CheckboxValueType } from "antd/es/checkbox/Group";

// TODO: Criar componente para diminur este arquivo
// TODO: fazer versão mobile
export default function ContactPage() {
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [phone, setPhone] = useState('');
    const [service, setService] = useState<CheckboxValueType[]>([]);
    const [form] = Form.useForm();

    function handleServiceChange(checkedValues: CheckboxValueType[]) {
        setService(checkedValues);
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const db = getFirestore(firebaseConfig);
    const userColletionRef = collection(db, 'contact'); // conexão com a tabela no firebase

    useEffect(() => {
        const getUsers = async () => {
            await getDocs(userColletionRef);
        };
        getUsers();
    }, []);

    async function onFinish() {
        await addDoc(userColletionRef, { name, mail, phone, service });
        console.log('Dados enviados com sucesso para o Firebase');

        // Limpe os campos do formulário atualizando o estado
        form.resetFields();
        setService([]);
    }

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
                            {/* TODO: Adicionar icones */}
                        </ul>
                    </div>
                </div>

                <div className="contact-form">
                    <Form
                        form={form}
                        name="contact"
                        initialValues={{ remember: true }}
                        autoComplete="off"
                        onFinishFailed={onFinishFailed}
                        onFinish={onFinish}
                    >
                        <Form.Item<FieldType>
                            label="Name"
                            name="name"
                            rules={[{ required: true, message: 'Please input your name!' }]}
                        >
                            <Input onChange={e => setName(e.target.value)} />
                        </Form.Item>

                        <Form.Item<FieldType>
                            label="Mail"
                            name="mail"
                            rules={[{ required: true, message: 'Please input your e-mail!' }]}
                        >
                            <Input onChange={e => setMail(e.target.value)} />
                        </Form.Item>

                        <Form.Item<FieldType>
                            label="Phone"
                            name="phone"
                            rules={[{ required: true, message: 'Please input your phone!' }]}
                        >
                            <Input onChange={e => setPhone(e.target.value)} />
                        </Form.Item>

                        <span>What service do you need?</span>
                        <div></div>

                        <Form.Item<FieldType>
                            name="service"
                            valuePropName="checked"
                        >
                            <Checkbox.Group
                                options={['Design', 'Ilustração', 'Landing Page', 'Social Media', 'Google ADS']}
                                value={service}
                                onChange={handleServiceChange} />

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