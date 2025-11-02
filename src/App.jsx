import './App.css'
import Header from './Header.jsx'
import DocumentTabs from './DocumentTabs.jsx'
import EditingModes from './EditingModes.jsx'
import RibbonMenu from './RibbonMenu.jsx'
import MainDocWindow from './MainDocWindow.jsx'
import DocBody from './DocBody.jsx'
import * as React from 'react';

function App() {

  // state variable for checking which mode to use
  const [mode, setMode] = React.useState("view")

  // helper function for mode changes
  const handleModeChange = (newMode) => {
    setMode(newMode);
  };

  return (
    <>
      <div class="header">
        <Header />
        <EditingModes
          currentMode = {mode}
          handleModeChange = {handleModeChange}/>  
      </div>
      <div class="docBody">
        <DocBody/>
      </div>
       {/* <div class="documentTabs">
         <DocumentTabs />
       </div>

       <div class="ribbonMenu">
         <RibbonMenu />
       </div>
       <div class="mainDocWindow">
         <MainDocWindow />
       </div> */}
     </>
  
  )
}

export default App
