import React from 'react';
import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';

const responseFacebook = (response) => {
  console.log(response);
};

ReactDOM.render(
  <FacebookLogin
    appId="355885012371203"
    autoLoad
    fields="name,email,picture"
    callback={responseFacebook}
    cssClass="my-facebook-button-class"
    icon="fa-facebook"
  />,
  document.getElementById('demo')
);
