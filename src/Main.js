import React from 'react';
import './App.css';
import {Button, Card, Col, Icon, Row, Typography} from "antd";
import Pic from "./assets/960x1.jpg";
import CustomMenu from "./Menu";
import MyBusiness from "./MyBusiness";
import AddCustomer from "./AddCustomer";
import MyAlert from "./MyAlert";

class Main extends React.Component {

  state = {
      contentOne: 'Text One',
      isAddCustomerSuccess: false,
      key: '1',
      card2: <MyBusiness />,
  }

  conditionalRender() {
      if (this.state.key === '1') {
          return <MyBusiness/>;
      } else if(this.state.key === '5') {
          if (this.state.isAddCustomerSuccess) {
              return <MyAlert/>;
          } else {
              return <AddCustomer onceAddCustomerSuccess={this.handleChangeIsAddCustomerSuccess.bind(this)}/>;
          }
      }
  }

  handleChangeContentOne(menuKey) {

      switch(menuKey.key) {
          case "1":
              this.setState(
                  {key: '1'}
              );
              break;

          case "5":
              this.setState(
                  {key: '5'}
              );
              break;
      }
  }

    handleChangeIsAddCustomerSuccess() {
      this.setState(
          {isAddCustomerSuccess: true}
      );
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
                    {this.conditionalRender()}

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