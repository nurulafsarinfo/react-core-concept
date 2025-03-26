import Batsman from './Batsman';
import {Suspense} from 'react';
import Users from './Users';
import Friends from './Friends';
import './App.css'



const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())


const fetchFriends = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  return res.json();
}


function App() {

  const friendsPromise = fetchFriends();

  function handleClick(){
    alert('I a clicked.')
  }

  const handleClick3 = () =>{
    alert('Clicked button 3')
  }

  const handleAdd5 = (num) =>{
    const newNum = num + 5;
    alert(newNum);
  }

  return (
    <>
      <h1>Vite + React</h1>


      <Suspense fallback={<p>Data are loading...</p>}>
        <Users fetchUsers = {fetchUsers}></Users>
      </Suspense>

      <Suspense fallback={<h3>Friends Data is Coming...</h3>}>
        <Friends friendsPromise = {friendsPromise}></Friends>
      </Suspense>


      {/* <button onclick="handleClick()">Click me</button> */}

      <Batsman></Batsman>
      {/* way- 1 */}
      <button onClick={handleClick}>Click me</button>
      <br /><br />

      {/* way- 2 */}
      <button onClick={function handleClick2(){
        alert('Clicked 2')
      }}>Click me-2</button>

      {/* way- 3 */}
      <br /><br />
      <button onClick={handleClick3}>Click me button 3</button>

      {/* way- 4 */}
      <br /><br />
      <button onClick = {() => alert('Clicked me 444444')}>click me 4</button> 

      {/* way- 5 */}
      <br /><br />
      <button onClick={() => handleAdd5(122)}>Click and Addd 5</button>
    </>
  )
}

export default App
