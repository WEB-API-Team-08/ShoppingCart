import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from '../../contexts/CartContext';
import {CartIcon} from '../icons';
import styles from './header.module.scss';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Profile from './Profile';


const Header = () => {

    const {itemCount} = useContext(CartContext);
    return ( 
        <header className={styles.header}>
            <Link to='/'>Store</Link>
            <Link to='/cart'> <CartIcon/> Cart ({itemCount})</Link>
            <Link to='/orders'> Orders</Link>
            <LoginButton />
            <LogoutButton />
            <Profile />
        </header>
     );
}
 
export default Header;