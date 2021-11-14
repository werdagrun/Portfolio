import Menu from './Menu';
import '../index.css';
import './styles.css';
import logo from './background.gif';
import Textbox from './Textbox';
import Titlebox from './Titlebox';


function Photography (){
    return(
        <div>
            <div class="container" >
                <Menu/>
                <Titlebox />
                <Textbox text=' Photography '/>
            </div>
            <img src={logo} className="backgroundimg" alt="logo" />
           
        </div>
    )
}
export default Photography