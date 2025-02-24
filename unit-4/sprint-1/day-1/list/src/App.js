
import './App.css';
import List from './assignments/List';

import Join from './we/JoinUs';
import Contact from './we/Contact';
import Download from './we/Download';
import Help from './we/Help'
import Home from './we/Home'
import Login from './we/Login'
import Search from './we/Search'
import Settings from './we/Settings'
import Card from './assignments/Card';

function App() {
  return (
    <>
    
    <div>
 <List/>
 <Card/>
    </div>
    <div className="box">
 <Join one="JOIN US"/>
    <Contact one="CONTACT US"/>
      <Download one="DOWNLOAD"/>
        <Help one="HELP"/>
         <Home one="HOME"/>
         <Login one="LOGIN"/>
         <Search one="SEARCH"/>
        <Settings one="SETTINGS"/> 
        </div>
    </>
  );
}

export default App;
