import {useContext} from "react";
import Card from "../component/Card/Card";
import OrderContext from "../component/Store/order-context";
// import classes from '../component/Card/CardList.module.css';


function FifthCart() {
  const orderCtx  = useContext(OrderContext);

  let content;

  if (orderCtx.totalOrders === 0){
    content = <p>There is no Item yet. Start adding some!</p>
  }else{
    content = <Card products = {orderCtx.orders} />
  }

  return (
    <div>
      <h1>Fifth Cart</h1>
      {content}
    </div>
  )
}

export default FifthCart