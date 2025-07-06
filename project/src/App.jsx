import React from 'react'
import Ifelse from './components/Ifelse'
import Anymious from './components/Anymious'
import Map from './components/Map'
import MapP from './components/MapP'
import ConditionalRendaring from './components/ConditionalRendaring'
import SwitchRendering from './components/SwitchRendering'
import TernaryOperator from './components/TernaryOperator'
import Passingprops from './components/Passingprops'
import PropsObject from './components/PropsObject'
import BtnProps from './components/BtnProps'
import Formsubmitted from './components/Formsubmitted'
import UseRef from './components/UseRef'
import Multipleref from './components/Multipleref'
import Refuseclasscng from './components/Refuseclasscng'
import Usestate1 from './components/Usestate1'

function App() {
  let Obj ={
    name:"Saif",
    ID:41220300379,
    city:"Dhaka"
  }

  const btnclick = ()=>{
    alert("Hello There");
  }
  return (
    <div>
     <Ifelse/>
     <Anymious/>
     <Map/>
     <MapP/>
     <ConditionalRendaring/>
     <SwitchRendering/>
     <TernaryOperator/>
     <Passingprops title="Hi there Saif"/>
     <PropsObject item={Obj}/>
     <BtnProps Click={btnclick}/>
     <Formsubmitted/>
     <UseRef/>
     <Multipleref/>
     <Refuseclasscng/>
     <Usestate1/>
     
    </div>
  )
}

export default App