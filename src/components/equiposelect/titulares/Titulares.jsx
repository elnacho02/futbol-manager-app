import React from 'react'
import { connect } from 'react-redux'
import cancha from "../../../cancha.svg"
function Titulares({titulares, quitarTitular}) {
    return (
        <section>
            <h2>Titulares</h2>
            <div className="cancha">
                {
                    titulares.map(j=>(
                        <article className="titular" key={j.id}>
                            <div>
                                <img src={j.foto} alt={j.nombre}/>
                                <button onClick={()=> quitarTitular(j)}>X</button>
                            </div>
                            <p>{j.nombre}</p>
                        </article>
                    ))
                }
                <img src={cancha} alt=""/>
            </div>
            
        </section>
    )
}
const mapStateToProps = state => ({
    titulares: state.titulares
})
const mapDispatchToProps = dispatch => ({
    quitarTitular(j){
        dispatch({
            type: "REMOVE_TITULAR",
            j
        })
    }

})
export default connect(mapStateToProps, mapDispatchToProps)(Titulares)
