import './App.css'
import Header from './Header.jsx'
import DocumentTabs from './DocumentTabs.jsx'
import EditingModes from './EditingModes.jsx'
import RibbonMenu from './RibbonMenu.jsx'
import MainDocWindow from './MainDocWindow.jsx'

function App() {
  return (
    <>
      <div class="header">
        <Header />
      </div>
      <div class="documentTabs">
        <DocumentTabs />
      </div>
      <div class="editingModes">
        <EditingModes />
      </div>
      <div class="ribbonMenu">
        <RibbonMenu />
      </div>
      <div class="mainDocWindow">
        <MainDocWindow />
      </div>
    </>
  )
}

export default App
