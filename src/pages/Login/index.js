import React, { Component } from 'react'
import { Button, Checkbox, Form, Input,Card } from 'antd';

import './index.scss'
const onFinish = (values) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
export default class Login extends Component {
  render() {
    return (
      <div className='login'> 
       <Card className='login-container'>
       <h2><strong>速知网登录</strong></h2>
       <Form className='form'
    name="basic"
    labelCol={{ span: 6 }}
    wrapperCol={{ span: 20 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
  
    <Form.Item
      label="用户名"
      name="username"
      rules={[{ required: true, message: '请输入你的用户名' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="密码"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 4, span: 20 }}>
      <Checkbox>我已阅读并同意[用户协议]和[条款隐私]</Checkbox>
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 6  , span: 16 }}>
      <Button type="primary" htmlType="submit">
        登录
      </Button>
    </Form.Item>
  </Form>
    </Card></div>
    )
  }
}
