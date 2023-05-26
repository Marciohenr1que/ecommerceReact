import React from "react"
import Header from "../compnents/Header"
import Footer from "../compnents/footer"
import '../stylo/style.css'
import PropTypes from 'prop-types'

Efetuarcompra.propTypes = {
    CartItems: PropTypes.array.isRequired,
    CartCount: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired,
    selectedProducts: PropTypes.array.isRequired
}
export default function Efetuarcompra(props) {
    const {selectedProducts, totalPrice, CartCount} = props

    return (
        <>
        <Header />
        <div className="container-checkout">
            <div className="field-checkout">
                <h1>Checkout</h1>
                <p>Produtos Escolhidos</p>
            </div>
            <div className="div-checkout">
                {selectedProducts.map((item) => (
                    <React.Fragment key={item.id}>
                    <img className="img-checkout" 
                    key={item.id}
                    src={item.image}  
                    alt={item.title}
                    />
                    </React.Fragment>
                ))}
            </div>
            <div className="div-final">
                <p>Item Total: {CartCount}</p>
                <p>valor Total: R$ <strong>{totalPrice.toFixed(2)}</strong></p>
            </div>
            <div className="div-btn-final"><button>Confirmar Compra</button></div>
        </div>
        <Footer />
        </>
    )
}

