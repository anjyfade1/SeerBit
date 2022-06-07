import { createContext, useState } from "react";

const OrderContext = createContext({
    orders : [],
    totalOrders: 0,
    text: '',
    addOrder: (productItem) => {},
    removeOrder: (productId) => {},
    itemIsOrder: (productId) => {},
    orderSearch: (e) => {}
});

export function OrdersContextProvider(props) {

    const [userOrders, setUserOrders] = useState([]);
    const [searchOrders, setSearchOrders] = useState('');
    

    function addOrderHandler(productItem) {
        setUserOrders((prevUserOrders) => {
            return prevUserOrders.concat(productItem);
        })
    }

    function removeOrderHandler(productId) {
        setUserOrders((prevUserOrders) => {
            return prevUserOrders.filter(product => product.id !== productId);
        })
    }

    function itemIsOrderHandler(productId) {
        return userOrders.some(product => product.id === productId)
    }

   function onChangeHandler (e) {
       e.preventDefault();
        setSearchOrders({text:e.target.value});
    };

    const context = {
        orders: userOrders,
        totalOrders: userOrders.length,
        text: searchOrders,
        addOrder: addOrderHandler,
        removeOrder: removeOrderHandler,
        itemIsOrder: itemIsOrderHandler,
        orderSearch:onChangeHandler
    };

    return <OrderContext.Provider value={context}>
        {props.children}
    </OrderContext.Provider>
}

export default OrderContext;
