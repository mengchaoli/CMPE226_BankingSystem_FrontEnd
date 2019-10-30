import React, {Component} from 'react';
import {Alert, Col} from 'antd';


class MyAlert extends Component {


    render() {
        return (
            <Col span={16}>
                <Alert
                    message="Success Tips"
                    description="Customer added successfully."
                    type="success"
                    showIcon
                />
            </Col>
        );
    }
}

export default MyAlert;