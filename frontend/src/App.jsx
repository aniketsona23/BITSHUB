import Home from "./pages/Home";
import Forum from "./pages/Forum";
import UserNavbar from "./Components/UserNavBar";

function App() {
  return (
    <div className="flex-col justify-start items-center bg-slate-950 h-[100vh]">
      <UserNavbar />
      {/* <SignIn /> */}
      {/* <Home /> */}
      <Forum />
    </div>
  );
}

export default App;
