import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const nayoks = ['Jafor', "Sakib", "Salman", "Bappi", "Shuvo"]
  const products = [
    { name: 'Photoshop', price: '$90.99' },
    { name: 'Illustrator', price: '$60.99' },
    { name: 'PDF Reader', price: '$9.99' },
    { name: 'Premier Pro', price: '$249.99' }

  ]

  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p>
        <Counter />
        <Users />
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.price}</li>)
          }
        </ul>
        {
          products.map(pd => <Product product={pd} />)
        }
        <Person name="Munna" job="Footballer" />
        <Person name="Masum" job="Dorshok" />
      </header>
    </div>
  );
}
function Users(){
  const [users, setUsers] = useState([])
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(data=> {
      console.log(data)
      setUsers(data)
    })
  }, [])
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user=> <li>{user.company.catchPhrase}</li>)
        }
      </ul>
    </div>
  )
}





function Counter() {
  const [count, setCount] = useState(10)

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onMouseMove={() => setCount(count - 1)}>Decrease</button>
      <button onMouseMove={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

function Product(props) {
  const productStyle = {
    border: "1px solid gray",
    borderRadius: "5px",
    backgroundColor: "lightgray",
    height: "200px",
    width: "200px",
    float: "left"
  }

  const { name, price } = props.product

  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h4>{price}</h4>
      <button>Buy Now</button>
    </div>
  )
}

function Person(props) {
  return (
    <div style={{ border: "2px solid blue", width: "400px", margin: "10px" }}>
      <h1>Name: {props.name}</h1>
      <h3>Profession :{props.job}</h3>
    </div>
  )
}
export default App;
