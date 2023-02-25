import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register"

//This is the main application. Modify the code below to include additional routes!

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          {/* Add a route here for the Register component */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
