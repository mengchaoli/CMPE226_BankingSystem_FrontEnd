import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Card, Col, Typography, Button, Icon } from 'antd';
import './index.css';
import CustomMenu from './Menu';
import Pic from './assets/960x0.jpg';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render((
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

                <CustomMenu />

                <Col span={12}> <div style={{border: '1px solid #9d9d9d'}}>Card One</div> </Col>
                <Col span={12}>
                    <Row>
                        <Typography.Title level={4}> Title </Typography.Title>
                        <Typography.Paragraph> Text One </Typography.Paragraph>
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
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
