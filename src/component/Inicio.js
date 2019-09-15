import React, { Component } from 'react';

export default class Inicio extends Component {

    state={
        imagenes:''
    }


    inicio=()=>{
        const link ='https://pixabay.com/api/?key=8849857-9b32e188690c57dcb2458e777&q'
        fetch(link)
        .then(res=> res.json())
        .then(resul => this.setState({ imagenes: resul.hits }) )
    }
    
    render() {
        return (
            <div>
               {this.props.imagenes} 
            </div>
        )
    };
}
