// Write your code here
import './index.css'
import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total=0
      cartList.forEach(each=>(total+=each.quantity*each.price))

      return (
        <div>
          <h1 className="total-head">
            Order Total: <span className="amount">Rs {total}/-</span>
          </h1>
          <p className="total-items-count">{`${cartList.length} Items in cart`}</p>
          <button type="button" className="checkout-button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
