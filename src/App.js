import Profile from "./Profile/profile";
import profileOne from './Profile/profileOne';
import "./App.css";

function App() {
  const styleObject = {listStyleType :"diamond" ,fontWeight: "bolder" ,fontFamily :"ultra-condensed",transform : "translate3d" ,borderWidth : "thick", borderStyle:"ridge",borderColor :"white", backgroundAttchement : "scroll", backgroundColor:'#FFF0F5', color :"#4B0082", textAlign: 'center'}
  return (
    <div style = {styleObject} className="App">
      <profileOne/>
      <Profile/>
    </div>
  );
}

export default App;
