import { Home, Login, Purchases, ProductsDetail, User } from "./Pages";
import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import { LoadingScreen, NavBar, ProtectedRoutes, Footer} from "./components"
import { useSelector } from "react-redux";



// para que se vea lo visual en todas las rutas como el loading, tiene que estar fuera de routes
function App() {
  const isLoading = useSelector((state) => state.isLoading);
 
  return (
    <HashRouter>
        <NavBar />
        <div className="content">
          {isLoading && <LoadingScreen />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:id" element={<ProductsDetail />} />
            <Route path="/login" element={<Login />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/purchases" element={<Purchases />} />
              <Route path='/user' element={<User />} />
            </Route>
          </Routes>
          <Footer />
        </div>
    </HashRouter>
  );
}

export default App;