import { useContext } from "react";
import OrderContext from "../Store/order-context";
import CardList from "./CardList"
import classes from './CardList.module.css';


function Card({products}) {
  const orderCtx = useContext(OrderContext);
  return (
    <div className={classes.cardList} >
      {products.filter((product) => {

        if (orderCtx.text === '') {
          return product
        } else if(product.name.toString().toLowerCase().includes(orderCtx.text.toString().toLowerCase())){
          return product
        }else if(product.price.toString().includes(orderCtx.text.toString())){
          return product
      } return product }).map(product =>{return <CardList key={product.id} product={product}  /> })}
        
    </div>
  )
}

export default Card