import React from 'react';
import style from './AuthForm.module.scss';
import { Form, Input, Button, Radio } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';


const LoginForm = () => {
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = React.useState('optional');

  const onRequiredTypeChange = ({ requiredMark }) => {
    setRequiredMarkType(requiredMark);
  };

  return (
    <div className={style.inputWrap}>
      <Form
        form={form}
        layout="vertical"
        initialValues={{ requiredMark }}
        onValuesChange={onRequiredTypeChange}
      >
        <Form.Item label="아이디" className={style.inputForm}>
          <Input placeholder="이메일"/>
        </Form.Item>
        <Form.Item label="비밀번호" className={style.inputForm}>
          <Input placeholder="비밀번호" />
        </Form.Item>
        <Form.Item className={style.inputForm}>
          <Button type="primary" disabled>로그인</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
