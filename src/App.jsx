import { useState } from 'react'

const userData =[
  {
    name:"John",
    age:20,
    city:"new York"
  },
  {
    name:"Amit",
    age:25,
    city:"New Delhi"
  },
  {
    name:"Jp Nadda",
    age:30,
    city:"Prayagraj"
  },
  {
    name:"Amit Shah",
    age:75,
    city:"Gujrat"
  }
]


function App() {
  const[index ,setIndex] = useState(0)
  function next(){
    setIndex(index+1)
  }
  function previous(){
    setIndex(index-1)
  }


  return (
    <>
  <div>
    
  <p>Name:{userData[index].name}</p>
  <p>Age:{userData[index].age}</p>
  <p>City:{userData[index].city}</p>
  </div>
  <button disabled={index==0} onClick={previous}> Previous User</button>
  <button disabled={index== userData.length - 1} onClick={next}>Next User</button>
  
    </>
  )
}

export default App
