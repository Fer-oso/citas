import React, { Component } from 'react';
import uuid from 'uuid';


class AgregarCitas extends Component {
    
    namePetRef=React.createRef();
    nameOwner=React.createRef();
    dateRef=React.createRef();
    timeRef=React.createRef();
    symptomRef=React.createRef();
    
    
    state = {
        error : false
    }

     createNewOrder  = (e) =>{
        e.preventDefault();

        const pet = this.namePetRef.current.value,
              owner= this.nameOwner.current.value,
              date = this.dateRef.current.value,
              time = this.timeRef.current.value,
              symptom = this.symptomRef.current.value;

                if(pet === '' || owner === '' || date=== '' || time=== '' || symptom === ''){
                    this.setState({
                        error : true
                    })
                }else{
                    const newOrder ={
                        id:uuid(),
                        pet,
                        owner,
                        date,
                        time,
                        symptom
                    }
                
        
        this.props.createOrder(newOrder);

        e.currentTarget.reset();

                this.setState({
                    error: false
                })
            }         
     } 


    render() {

        const existError = this.state.error;

        return (
            <div className="card mt-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">Agregar las citas aqui</h2>

                    <form  onSubmit={this.createNewOrder}>

                        <div className="form-group row">

                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre Mascota</label>

                            <div className="col-sm-8 col-lg-10">

                                <input type="text" ref={this.namePetRef} className="form-control" placeholder="Nombre Mascota" required />

                            </div>

                        </div>

                        <div className="form-group row">

                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre Dueño</label>

                            <div className="col-sm-8 col-lg-10">

                                <input type="text" ref={this.nameOwner} className="form-control" placeholder="Nombre Dueño de la Mascota"  required/>

                            </div>

                        </div>



                        <div className="form-group row">

                            <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>

                            <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">

                                <input type="date" ref={this.dateRef} className="form-control" required/>

                            </div>



                            <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>

                            <div className="col-sm-8 col-lg-4">

                                <input type="time" ref={this.timeRef} className="form-control" required/>

                            </div>

                        </div>



                        <div className="form-group row">

                            <label className="col-sm-4 col-lg-2 col-form-label">Sintoma</label>

                            <div className="col-sm-8 col-lg-10">

                                <textarea className="form-control" ref={this.symptomRef} required></textarea>

                            </div>

                        </div>

                        <div className="form-group row justify-content-end">

                            <div className="col-sm-3">

                                <button type="submit" className="btn btn-success w-100">Agregar</button>

                            </div>

                        </div>

                    </form>

                 {existError ? <div className="alert alert-danger text-center">Todos los campos son obligatorios</div> : ''}   
                </div>
            </div>
        )

    }

}

export default AgregarCitas;