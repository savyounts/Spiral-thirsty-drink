import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useState, useEffect } from 'react';
import ListItem from '../components/ListItem';

const Home: NextPage = () => {
  const [value, setValue] = useState('');
  const [drinks, setDrinks] = useState([]);
  useEffect(() => {

  }, []);

  const searchDrink = (term) => {
    setValue(term)
    if (term) {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${term}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        data.drinks && setDrinks(data.drinks);
      })
    } else {
      setDrinks([])
    }
  }
  console.log(value);
  return (
    <div className={styles.container}>
      <Head>
        <title>Thirsty Drinks</title>
        <meta name="description" content="Find your drink" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Hope you're thirsty!
        </h1>

          <div style={searchStyles}>
            <input style={inputStyles} placeholder='Find a drink' type='text' value={value} onChange={e => searchDrink(e.target.value)}/>
            <button style={xStyles} onClick={() => searchDrink('')}>x</button>
          </div>
          <ul>
            { drinks.map(d => <ListItem key={d.idDrink} name={d.strDrink} image={d.strDrinkThumb} details={d}/>)}
          </ul>

      </main>
    </div>
  )
}
const searchStyles = {
  border: '1px solid gray',
  width: 250,
  display: 'flex',
  justifyContent: 'space-between',
  padding: 5,
  borderRadius: 5,
  margin: '1em auto',

}
const xStyles = {
  borderRadius: 50,
  backgroundColor: 'gray',
  color: 'white',
  border: 'none',
  width: 15,
  height: 15,
};

const inputStyles = {
  border: 'none',
  outline: 'none',
  width: 225
}
export default Home
