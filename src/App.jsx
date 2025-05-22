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
import ThemeContext from "./context/ThemeContext";

function App() {

  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  const [isDark, setIsDark] = useState(false)
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
    <div className={`${isDark?"dark":""} dark:bg-gray-900 dark:text-white`}>
      <Provider store={store}>
        <ToggleSideBarContext.Provider
          value={{ isSideBarOpen, setIsSideBarOpen }}
        >
          <ThemeContext.Provider value={{ isDark, setIsDark}}>
          <Header />
          <RouterProvider router={appRouter} />
          </ThemeContext.Provider>
        </ToggleSideBarContext.Provider>
      </Provider>
    </div>
  );
}

export default App;
