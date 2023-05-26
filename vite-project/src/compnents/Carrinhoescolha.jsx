import Header from "./Header";
import Footer from "./footer";
import '../stylo/style.css'
import PropTypes from 'prop-types'

Carrinhoescolha.propTypes = {
    CartItems: PropTypes.array.isRequired,
    CartCount: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired
}

export default function Carrinhoescolha(props) {
    const {CartItems, CartCount, totalPrice} = props

    const incremento = () => {
      onUpdateCartCount(CartCount + 1)  
    }
    const decremento = () => {
        onUpdateCartCount(CartCount - 1)
    }

    return (
        <>
            <Header />
            <div className="div-compra">
            <div>
                <div className='div-topo-01'>
                    <h1>Carrinho</h1>
                    <span className='titulo-span'>{CartCount}</span>
                </div>  
            </div>
            <div className="image-compra">
                {CartItems.map((item) => (
                    <div key={item.id} className="div-imagescompra">
                        <img className="img" src={item.image} alt="" />
                        <div className="div-conteudo">
                            <p>{item.title}</p>
                            <p>Preço: {item.price }</p>
                            <p>Quantidade: {item.quantidade}</p>
                            <div className="div-span">
                            <span className="maior" onClick={incremento}>+</span>
                            <span className="menor" onClick={decremento}>-</span>   
                            </div>    
                        </div>
                    </div>
                ))} 
            </div>
            
            <p>Valor total: <strong>{totalPrice} Reais</strong></p>
                <div className="div-rodape"> 
                    <button className="btn-cart" onClick={props.onGoToCheckout}>
                    Finalizar compra
                </button>
                <button className="btn-cart" onClick={props.onGoToGames}>Carregar dados selecionados</button>
                
            </div>
            </div>
            <Footer />
        </>
    )
}