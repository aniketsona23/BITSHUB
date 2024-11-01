import Home from "./pages/Home";
import Forum from "./pages/Forum";
import Layout from "./Components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DoubtView from "./pages/DoubtView";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/forum" element={<Forum />} />
                    <Route path="/doubt/:id" element={<DoubtView />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
