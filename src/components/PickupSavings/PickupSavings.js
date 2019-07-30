import React, {Component} from 'react';
import {Col, Row, Tooltip, OverlayTrigger} from 'react-bootstrap';

var styles = {
    pickupSavings:{
        textDecoration: 'underline',
        backgroundColor: 'red'
    },
    totalSavings:{
        color: 'red',
        fontWeight: 800
    }
}

export default class PickupSavings extends Component {
    render(){
        const tooltip = (
        <Tooltip id="toolTip">
        <p>Picking up the order in store helps cut costs</p>
        </Tooltip>
        );

        return(
           <Row>
               <Col md={6}>
                    <OverlayTrigger placement="bottom" overlay={tooltip}>
                        <div style={styles.pickupSavings}>
                            Pickup Savings
                        </div>
                    </OverlayTrigger>
               </Col>
               <Col md={6} style={styles.totalSavings}> {this.props.price} </Col>
           </Row>
        )
    }
}