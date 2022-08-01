import './App.css';
import CardList from './components/CardList';
import Header from './components/Header';


function App() {
  const users = [
    {
      id: 1,
      name:'Omar',
      salary:10
    },
    {
      id: 2,
      name:'Melissa',
      salary:20
    },
    {
      id: 3,
      name:'Sumayya',
      salary:30
    },
    {
      id: 4,
      name:'Fidan',
      salary:50
    }

  ]
  return (
    <div className="App">
    <Header/>
    <CardList userlist={users}/>
    </div>
  );
}

export default App;