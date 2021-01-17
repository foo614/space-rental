import { Button, Result } from 'antd';
import { Link } from 'umi';
import React from 'react';
import styles from '../../Home/less/authForm.less';

const actions = (
  <div className={styles.actions}>
    <a href="">
      <Button size="large" type="primary">
        View mailbox
      </Button>
    </a>
    <Link to="/">
      <Button size="large">
        Back to home
      </Button>
    </Link>
  </div>
);

const RegisterResult = ({ location }) => (
  <Result
    className={styles.registerResult}
    status="success"
    title={(
      <div className={styles.title}>
        {location.state ? location.state.getEmailValue : 'AntDesign@example.com'}
      </div>
    )}
    subTitle="The activation email has been sent to your email address and is valid for 24 hours. Please log in to the email in time and click on the link in the email to activate the account."
    extra={actions}
  />
);

export default RegisterResult;
