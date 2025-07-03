import React from 'react'
import Ifelse from './components/Ifelse'
import Anymious from './components/Anymious'
import Map from './components/Map'
import MapP from './components/MapP'
import ConditionalRendaring from './components/ConditionalRendaring'
import SwitchRendering from './components/SwitchRendering'
import TernaryOperator from './components/TernaryOperator'
import Passingprops from './components/Passingprops'

function App() {
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
     
    </div>
  )
}

export default App