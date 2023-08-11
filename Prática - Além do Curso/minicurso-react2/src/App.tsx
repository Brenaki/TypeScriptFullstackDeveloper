import { LeftBar } from "./components/LeftBar"

export const App = () => {
  return (
    <LeftBar feature={[
      "Dashboard",
      "Compras",
      "Productos",
      "Sair"
    ]}/>
  )
}