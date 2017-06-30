
import React, { Component } from 'react';
import { TouchableOpacity, View, ListView, Image, WebView } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body } from 'native-base';

import { openDrawer } from '../../actions/drawer';

class webView extends Component {

  static propTypes = {
    name: React.PropTypes.string,
    index: React.PropTypes.number,
    list: React.PropTypes.arrayOf(React.PropTypes.string),
    openDrawer: React.PropTypes.func,
  }

  render() {
    return (
      <WebView
        source={{uri: 'https://www.google.com/maps/place/Universitas+Pendidikan+Ganesha/@-8.1161587,115.0876115,3a,75y,90t/data=!3m8!1e2!3m6!1shttps:%2F%2Farchive.is%2FyJMl5%2Feaad75a3ffc8b502197f4b230a169dec56922537.jpg!2e7!3e27!6s%2F%2Flh4.googleusercontent.com%2Fproxy%2FrhMImV0k3WzileMNTxY5JHTl6QrflM25HnXc63KkSf9YCj5Pp0xEsSSJN-eQk6yQs57cEQrgtiqo0b7Dp4HDoFmr4eONb43Df47u764sXnS0BrUtxvFhXRbP5x_CCBGe3-JdRHvDdnmt1kkH0wIGLRZ5WFdGW3A%3Dw203-h101-k-no!7i680!8i340!4m5!3m4!1s0x0:0x1abe2912c8d6af5a!8m2!3d-8.1165904!4d115.0878663'}}
        style={{marginTop: 20}}
      />
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
  };
}

const mapStateToProps = state => ({
  name: state.user.name,
  list: state.list.list,
});

export default connect(mapStateToProps, bindAction)(webView);
