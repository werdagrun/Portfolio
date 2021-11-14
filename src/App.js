import logo from './background.gif';
import './index.css';
import './components/styles.css';

import Menu from './components/Menu';
import Textbox from './components/Textbox';
import Titlebox from './components/Titlebox';


function App() {
  return (
    <div className="App">

      <header className="App-header">
        <div class="container" >
        <Menu/>
      
        <Titlebox />
      
        <Textbox text=' Hi, my name is Caitlyn Grunewald. I am currently a full-time student. 
        
        
        
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin diam ac sem faucibus accumsan. Mauris lorem velit, luctus ut ultrices nec, lacinia porttitor nisi. Sed interdum facilisis ex id facilisis. Nunc lorem urna, faucibus non volutpat id, tincidunt et orci. In dignissim nisi nisl. Suspendisse potenti. Donec lacinia diam nec porta convallis. Sed imperdiet lectus quam, et varius tortor luctus non. Donec ullamcorper ante nec massa dignissim dictum.

Ut nec odio mollis, ultricies nisl et, porta libero. Etiam et malesuada sapien. Donec at nisi sed diam sodales convallis non ac ligula. Vivamus posuere arcu eget nibh laoreet, non placerat arcu feugiat. Vivamus a sapien suscipit lectus vestibulum luctus id nec leo. Pellentesque feugiat ex dui, non sagittis mi iaculis at. Nulla eu quam mi. Ut et varius massa. Sed laoreet cursus libero, id hendrerit diam consectetur tempus. '/>
        </div>
        <img src={logo} className="backgroundimg" alt="logo" />
        
      </header>
    </div>
  );
}

export default App;
