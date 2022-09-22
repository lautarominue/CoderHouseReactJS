import './NavBar.css';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from './context/CartContext';

const NavBar = () => {
    const {cartProducts} = useContext(CartContext)
    const totalNumber = () => {
        let count = 0
        cartProducts.forEach(element => {
            count = count + element.cant
        });
        return count
    };
    return(
        <nav>
            <div>
                <img src='https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulROWEXTTOG_xJ2cUE97MgposLWsJzhs0uHPdHNHtITvwtbaxaHwZrjXkD1T7sEmi-2W9In2ilKy-UI-ZmGnd9THewdsfxiOrSe6AUNs/360fx360f' className='nav__icon' />
            </div>
            <div className='nav__menu'>
                <div>
                    <Link to="/"> <ul>Home</ul></Link>
                </div>
                <div>
                    <Link to="/productos"> <ul>Productos</ul></Link>
                </div>
                <div>
                    <Link to="/contacto"> <ul>Contacto</ul></Link>
                </div>
            </div>
            <div>
                <div>
                    <span>{totalNumber()}</span>
                </div>
                <div>
                    <CartWidget />
                </div>
            </div>
        </nav>
    )
}

export default NavBar;