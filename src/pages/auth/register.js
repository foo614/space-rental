import { Form, Button, Col, Input, Popover, Progress, Row, message, Tabs } from 'antd';
import React, { useState, useEffect } from 'react';
import { Link, connect, history } from 'umi';
import styles from '../../Home/less/authForm.less';

const FormItem = Form.Item;
const { TabPane } = Tabs;
const passwordStatusMap = {
  ok: (
    <div className={styles.success}>
      Strength: strong
    </div>
  ),
  pass: (
    <div className={styles.warning}>
      Strength: medium
    </div>
  ),
  poor: (
    <div className={styles.error}>
      Strength: too short
    </div>
  ),
};
const passwordProgressMap = {
  ok: 'success',
  pass: 'normal',
  poor: 'exception',
};

const Register = ({ submitting, dispatch, account }) => {
  const [visible, setvisible] = useState(false);
  const [popover, setpopover] = useState(false);
  const confirmDirty = false;
  let interval;
  const [form] = Form.useForm();
  useEffect(() => {
    if (!account) {
      return;
    }

    const getEmailValue = form.getFieldValue('Email');

    if (account.status === true) {
      message.success('Registration Success！');
      history.push({
        pathname: '/register-result',
        state: {
          getEmailValue,
        },
      });
    }
  }, [account]);
  useEffect(
    () => () => {
      clearInterval(interval);
    },
    [],
  );

  const getPasswordStatus = () => {
    const value = form.getFieldValue('Password');

    if (value && value.length > 9) {
      return 'ok';
    }

    if (value && value.length > 5) {
      return 'pass';
    }

    return 'poor';
  };

  const onFinish = (values) => {
    dispatch({
      type: 'account/register',
      payload: { ...values },
    });
  };

  const checkConfirm = (_, value) => {
    const promise = Promise;

    if (value && value !== form.getFieldValue('Password')) {
      return promise.reject(
        'The passwords entered twice do not match!'
      );
    }

    return promise.resolve();
  };

  const checkPassword = (_, value) => {
    const promise = Promise; // 没有值的情况

    if (!value) {
      setvisible(!!value);
      return promise.reject(
        'Please enter your password!'
      );
    } // 有值的情况

    if (!visible) {
      setvisible(!!value);
    }

    setpopover(!popover);

    if (value.length < 6) {
      return promise.reject('');
    }

    if (value && confirmDirty) {
      form.validateFields(['ConfirmPassword']);
    }

    return promise.resolve();
  };

  const renderPasswordProgress = () => {
    const value = form.getFieldValue('Password');
    const passwordStatus = getPasswordStatus();
    return value && value.length ? (
      <div className={styles[`progress-${passwordStatus}`]}>
        <Progress
          status={passwordProgressMap[passwordStatus]}
          className={styles.progress}
          strokeWidth={6}
          percent={value.length * 10 > 100 ? 100 : value.length * 10}
          showInfo={false}
        />
      </div>
    ) : null;
  };

  return (
    <Row>
      <Col md={{ span: 8, offset: 8 }} xs={{ span: 24 }}>
        <Tabs defaultActiveKey="1" centered>
          <TabPane tab="Register Account" key="1">
            <Form form={form} name="UserRegister" onFinish={onFinish}>
              <Form.Item
                name="FirstName"
                rules={[{ required: true, message: 'Please input your First Name!' }]}
              >
                <Input placeholder="First Name" />
              </Form.Item>
              <Form.Item
                name="LastName"
                rules={[{ required: true, message: 'Please input your Last Name!' }]}
              >
                <Input placeholder="Last Name" />
              </Form.Item>
              <Form.Item
                name="UserName"
                rules={[{ required: true, message: 'Please input your Username!' }, { min: 6, message: 'Username must be at least 6 characters long' }]}
              >
                <Input placeholder="Username" />
              </Form.Item>
              <FormItem
                name="Email"
                rules={[
                  {
                    required: true,
                    message: 'Please enter your email!',
                  },
                  {
                    type: 'email',
                    message: 'The email address is in the wrong format!',
                  },
                ]}
              >
                <Input
                  placeholder="Email"
                />
              </FormItem>
              <Popover
                getPopupContainer={(node) => {
                  if (node && node.parentNode) {
                    return node.parentNode;
                  }

                  return node;
                }}
                content={
            visible && (
              <div
                style={{
                  padding: '4px 0',
                }}
              >
                {passwordStatusMap[getPasswordStatus()]}
                {renderPasswordProgress()}
                <div
                  style={{
                    marginTop: 10,
                  }}
                >
                  Please enter at least 6 characters and don't use passwords that are easy to guess.
                </div>
              </div>
            )
          }
                overlayStyle={{
                  width: 240,
                }}
                placement="right"
                visible={visible}
              >
                <FormItem
                  name="Password"
                  rules={[
                    {
                      validator: checkPassword,
                    },
                    {
                      pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                      message: 'At least one upper case English letter, one lower case English letter, one digit, one special character and minimum eight in length',
                    },
                  ]}
                  hasFeedback
                >
                  <Input.Password
                    placeholder="Password"
                  />
                </FormItem>
              </Popover>
              <FormItem
                name="ConfirmPassword"
                rules={[
                  {
                    required: true,
                    message: 'Please confirm your password!',
                  },
                  {
                    validator: checkConfirm,
                  },
                ]}
                hasFeedback
              >
                <Input.Password
                  placeholder="Confirm password"
                />
              </FormItem>
              <FormItem className={styles.other}>
                <Button
                  loading={submitting}
                  className={styles.submit}
                  type="primary"
                  htmlType="submit"
                >
                  Register
                </Button>
                <Link className={styles.register} to="/login">
                  Already have an account?
                </Link>
              </FormItem>
            </Form>
          </TabPane>
        </Tabs>
      </Col>
    </Row>
  );
};

export default connect(({ account, loading }) => ({
  account,
  submitting: loading.effects['account/register'],
}))(Register);
