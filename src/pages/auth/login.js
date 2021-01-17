import React from 'react';
import { Form, Input, Button, Checkbox, Row, Col, Tabs, Tooltip } from 'antd';
import { UserOutlined, LockOutlined, GoogleCircleFilled } from '@ant-design/icons';
import GoogleLogin from 'react-google-login';
import { Link, connect, history } from 'umi';
import styles from '../../Home/less/authForm.less';
import config from '../../config.json';
// import { refreshTokenSetup } from '../../utils/utils';

const { TabPane } = Tabs;
const NormalLoginForm = (props) => {
  const { dispatch } = props;
  // response from login API
  const onFinish = (values) => {
    dispatch({ type: 'account/login', payload: values });
    // console.log('Received values of form: ', values);
  };
  const socialLogin = (response, provider) => {
    const tokenBlob = new Blob([JSON.stringify({ idToken: provider === 'google' ? response.tokenId : response.accessToken, provider }, null, 2)], { type: 'application/json' });
    const options = {
      method: 'POST',
      body: tokenBlob,
      mode: 'cors',
      cache: 'default',
    };
    fetch(config.AUTH_CALLBACK_URL, options)
      .then((res) => {
        // console.log('Login Success: currentUser:', res.profileObj);
        res.json().then((user) => {
          localStorage.setItem('username', user.username);
          localStorage.setItem('isAuth', true);
          history.push('/');
        });
      });
  };
  // response from Google login API
  const responseGoogleLogin = (response) => {
    socialLogin(response, 'google');
  };

  return (
    <Row>
      <Col md={{ span: 8, offset: 8 }} xs={{ span: 24 }}>
        <Tabs defaultActiveKey="1" centered>
          <TabPane tab="Account" key="1">
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <Form.Item
                name="email"
                rules={[{ required: true, message: 'Please input your Email!' }]}
              >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <a className="login-form-forgot" style={{ float: 'right' }} href="">
                  Forgot password
                </a>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button" block>
                  Log in
                </Button>
              </Form.Item>
              <div className={styles.other}>
                <span>Other login methods </span>
                <GoogleLogin
                  clientId="58543814714-t6hi1146ecd3g275m1ftposg5qcs63tf.apps.googleusercontent.com"
                  render={(renderProps) => {
                    return (
                      <Tooltip title="login with Google" {...renderProps}>
                        <Button type="primary" danger shape="circle" icon={<GoogleCircleFilled />} />
                      </Tooltip>
                    );
                  }}
                  onSuccess={responseGoogleLogin}
                  onFailure={responseGoogleLogin}
                  cookiePolicy="single_host_origin"
                />
                <Link className={styles.register} to="/register">
                  Register here
                </Link>
              </div>
              <Form.Item />
            </Form>
          </TabPane>
        </Tabs>
      </Col>
    </Row>
  );
};

export default connect()(NormalLoginForm);
