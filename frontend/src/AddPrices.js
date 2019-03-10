import React, { Component } from "react";
import PricingTable from "./PricingTable";

    // Dummy Data
    const dummy_data = [
      {
        date: new Date(),
        client_id: 38,
        prdct_id: 123,
        price : 10.01,
        quantity: 50,
        validated: true
      },
      {
        date: new Date(),
        client_id: 98,
        prdct_id: 74,
        price : 87.02,
        quantity: 7,
        validated: false
      },
      {
        date: new Date(),
        client_id: 38,
        prdct_id: 123,
        price : 12.01,
        quantity: 5,
        validated: true
      },
      {
        date: new Date(),
        client_id: 55,
        prdct_id: 67,
        price : 1000.01,
        quantity: 100,
        validated: false
      }
    ];

class AddPrices extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
        modal : false,
        viewCompleted: false,
        positions: dummy_data,
    };
  }

  render() {
    return (
    <div>
      <PricingTable data = {this.state.positions} />
      Confirm Prices Should be submit button
    </div>
    );
  }
}
export default AddPrices;
