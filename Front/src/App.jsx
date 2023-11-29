import AuthLayout from "./layout/AuthLayout.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chat from "./paginas/chat.jsx";
import './App.css'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

function App() {
  return (
    <NextUIProvider>
      <NextThemesProvider
        attribute='class'
        defaultTheme='dark'
        themes={['light', 'dark', 'modern']}
      >
      <DndProvider backend={HTML5Backend}>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AuthLayout />}>
              <Route index element={<Chat />} />
            </Route>
          </Routes>
        </BrowserRouter>

      </DndProvider>
    </NextThemesProvider>
    </NextUIProvider>
  );
}

export default App;
