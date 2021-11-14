import '../index.css';
import './styles.css';
import logo from './background.gif';
import MenuHomePage from './MenuHomePage';
import Textbox from './Textbox';
import Titlebox from './Titlebox';


function ContactMe (){
    return(
        <div>
            <div class="container" >
                <MenuHomePage/>
                <Titlebox />
                <Textbox text=' Contact Me'/>
            </div>
            <img src={logo} className="backgroundimg" alt="logo" />
        </div>
    )
}
export default ContactMe