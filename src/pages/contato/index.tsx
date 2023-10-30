import { useEffect, useState } from "react";
import { Paragraph, Subtitle2, Title } from "../../styles/components/Text";
import './style.css'
import { Button } from "../../styles/components/Button";
import Input from "antd/es/input/Input";
import { Checkbox, Form } from 'antd';
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";
import { FieldType } from "../../interfaces/contact";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import { firestore } from "../../config/firebaseConfig";

// TODO: Criar componente para diminur este arquivo
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

    const db = getFirestore(firestore);
    const userColletionRef = collection(db, 'contact'); // conexão com a tabela no firebase

    useEffect(() => {
        const getUsers = async () => {
            await getDocs(userColletionRef);
        };
        getUsers();
    }, []);

    async function onFinish() {
        await addDoc(userColletionRef, { name, mail, phone, service });
        alert('Mensagem enviada!');

        // Limpe os campos do formulário atualizando o estado
        form.resetFields();
        setService([]);
    }

    return (
        <section className="form-page">
            <div className="page-description">
            <Title>Entre em contato</Title>
            <Paragraph>Estamos ansiosos para ouvir de você e discutir como podemos ajudar a atender às suas necessidades de design, desenvolvimento web e marketing digital.</Paragraph>

            </div>

            <div className="form-container">
                <div className="contact-board">
                    <Subtitle2 color="#fff">Entre em Contato Conosco</Subtitle2>
                    <Subtitle2 color="#fff">Entre em contato conosco hoje para iniciar uma conversa.</Subtitle2>

                    <div className="list-contact">
                        <ul>
                            <li>+91 98765 43210</li>
                            <li>emailn@dominio.com</li>
                            <li>https://seusite.com</li>
                            <li>Endereço: São Paulo, Brasil</li>

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
                            label="Seu nome:"
                            name="name"
                            rules={[{ required: true, message: 'Please input your name!' }]}
                        >
                            <Input onChange={e => setName(e.target.value)} />
                        </Form.Item>

                        <Form.Item<FieldType>
                            label="Seu e-mail:"
                            name="mail"
                            rules={[{ required: true, message: 'Please input your e-mail!' }]}
                        >
                            <Input onChange={e => setMail(e.target.value)} />
                        </Form.Item>

                        <Form.Item<FieldType>
                            label="Seu telefone:"
                            name="phone"
                            rules={[{ required: true, message: 'Please input your phone!' }]}
                        >
                            <Input onChange={e => setPhone(e.target.value)} />
                        </Form.Item>

                        <span className="service-option">Como podemos te ajudar?</span>

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
                            <Button className="submit" backgroundColor="#756BEE">Enviar</Button>
                        </Form.Item>
                    </Form>
                </div>

            </div>
        </section>
    )
}