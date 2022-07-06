import { useEffect, useState } from 'react';
import logo from './logo_allen.png';
import axios from "axios";
import './App.css';
import DataVisualization from "./components/DataVisualization";

function App() {
  const [repoData, getRepoData] = useState('');

  useEffect(() => {
    getAllRepoData();
  }, []);

  // Pulls new data from Allen Institute Github API on site load
  const getAllRepoData = () => {
    const apiKey = process.env.REACT_APP_GIT_API_KEY;

    axios
    .get(`https://api.github.com/users/AllenInstitute/repos?per_page=100`, {
          headers: {
            'Authorization': `${apiKey}`
          }
    })
    .then((response) => {
      getRepoData(response.data);
    }).catch((err) => {
      console.log(err.data);
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <DataVisualization data={ repoData } />
      
    </div>
  );
}

export default App;
