import '../index.css';
import './styles.css';
import logo from './background.gif';
import MenuHomePage from './MenuHomePage';
import Textbox from './Textbox';
import Titlebox from './Titlebox';

function About (){

    return(
        <div>
            <div class="container" >
                <MenuHomePage/>
                <Titlebox />
                <Textbox text=' About'/>
            </div>
            <img src={logo} className="backgroundimg" alt="logo" />
        </div>
    )
}
export default About