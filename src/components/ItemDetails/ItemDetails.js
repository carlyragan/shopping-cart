import React, {Component} from 'react';
import {Button, Collapse, Well, Media, Row, Col} from 'react-bootstrap';

export default class ItemDetails extends Component {
   constructor(props){
       super(props);
       this.state = {
           open: false
       };
   }

    render(){
        return(
            <div>
                <Button className="item-details-button"
                bsStyle="link"
                onClick={()=> this.setState({open: !this.state.open})}
                >
                {this.state.open === false ? 'See':'Hide'} item details{''}
                {this.state.open === false ? '+' : '-' }
                </Button>
                <Collapse in={this.state.open}>
                    <div>
                    <Media>

                         <img
                         width={100}
                         height={100}
                         alt="thumbnail"
                         src="https://i5.walmartimages.com/asr/9b590c88-f35b-4d9a-83e9-13b385075e64_1.5c266979d77f51bb9ced0b863ac033d6.jpeg"
                         />

                            <Media.Body>
                                Random Walmart Product
                            <Row className="show-grid">
                                <Col md={6}>
                                    <strong>${this.props.price}</strong>
                                    <br/>
                                    <strong className="price-strike">{`$${this.props.price}`}</strong>
                                </Col>
                                <Col>
                                    <strong>Qty: 1 </strong>
                                </Col>
                            </Row>
                           </Media.Body>
                    </Media>
                    </div>
                </Collapse>
            </div>
        )
    }
}
