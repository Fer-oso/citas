import React, {Component} from 'react';
import Cita from './Cita'
class ListaCitas extends Component{
    render(){

        const orders = this.props.orders;

        console.log(Object.keys(orders).length);

        const message = Object.keys(orders).length === 0 ? 'No hay citas' : 'Administra tus citas aqui';

        return(
            <div className="card mt-5">
                <div className="card-body">
                    <h2 className="card-title text-center">{message}</h2>
                    <div className="lista-citas">
                        {Object.keys(this.props.orders).map(order=>(
                             <Cita
                                key={order}
                                info = {this.props.orders[order]}
                                deleteOrder={this.props.deleteOrder}
                             /> ))}
                    </div>
                    
                </div>
            </div>
        )
    }

}

export default ListaCitas;