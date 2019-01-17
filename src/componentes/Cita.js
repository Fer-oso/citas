import React, {Component} from 'react';

class Cita extends Component{

    deleteOrder= () =>{
        this.props.deleteOrder(this.props.info.id);
    }

    render(){

        const {date, owner, pet, symptom , time , id} = this.props.info;
        
        return(
            <div className="media mt-3">
                <div className="media-body">
                    <h3 className="mt-0">{pet}</h3>
                        <p className="card-text"><span>Nombre del Dueño:</span>{owner}</p>
                        <p className="card-text"><span>Fecha:</span> {date}</p>
                        <p className="card-text"><span>Hora:</span> {time}</p>
                        <p className="card-text"><span>Sintomas:</span></p>
                        <p className="card-text">{symptom}</p>

                            <button onClick={this.deleteOrder} className="btn btn-danger">Borrar &times;

                            </button>
                </div>
            </div>

        )

    }
}

export default Cita;