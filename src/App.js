import React, { useEffect, useState } from 'react';
import Header from './components/Homepage/Header';
import Charactergrid from './components/Character/Charactergrid';
import './App.css';
import axios from 'axios';
import Search from './components/Homepage/Search';

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`);

      setItems(result.data)
      setIsLoading(false)
    }
    fetchItems()
  }, [query])

  return (
    <div className="container">
      <Header></Header>
      <Search getQuery={(q) => { setQuery(q) }}></Search>
      <Charactergrid items={items} isLoading={isLoading} ></Charactergrid>
    </div>
  );
}

export default App;
