
import './App.css'
import Navigation from './Components/Navigation-bar/Navigation'
import Hero from './Components/Hero-section/Hero'
import CustomerTickets from './Components/CustomerTickets/CustomerTickets'
import { Suspense, useState } from 'react'
import TaskStatus from './Components/TaskStatus/TaskStatus'

// customer data load 
const customarData = fetch('/customarData.json')
.then(res => res.json()) //get promise 

function App() {
  // card click to in-progress +++ 
const [Progress,setProgress] = useState([])
console.log(Progress)
  return (
    
     <div className='p-3'>
      {/* Navigation  */}
       <Navigation></Navigation>

       {/* hero section  */}
       <Hero Progress={Progress}></Hero>

       {/* body  */}
       
          <div className='flex gap-5 lg:max-w-9/12 mx-auto'>
            <Suspense fallback={<p>data is Loading</p>}>
            <CustomerTickets Progress={Progress} setProgress={setProgress} customarData={customarData}></CustomerTickets>
          </Suspense>

          <TaskStatus Progress={Progress}></TaskStatus>
          </div>
      

     </div>
  
    
  )
}

export default App
