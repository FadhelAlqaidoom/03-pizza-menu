import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const pizzaData = [
  {
    name: 'Focaccia',
    ingredients: 'Bread with italian olive oil and rosemary',
    price: 6,
    photoName: 'pizzas/focaccia.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Margherita',
    ingredients: 'Tomato and mozarella',
    price: 10,
    photoName: 'pizzas/margherita.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Spinaci',
    ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
    price: 12,
    photoName: 'pizzas/spinaci.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Funghi',
    ingredients: 'Tomato, mozarella, mushrooms, and onion',
    price: 12,
    photoName: 'pizzas/funghi.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Salamino',
    ingredients: 'Tomato, mozarella, and pepperoni',
    price: 15,
    photoName: 'pizzas/salamino.jpg',
    soldOut: true,
  },
  {
    name: 'Pizza Prosciutto',
    ingredients:
      'Tomato, mozarella, ham, aragula, and burrata cheese',
    price: 18,
    photoName: 'pizzas/prosciutto.jpg',
    soldOut: false,
  },
];

export default function App() {
  return (
    <div className="grid justify-items-center gap-10">
      <div className="">
        <Header />
      </div>

      <div className="">
        <Menu />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

const Header = () => {
  return (
    <header className="text-5xl font-bold text-yellow-500">
      <h1>Fast REACT Pizza Co.</h1>
    </header>
  );
};

const Menu = () => {
  return (
    <main className="grid justify-items-center gap-10">
      <h2 className="text-5xl text-red-500">Our menu</h2>
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1  justify-items-center">
        {pizzaData.map((pizza) => (
          <Pizza
            key={pizza.name}
            name={pizza.name}
            ingredients={pizza.ingredients}
            price={pizza.price}
            photoName={pizza.photoName}
            soldOut={pizza.soldOut}
          />
        ))}
      </div>
    </main>
  );
};

const Pizza = (props) => {
  return (
    <div
      className={`grid gap-4 max-w-2xl h-auto p-20 ${
        props.soldOut ? 'grayscale' : ''
      }`}
    >
      <h1 className="text-4xl font-bold">{props.name}</h1>
      <img
        src={props.photoName}
        alt={props.name}
        className="w-full"
      />
      <p className="text-3xl min-h-[3em] max-h-[3em] overflow-auto">
        {props.ingredients}
      </p>
      <h3 className="text-4xl font-medium">${props.price}</h3>
      {props.soldOut ? (
        <h3 className="text-red-600 text-4xl font-bold">Sold Out!</h3>
      ) : (
        <h3 className="text-green-600 text-4xl">Available</h3>
      )}
    </div>
  );
};

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="text-2xl">
      {isOpen ? (
        <OrderNow />
      ) : (
        <p>
          we're currently close! will back in {(hour - openHour) * -1}{' '}
          hours
        </p>
      )}
    </footer>
  );
  // return React.createElement('footer', null, "we're currently open!");
};

const OrderNow = () => {
  return (
    <button className="h-20 px-12 m-2 text-4xl font-bold text-white transition-colors duration-150 bg-yellow-500 rounded-lg focus:shadow-outline hover:bg-yellow-600">
      Order Now
    </button>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
