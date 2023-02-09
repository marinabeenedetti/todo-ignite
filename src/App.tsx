import { Header } from './components/Header'
import style from './App.module.css'
import { NewTask } from './components/NewTask'

function App() {

  return (
    <div className='App'>
      <Header/>

      <main className={style.main}>
        < NewTask/>
      </main>
    </div>
    
  )
}

export default App
