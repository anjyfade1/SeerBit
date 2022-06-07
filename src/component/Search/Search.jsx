import { useContext } from 'react';
import search from '../../assets/img/search.svg';
import OrderContext from '../Store/order-context';
import classes from './Search.module.css'

function Search(props) {

    const orderCtx = useContext(OrderContext);

  return (

     
    <form className={classes.form}>
        <input  
            placeholder='Search'   
            type='text'
            onChange={orderCtx.orderSearch}
        />
        <img src={search} alt="" />
    </form>

)

}


export default Search