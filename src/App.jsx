import './App.css'
import Header from './Header.jsx'
import DocumentTabs from './DocumentTabs.jsx'
import EditingModes from './EditingModes.jsx'
import RibbonMenu from './RibbonMenu.jsx'
import MainDocWindow from './MainDocWindow.jsx'

function App() {
  return (
    <>
      <Header />
      <DocumentTabs />
      <EditingModes />
      <RibbonMenu />
      <MainDocWindow />
    </>
  )
}

export default App
