import MenuItem from './MenuItem';
import './styles.css';
import {Link} from 'react-router-dom'

const Menu = () => {
    return (
        <div  class='menu'>


            
            <Link to="/Illustrations">
                <MenuItem name='ILLUSTRATIONS'/>
            </Link>

            
            <Link to="/Photography">
                <MenuItem  name='PHOTOGRAPHY'/>
            </Link>

            <Link to="/ContactMe">
                <MenuItem  name='CONTACT ME'/>
            </Link>
   
        </div>
    )
}
export default Menu
