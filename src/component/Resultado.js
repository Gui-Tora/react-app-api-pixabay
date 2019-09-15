import React, { Component } from 'react'
import Imagen from './Imagen'
import Pag from './Pag'
export default class Resultado extends Component {
    mortarImagenes=()=>{
        const img = this.props.imagenes;
        if(img.length === 0) return null;
        return(
            <React.Fragment>
                <div className='col-12 p5 row'>
                    {img.map(img => (
                        <Imagen 
                        key={img.id}
                        imagen={img}
                        />
                    ) ) }

                </div>
                <Pag    pagPrev={this.props.pagPrev}
                        paguina={this.props.paguina}
                        pagNext={this.props.pagNext}
                    />
            </React.Fragment>
        )
    }

    render() {
        return (
            <React.Fragment>
                {this.mortarImagenes()}
            </React.Fragment>
        )
    }
}
