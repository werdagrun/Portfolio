import '../index.css';
import './styles.css';
import logo from './background.gif';
import Menu from './Menu';
import Textbox from './Textbox';
import Titlebox from './Titlebox';


function Illustrations (){
    return(
        <div>
            <div class="container" >
                <Menu/>
                <Titlebox />
                <Textbox text=' Illustrations '/>
            </div>
            <img src={logo} className="backgroundimg" alt="logo" />
        </div>
    )
}
export default Illustrations