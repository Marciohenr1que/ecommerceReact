import Header from "./compnents/Header"
import Footer from "./compnents/footer"
import Carrinho from "./compnents/Carrinho"
import Carrinhoescolha from "./compnents/Carrinhoescolha"
import Efetuarcompra from "./compnents/Efetuarcompra"
import { useState } from "react"
import PropTypes from 'prop-types'


App.propTypes = {
    // CartItems: PropTypes.array.isRequired,
    CartCount: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired,
    CartItems: PropTypes.array.isRequired
    
    
}



function App() {
  const [page, setPage] = useState('carrinho')
  const [CartItems, setCartItems] = useState([])
  const [CartCount, setCartCount] = useState(0)
  const totalPrice = CartItems.reduce((total, item) => total + item.price, 0)

  const handleUpdateCart = (items) => {
    setCartItems(items)
  }
  const handleUpdateCartCount = (count) => {
    setCartCount(count)
  }
  const handleGoToCart = () => {
    setPage('carrinhoescolha')
  }
  const handleGoToGames = () => {
    setPage('carrinho')
  }
  const handleGoToCheckout = () => {
    setPage('efetuarcompra')
  }
    return (
      <>
        {page === 'carrinho' && (
          <div>
            <Header
              CartCount={CartCount}
            />
            <Carrinho
              onUpdateCart={handleUpdateCart}
              onUpdateCartCount={handleUpdateCartCount}
              onGoToCart={handleGoToCart}
            />
            <Footer />
          </div>
        )}
        {page === 'carrinhoescolha' && (
          <div>
            <Carrinhoescolha
              CartItems={CartItems}
              totalPrice={totalPrice}
              onGoToGames={handleGoToGames}
              onGoToCheckout={handleGoToCheckout}
              onUpdateCartCount={handleUpdateCartCount}
              CartCount={CartCount}
            />
          </div>
        )}
        {page === 'efetuarcompra' && (
          <div>
            <Efetuarcompra selectedProducts={CartItems}
              totalPrice={totalPrice}
              CartCount={CartCount}
            />
          </div>
        )}
      </>
    )
  }

export default App