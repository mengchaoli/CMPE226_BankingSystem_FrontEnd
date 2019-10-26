import React, {Component} from 'react';
import {Col, Row} from "antd";
import FilterTag from "./FilterTag";
import CustomerList from "./CustomerList";

class MyBusiness extends Component {

    render() {
        return (
            <div>
                <Col span={12}>
                    <Row>
                        <FilterTag />
                    </Row>

                    <Row>
                        <CustomerList />
                    </Row>
                </Col>
            </div>
        );
    }
}

export default MyBusiness;