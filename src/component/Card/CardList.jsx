import { useContext } from 'react';
// import
import like from '../../assets/img/like.svg';
import cart from '../../assets/img/shopping-cart.svg';
import OrderContext from '../Store/order-context';
import classes from './CardList.module.css';

function CardList({product}) {
    
    const orderCtx = useContext(OrderContext);
    const itemIsOrder = orderCtx.itemIsOrder(product.id);
  
    function toggleOrderStatusHandler(){
        if (itemIsOrder) {
            orderCtx.removeOrder(product.id);
        }else{
            orderCtx.addOrder({
                id:product.id,
                name:product.name,
                price:product.price,
                image:product.image,
               
            })
        }
    }


  

  return (

    <div className={classes.col}>
        <div className={classes.productImage}>
            <img src={product.image} alt="one" />
        </div>
        <div className={classes.productDetails}>
            <div>
                <h3>{product.name}</h3>
                <span>${product.price}</span>
            </div>
            <div>
                <img src={cart} alt="cart" onClick={toggleOrderStatusHandler} />  
                <br/>
                <img src={like} alt="like" />                
            </div>
        </div>
    </div>
 
  )
}

export default CardList