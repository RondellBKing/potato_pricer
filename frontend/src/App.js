 // frontend/src/App.js

    import React, { Component } from "react";
    const positions = [
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
    class App extends Component {
      constructor(props) {
        super(props);
        this.state = {
          modal : false,
          viewCompleted: false,
          todoList: positions,
          activeItem: {
            date: "",
            client_id: "",
            prdct_id: "",
            price : "",
            quantity: "",
            validated: false
          }
        };
      }
      displayCompleted = status => {
        if (status) {
          return this.setState({ viewCompleted: true });
        }
        return this.setState({ viewCompleted: false });
      };
      renderTabList = () => {
        return (
          <div className="my-5 tab-list">
            <span
              onClick={() => this.displayCompleted(true)}
              className={this.state.viewCompleted ? "active" : ""}
            >
              Validated Prices
            </span>
            <span
              onClick={() => this.displayCompleted(false)}
              className={this.state.viewCompleted ? "" : "active"}
            >
              Invalid Prices
            </span>
          </div>
        );
      };
      renderItems = () => {
        const { viewCompleted } = this.state;
        const newItems = this.state.todoList.filter(
          item => item.validated == viewCompleted
        );
        return newItems.map(item => (
          <li
            key={item}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span
              className={`todo-title mr-2 ${
                this.state.viewCompleted ? "validated-prices" : ""
              }`}
              title={item.prdct_id}
            >
              {item.prdct_id}
            </span>
            <span>
              <button className="btn btn-secondary mr-2"> Edit </button>
              <button className="btn btn-danger">Delete </button>
            </span>
          </li>
        ));
      };

      render() {
        return (
          <main className="content">
            <h1 className="text-white text-uppercase text-center my-4">Potato Pricing</h1>
            <div className="row ">
              <div className="col-md-6 col-sm-10 mx-auto p-0">
                <div className="card p-3">
                  <div className="">
                    <button className="btn btn-primary">Add Potato Prices</button>
                  </div>
                  {this.renderTabList()}
                  <ul className="list-group list-group-flush">
                    {this.renderItems()}
                  </ul>
                </div>
              </div>
            </div>
          </main>
        );
      }
    }
    export default App;