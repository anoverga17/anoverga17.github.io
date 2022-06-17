import './App.css';

function App() {
  return (
    <div id="main-app">
      <h1>Gabriel Anover</h1>
      <body>
        Hello! This is my website. As you can see, it is still currently under construction.<br/>
        I am currently an undergraduate student at the University of Toronto studying Computer Science.
      </body>
      <img
        className='image' 
        src={process.env.PUBLIC_URL + '/images/gabriel-1.jpg'}
        alt="An image of me"
      />
    </div>
  );
}

export default App;
