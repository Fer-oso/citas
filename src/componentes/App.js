import React, { Component } from 'react';
import Header from './Header';
import AgregarCitas from './AgregarCitas';
import ListaCitas from './ListaCitas';
class App extends Component {
  
  state = {
    orders:[]
  }

  componentDidMount(){
   const ordersLS= localStorage.getItem('orders');
      if(ordersLS){
        this.setState({
          orders : JSON.parse(ordersLS)
        })
      }
  }

  componentDidUpdate(){
    localStorage.setItem(
    'orders',
    JSON.stringify(this.state.orders)
    )
  }


  createOrder = (order) =>{
    const orders =[...this.state.orders,order];
      console.log(orders);
      this.setState({
        orders : orders
      });
  }
  
  deleteOrder = id =>{
    const actuallyOrder =[...this.state.orders];
    const orders = actuallyOrder.filter(order => order.id !== id);
    this.setState({
      orders:orders
    })
  }
  
  render() {
    return (
      <div className="container">
            <Header 
              titulo={'Administrador de pacientes'}
            />
           <div className="row">
              <div className="col-md-6">
                <AgregarCitas
                    createOrder={this.createOrder}
                  />
              </div>
                <div className="col-md-6">
                  <ListaCitas 
                    orders = {this.state.orders}
                    deleteOrder={this.deleteOrder}
                  />
                </div>
             </div> 
      </div>
    );
  }
}

export default App;
