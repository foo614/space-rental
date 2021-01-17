import React, { useEffect } from 'react';
import { connect } from 'dva';

function Logout(props) {
  const { dispatch } = props;
  useEffect(() => {
    dispatch({ type: 'login/logout' });
  }, [dispatch]);
  return <></>;
}

export default connect()(Logout);
