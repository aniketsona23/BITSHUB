import Home from "./pages/Home";
import Login from "./pages/Login";
import Forum from "./pages/Forum";
import Layout from "./Components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DoubtView from "./pages/DoubtView";
import PostDoubt from "./pages/PostDoubt";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/user" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="forum/:subject" element={<Forum />} />
                    <Route
                        path="forum/:subject/:doubtId"
                        element={<DoubtView />}
                    />
                    <Route path="forum/:subject/post" element={<PostDoubt />} />
                </Route>
                <Route path="/login" element={<Login />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
