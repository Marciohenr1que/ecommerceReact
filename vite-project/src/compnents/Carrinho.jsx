import '../stylo/style.css'
import { produtos } from '../assets/produtos.js'
import { useState,useEffect } from 'react'
import PropTypes from 'prop-types'

Carrinho.propTypes = {
    // CartItems: PropTypes.array.isRequired,
    CartCount: PropTypes.number.isRequired,
    // totalPrice: PropTypes.number.isRequired
    selectedItems: PropTypes.array.isRequired
}

export default function Carrinho(props) {
    const [CartCount, setCartCount] = useState(0)
    const [selectedItems, setSelectedItems] = useState([])
    

    const handleAddCart = (event, produto) => {
        if (event.target.checked) {
            setCartCount(CartCount + 1)
            setSelectedItems([...selectedItems, {...produto, quantidade: 1}])
        } else {
            setCartCount(CartCount - 1)
            setSelectedItems(selectedItems.filter((item)=> item.id !== produto.id))
        }
    }
    useEffect(() => {
        props.onUpdateCart(selectedItems)
        props.onUpdateCartCount(CartCount) 
    }, [selectedItems, CartCount])
    
    return (
        <div>
            <div className='div-topo'>
                <div className='div-topo-01'>
                    <h1>Produtos</h1>
                    <span className='titulo-span'>{CartCount}</span>
                </div> 
            </div>
        <div className='div-central'>
            <div className='Produtos-carrinho'>
                {produtos.map((produto) => (
                    <div className='produto-jogo' key={produto.id}>
                        <img className='img-poduto' src={produto.image} alt="" />
                        <div className="value-select">
                                <input type="checkbox" 
                                onChange={(event) => handleAddCart(event,produto)}/>
                                <span>Preço: R$ <strong>{produto.price}</strong></span>
                            </div>
                        </div>

                    
                ))}
            </div>   
        </div>
        <div className="div-btn-cart">
                <button className="btn-cart" onClick={props.onGoToCart}>
                Ir para o carrinho  
                </button>
            </div>
            
            
        </div>
    )
}