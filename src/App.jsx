
import './App.css'
import Navigation from './Components/Navigation-bar/Navigation'
import Hero from './Components/Hero-section/Hero'
import CustomerTickets from './Components/CustomerTickets/CustomerTickets'
import { Suspense } from 'react'

// customer data load 
const customarData = fetch('/customarData.json')
.then(res => res.json()) //get promise 

function App() {
  

  return (
    
     <div className='p-3'>
      {/* Navigation  */}
       <Navigation></Navigation>

       {/* hero section  */}
       <Hero></Hero>

       {/* body  */}
       
          <Suspense fallback={<p>data is Loading</p>}>
            <CustomerTickets customarData={customarData}></CustomerTickets>
          </Suspense>
      

     </div>
  
    
  )
}

export default App
