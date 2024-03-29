import React from 'react'
import { Button, Checkbox, Form, Input,Card,message} from 'antd';
import {login} from '../../api/index'
import {useNavigate} from 'react-router-dom';
import './index.scss'

export default function Login() {
 let state = {
    // 加载状态
    loading:false
  }
  let navigate = useNavigate()
  const onFinish =async({mobile,code})=>{
    const change =()=>{this.setState({
      loading:true
    })
  }
    try{
       const res = await login(mobile,code)
       
     
       message.success('登录成功',1,function(){
        const token = res.data.data.token
        localStorage.setItem("token",token)
        navigate('/layout')
       })
       
     
      }catch(error){
       message.warning(error.response.data.message,1,function(){
        const change =()=>{this.setState({
          loading:false
        })
        }
       })
      }
    }
  return (
    <div className='login'> 
       <Card className='login-container'>
       <h2><strong>速知网登录</strong></h2>
       <Form className='form'
    name="basic"
    labelCol={{ span: 4 }}
    wrapperCol={{ span: 18 }}
    style={{ maxWidth: 600 }}
    initialValues={{ mobile:'13811111111',code:'246810'}}
    onFinish={onFinish}
    autoComplete="off"
  >
  
    <Form.Item
      label="用户名"
      name="mobile"
      rules={[{ required: true, message: '用户名不为空' },{
        pattern:/^1[3-9]\d{9}$/,
        message:'用户名(手机号)格式错误',
        
      }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="密码"
      name="code"
      rules={[{ required: true, message: '请输入你的密码' },
    {
      max:10,
      min:4, 
      message:"密码应在4~10位"
    }]}
    >
      <Input/>
    </Form.Item>

    <Form.Item  name="agree"  valuePropName="checked" wrapperCol={{ offset: 4, span: 20 }} rules={[{
      validator(rule,value){
        if(value){
          return Promise.resolve()
        }else{
          return Promise.reject(new Error('请阅读并同意用户协议'))
        }
      } 
      
    }]}>
      <Checkbox>我已阅读并同意[用户协议]和[条款隐私]</Checkbox>
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 4  , span: 18 }}>
      <Button type="primary" htmlType="submit" block loading={state.loading}  >
        登录
      </Button>
    </Form.Item>
  </Form>
    </Card></div>
  )

}
