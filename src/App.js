import data from './data/data.json';

const firstNames = data.map((obj) => {
  return obj.first_name;
});

const lastNames = data.map((obj) => {
  return obj.last_name;
});
console.log(firstNames);

function App() {
  return (
    <div className='App'>
      <div>
        <h1>{firstNames}</h1>
        <h2>{lastNames}</h2>
      </div>
    </div>
  );
}

export default App;
