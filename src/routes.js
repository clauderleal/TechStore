import StandardPage from './components/StandardPage/index';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Router() {
    return (
       <BrowserRouter>
            <Routes>
                <Route path='/' element={<StandardPage />}>
                    <Route index element={<div>Home</div>} />
                </Route>
            </Routes>
       </BrowserRouter> 
    )
}