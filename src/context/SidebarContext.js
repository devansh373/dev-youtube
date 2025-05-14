// One way
import { createContext } from "react";

export const ToggleSideBarContext = createContext();

// Another way
// import { createContext, useContext, useState } from 'react';

// export const SidebarContext = createContext();

// export function SidebarProvider({ children }) {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => setIsSidebarOpen(prev => !prev);

//   return (
//     <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
//       {children}
//     </SidebarContext.Provider>
//   );
// }


