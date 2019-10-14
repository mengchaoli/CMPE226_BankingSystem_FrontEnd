import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button, Card, Col, Icon, Row, Typography} from "antd";
import Pic from "./assets/960x0.jpg";
import CustomMenu from "./Menu";

class App extends React.Component {

  state = {
    contentOne: 'Text One',
    key: '1',
  }

  handleChangeContentOne(menuKey) {
    switch(menuKey) {
      case "":
    }
    this.setState({
      contentOne: `New Content ${Math.random() * 100}`

    });
  }

  render() {
    const { contentOne, key } = this.state;
    return (
        <>
        <Card bodyStyle={{ backgroundImage: `url(${Pic})`, height: 500, width: '100%',
          backgroundSize:'100% 100%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top center' }}>
          <Row type='flex' justify='space-around'>
            <h2 style={{color: 'white'}}> Header </h2>
          </Row>
        </Card>
        <Card>
        <Row gutter={32}>

        <Col span={12}>
          <CustomMenu changeContent={this.handleChangeContentOne.bind(this)} />
        {/*<div style={{border: '1px solid #0d0d9d'}}>Card One</div>*/}
        </Col>

        <Col span={12}>
        <Row>
        <Typography.Title level={4}> Title </Typography.Title>
        <Typography.Paragraph> {contentOne} </Typography.Paragraph>
        </Row>

        <Row>
        <Typography.Text type='secondary'>Text Two</Typography.Text>
        <Button type='link' size='small' icon='linkedin' />
        <Icon type="linkedin" theme="filled" style={{color: 'green'}} />
        </Row>
        </Col>
        </Row>
        </Card>
          </>
    );
  }
}

export default App;
