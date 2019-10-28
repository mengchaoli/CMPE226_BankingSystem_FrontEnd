import React from 'react';
import './App.css';
import {Button, Card, Col, Icon, Row, Typography} from "antd";
import Pic from "./assets/960x1.jpg";
import CustomMenu from "./Menu";
import MyBusiness from "./MyBusiness";
import AddCustomer from "./AddCustomer";

class Main extends React.Component {

  state = {
      contentOne: 'Text One',
      key: '1',
      card2: <MyBusiness />,
  }

  handleChangeContentOne(menuKey) {

      switch(menuKey.key) {
          case "1":
              this.setState(
                  {card2: <MyBusiness/>}
              );
              break;

          case "5":
              this.setState(
                  {card2: <AddCustomer/>}
              );
              break;
      }
  }

  render() {
    //const { contentOne, key } = this.state;
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

                    <Col span={8}>
                      <CustomMenu changeContent={this.handleChangeContentOne.bind(this)} />
                    </Col>

                    {/*second col*/}
                    {this.state.card2}

                    {/*<Col>*/}
                    {/*    */}
                    {/*</Col>*/}
                </Row>
            </Card>
        </>
    );
  }
}

export default Main;