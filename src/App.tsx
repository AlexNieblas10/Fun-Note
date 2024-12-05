import { Piano } from './components/Piano'
import { SheetMusic } from './components/SheetMusic'
import { GlobalProvider } from './context/GlobalProvider'

function App() {
  return (
    <GlobalProvider>
      <main className='flex flex-col items-center w-full'>
        <SheetMusic />
        <Piano />
      </main>
    </GlobalProvider>
  )
}

export default App
