import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";

function App() {
  return (
    <div className="App">
        <TopBar></TopBar>
        {/*<Home></Home>*/}
        {/* <Single></Single> */}
        <Write></Write>
    </div>
  );
}

export default App;
