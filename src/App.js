import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import DaftarBuku from "./pages/daftar";
import TambahBuku from "./pages/tambah";
import UbahBuku from "./pages/ubah";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/daftar-buku">
          <DaftarBuku/>
        </Route>
        <Route path="/tambah-buku">
          <TambahBuku/>
        </Route>
        <Route path="/ubah-buku/:id">
          <UbahBuku/>
        </Route>
        <Redirect path="*" to="/daftar-buku" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
