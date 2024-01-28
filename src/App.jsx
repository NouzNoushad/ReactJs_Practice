import SideBar from "./components/SideBar/SideBar"
import TopBar from "./components/TopBar/TopBar"
import "./App.css";

function App() {

  return (
    <>
      <TopBar />
      <div className="container">
        <SideBar />
        <div className="others">Other pages</div>
      </div>
    </>
  )
}

export default App
