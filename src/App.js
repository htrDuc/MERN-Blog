import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";

function App() {
  return (
    <div className="App">
        <TopBar></TopBar>
        {/*<Home></Home>*/}
        {/* <Single></Single> */}
        {/* <Write></Write> */}
        <Settings></Settings>
   </div>
  );
}

export default App;
