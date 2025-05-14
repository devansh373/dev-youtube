import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Body from './components/Body.jsx'
import MainContainer from './components/MainContainer.jsx'
import WatchPage from './components/WatchPage.jsx'
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
        errorElement: <h1>Page Not Found</h1>,
        children: [
          {
            path: "/",
            element: <MainContainer />,
          },
          {
            // for useParams
            // path: "/watch/:videoId",

            // for useSearchParams
            path: "/watch",
            element: <WatchPage />,
          },
        ],
      },
    ],
  },
  {},
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <RouterProvider router={appRouter}> */}
    <App />
    {/* </RouterProvider> */}
    
  </StrictMode>,
)
