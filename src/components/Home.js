
import '../index.css';
import './styles.css';
import logo from './background.gif';
import MenuHomePage from './MenuHomePage';
import Textbox from './Textbox';
import Titlebox from './Titlebox';

function Home (){
    return(
        <div>
            <div class="container" >
                <MenuHomePage/>
                <Titlebox />
                <Textbox text=' Hi, my name is Caitlyn Grunewald. I am currently a full-time student. '/>
            </div>
            <img src={logo} className="backgroundimg" alt="logo" />
            

            
        </div>
    )
}
export default Home