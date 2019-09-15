import React, { Component } from 'react'
import Buscador from './component/Buscador'
import Resultado from './component/Resultado'
export default class App extends Component {

  state={
    termino:'',
    imagenes:[],
    paguina:''
  }

  scroll=()=>{
    const elemento = document.querySelector('.jumbotron');
    elemento.scrollIntoView('smooth','start')
  }


  pagPrev= ()=>{
      //leer el sgtate de la paguina actual
      let paguina = this.state.paguina

      //leer si la paguina es 1, no regresar mas 
      if(paguina === 1)return null;

      //1 a la paguinacion actual
      paguina-=1

      //agregar el cambio al state
      this.setState({ paguina }, ()=>{this.consultrarApi(); this.scroll() });
  }

  pagNext= ()=>{
    //leer el sgtate de la paguina actual
    let paguina = this.state.paguina
    //+1 a la paguinacion actual
    paguina++
    //agregar el cambio al state
    this.setState({ paguina }, ()=>{ this.consultrarApi(); this.scroll() } );
  }



  consultrarApi = ()=>{
    const paguina=this.state.paguina;
    const url = `https://pixabay.com/api/?key=8849857-9b32e188690c57dcb2458e777&q=${this.state.termino}&per_page=30&page=${paguina}`
    
    fetch(url)
      .then(res=> res.json())
      .then(resul => this.setState({ imagenes: resul.hits }) )
  }


  datosBusqueda = (termino)=>{
    this.setState({
      termino:termino,
      paguina: 1
    },()=>this.consultrarApi()  )
  }
  render() {
    return (
      <div className='app container'>
          <div className='jumbotron'>
            <p className='lead text-center'>Buscador de imagenes</p>
          
            <Buscador datosBusqueda={this.datosBusqueda}/>
          </div>

          <div className='row justify-content-center'>
            <Resultado imagenes={this.state.imagenes}
                        pagPrev={this.pagPrev}
                        paguina={this.state.paguina}
                        pagNext={this.pagNext}
                        />
          </div>
      </div>
    )
  }
}
