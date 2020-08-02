/** @format */

import React, {Component} from 'react';
import {Form, Input, Button, Row, Col} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
// import './index.scss';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <Form
        name='login'
        className='form-login'
        initialValues={{remember: true}}>
        <Form.Item
          name='username'
          rules={[{required: true, message: 'Please input your Username!'}]}>
          <Input
            prefix={<UserOutlined className='site-form-item-icon' />}
            placeholder='Username'
          />
        </Form.Item>

        <Form.Item
          name='password'
          rules={[{required: true, message: 'Please input your Password!'}]}>
          <Input
            prefix={<LockOutlined className='site-form-item-icon' />}
            type='password'
            placeholder='Password'
          />
        </Form.Item>

        <Form.Item
          name='Code'
          rules={[{required: true, message: 'Please input your Code!'}]}>
          <Row gutter={13} justify='space-between'>
            <Col span={15}>
              <Input
                prefix={<LockOutlined className='site-form-item-icon' />}
                placeholder='Code'
              />
            </Col>
            <Col span={9}>
              <Button type='danger' className='form-check-button'>
                获取验证码
              </Button>
            </Col>
          </Row>
        </Form.Item>

        <Form.Item>
          <Button type='primary' htmlType='submit' block>
            注册
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default LoginForm;
