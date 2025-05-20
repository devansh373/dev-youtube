import { useEffect, useState } from "react";
import Body from "./components/Body";
import Header from "./components/Header";
import { ToggleSideBarContext } from "./context/SidebarContext";
import { Provider, useDispatch } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import { openMenu } from "./utils/appSlice";

function App() {

  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  const appRouter = createBrowserRouter([{
    path: "/",
    element: <Body />,
    errorElement: <h1>Page Not Found</h1>,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },{
        // for useParams
        // path: "/watch/:videoId",

        // for useSearchParams
        path: "/watch",
        element:<WatchPage />,
      }]
  }, {}]);

  return (
    <>
      <Provider store={store}>
        <ToggleSideBarContext.Provider
          value={{ isSideBarOpen, setIsSideBarOpen }}
        >
          <Header />
          <RouterProvider router={appRouter} />
        </ToggleSideBarContext.Provider>
      </Provider>
    </>
  );
}

export default App;
