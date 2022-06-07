import { useContext } from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/img/logo.svg'; 
import shopBag from '../../assets/img/shop bag.svg';
import Search from '../Search/Search';
import OrderContext from '../Store/order-context';
import classes from './Navigation.module.css';

function Navigation() {

    const orderCtx = useContext(OrderContext);

  return (
    <header className={classes.header}>
        <div className={classes.links} >
            Follow - Fb. / Tw. / In.
        </div>
        <div className={classes.logo}>
            <Link to='/' >
                <img src={logo} alt="Logo" />
            </Link>
        </div>
        <div className={classes.navIcon}>
            <Search/>
            <Link to='/cart'>
                <img src={shopBag} alt="shop bag" />
                <span className={classes.badge}>{orderCtx.totalOrders}</span>
            </Link>
        </div>
    </header>
  )
}

export default Navigation