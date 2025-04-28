import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function Header() {
  return (
    <header className='header'>
      <h1>Welcome to sliceUp!</h1>
    </header>
  );
}

function Menu() {
  const pizzaLength = pizzaData.length;
  
  return (
    <main className='menu'>
      <h2>Our Menu</h2>

      {pizzaLength > 0 ? 
      <ul className='pizzas'>
        {pizzaData.map((pizza) => {
          return <Pizza key={pizza.name} pizzaObj={pizza}></Pizza>
        })}
      </ul>: 
      <p>
        Sorry no pizzas :( 
      </p>}

    </main>
  );
}

function Pizza(props) {
  return (
    <li className={`pizza ${props.pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h1>{props.pizzaObj.name}</h1>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.soldOut ? "SOLD OUT" : props.pizzaObj.price + '$'} </span>
      </div>
    </li>
  );
}

function Footer() {

  // Write your logic here!
  const currentHour = new Date().getHours();
  const openHour = 9;
  const closedHour = 12;
  let status = "We're currently open";

  if (currentHour >= openHour && currentHour <= closedHour) {
    status = "We're Closed";
  }

  return (
    <footer className='footer'>
      <p>{currentHour} {status}</p>
    </footer>
  );
}



function App() {
  return (
    <div className='container'>
      <Header></Header>
      <Menu></Menu>
      <Footer></Footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);