import React, { Component } from 'react'
import { Form, Input, Button } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

import './login.less'
import logo from './img/logo192.png'

const Item = Form.Item

class Login extends Component {

     
    onFinish = (values) => {
        alert('Received values of form: ', values);
    };

    render() {
      return (
          <div id="root">
              <div className='login'>
                  <div className='login-header'>
                      <img src={logo} alt="logo" />
                      <h1>后台管理系统</h1>
                  </div>
                  <div className="login-content">
                      <h1>用户登录</h1>
                      <Form initialValues={{ remember: true }} onFinish={this.onFinish} className="login-form">
                        <Item name="username" rules={[{ required: true, min: 4, max: 12, message: '用户名必须输入!' }]}>
                            <Input prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)'}} />} 
                            placeholder="用户名" />
                        </Item>
                        <Item name="password" rules={[{ required: true, message: '密码必须输入!' }]}>
                            <Input
                            prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)'}} />}
                            type="password"
                            placeholder="密码"
                            />
                        </Item>
                        <Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
                        </Item>
                    </Form>
                  </div>
              </div>
          </div>
      )
    }
}
export default Login;