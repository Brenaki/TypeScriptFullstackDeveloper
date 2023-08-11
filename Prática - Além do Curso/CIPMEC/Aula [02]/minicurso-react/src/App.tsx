import { Title } from "./components/Title"

export const App = () => {
  return (
  <div className="bg-gray-900">
    <h1 className='text-indigo-600 font-bold text-4xl'>Hello World!</h1>
    <Title text="Selecione seu plano"/>
    <Title text="Informe seu email"/>
  </div>
  )
}