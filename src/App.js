import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert'; 

function App() {
  const [mode,setMode]=useState('light');  //shows state whether dark mode is enabled or not
  const [alert,setAlert]=useState(null);

const showAlert=(message,type)=>{
     setAlert({
      msg:message,
      type:type,    //commonname is permitted if you want
     })

     setTimeout(()=>{
      setAlert(null);
     },2000);
}

const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='black';
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
    } 
  }


  return (
     <>
     <Navbar mode={mode} toggleMode={toggleMode}/>
     <Alert alert={alert}/>
     <div className="container">
     <TextForm heading="Enter your Text Here " mode={mode} />
     {/* <About/> */}
     </div>
     </>
  );

}

export default App;
