import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from '../../contexts/CartContext';
import styles from './header.module.scss';

const Header = () => {

    const {itemCount} = useContext(CartContext);
    return ( 
        <header className={styles.header}>
            <Link to='/'>Store</Link>
            <Link to='/addItems'>Add Items</Link>
           
        </header>
     );
}
 
export default Header;