import React from 'react';
import './App.css';
import { Row } from 'react-bootstrap';
import SubTotal from './components/Subtotal/Subtotal';
import {Component} from 'react';
import PickupSavings from './components/PickupSavings/PickupSavings';
import TaxesFees from './components/TaxesFees/TaxesFees';
import EstimatedTotal from './components/EstimatedTotal/EstimatedTotal'
import ItemDetails from './components/ItemDetails/ItemDetails';
import PromoCodeDiscount from './components/PromoCode/PromoCode';
import {connect} from 'react-redux';
import {handleChange} from './actions/promoCodeActions';



class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      total: 200,
      pickupSavings: -3.85,
      taxes: 0,
      estimatedTotal: 0, 
      disablePromoButton: false
    };
  }

  componentDidMount = () => {
    this.setState(
      {taxes: (this.state.total + this.state.pickupSavings)* 0.0875},
      function(){
        this.setState({
          estimatedTotal: (this.state.total + this.state.estimatedTotal + this.state.taxes)
        });
      }
    )
  }
  
  render(){
  return (
    <div className="container">
      <Row className="purchase-card">
        <SubTotal price={this.state.total}/>
        <PickupSavings price={this.state.pickupSavings}/>
        <TaxesFees taxes={this.state.taxes.toFixed(2)}/>
        <EstimatedTotal price={this.state.estimatedTotal.toFixed(2)}/>
        <ItemDetails price={this.state.estimatedTotal}/>
        <PromoCodeDiscount giveDiscount={() => this.giveDiscountHandler()}
        isDisabled = {this.state.disablePromoButton}
        />
      </Row> 
    </div>
  ); 
}
}
const mapStateToProps = (state) => ({
  promoCode: state.promoCode.value
});

export default connect(mapStateToProps, {handleChange} )(App);
