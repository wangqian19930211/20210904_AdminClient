import React, { Component } from 'react'
import { Form, Input, Button } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

import './login.less'
import logo from './img/logo192.png'

const Item = Form.Item

class Login extends Component {
     
    onFinish = (values) => {
        
        // this.props.form.validateFields((err, values) => {
        //     if(!err) {
        //         console.log("username: " + values["username"] + "password: " + values["password"]);
                
        //     } else {
        //         alert("验证失败！");
        //     }
        // });

        //const username = values['username'];
        //const password = values['password'];
        //console.log('username: ' + username + ' password: ' + password);
        console.log(values);
    };

    validateFwd = (rule, value, callback) => {
        value = value.trim();
        if(!value) {
            callback('密码必须输入!');
        } else if(value.length < 4) {
            callback('密码不能小于4位!');
        } else if(value.length > 12) {
            callback('密码不能大于12位!');
        } else if(!/^[a-zA-Z0-9_]+$/.test(value)) {
            callback('密码必须是英文，数字或下划线组成!');
        } else {
            callback(); // 验证通过
        }
    }

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
                      <Form initialValues={{ remember: true }} 
                            onFinish={this.onFinish} 
                            className="login-form">
                        <Item name="username" initialValue=""
                              rules={[
                                       { required: true, whitespace: true, message: '用户名必须输入!' },
                                       { min: 4, message: '用户名不能小于4位!' },
                                       { max: 12, message: '用户名不能大于12位!' },
                                       { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是英文，数字或下划线组成!' }
                                     ]}>
                            <Input 
                                prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)'}} />} 
                                placeholder="用户名" />
                        </Item>
                        <Item name="password" initialValue=""
                              rules={[
                                       { validator: this.validateFwd}
                                     ]}>
                            <Input
                                prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)'}} />}
                                type="password"
                                placeholder="密码" />
                        </Item>
                        <Item>
                            <Button type="primary" 
                                    htmlType="submit" 
                                    className="login-form-button">
                                登录
                            </Button>
                        </Item>
                    </Form>
                  </div>
              </div>
          </div>
      )
    }
}
export default Login;