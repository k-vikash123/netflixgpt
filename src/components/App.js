
import Home from "./Home";
import Login from "./Login";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import Search from "./Search";


function App() {


  const appLayout = createBrowserRouter([
    {
         path : "/",
         element : <Home/>,
  },
  {
        path : "/login",
        element : <Login/>
  },
  {
    path : "/browse",
    element : <Browse/>
  },
])


  return (
    <div className="App">
      <RouterProvider router={appLayout}/>
    </div>
  );
}

export default App;
