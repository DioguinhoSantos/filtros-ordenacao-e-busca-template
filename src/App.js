import React from "react";
import { GlobalStyle, CardsContainer } from "./GlobalStyle";
import pokemons from "./pokemon/pokemon.json";
import PokemonCard from "./components/PokemonCard/PokemonCard";
import { getColors } from "./utils/ReturnCardColor";
import Header from "./components/Header/Header.js";
import { useState } from "react";


function App() {

  const [id, setid] = useState('');
  const [nome, setNome] = useState('');

  const recebeid = (e) => {
    setid(e.target.value);
  }

  const recebeNome = (e) => {
    setNome(e.target.value);
  }

  return (
    <>
      <GlobalStyle />
      <Header 
        id={id} 
        recebeid={recebeid}
        nome={nome}
        recebeNome={recebeNome}
        />
      <CardsContainer>
        {pokemons
        
        .filter((pokemon) => {
          return pokemon.id.includes(id)
        })

        .filter((pokemon) => {
          return pokemon.name.english.toLowerCase().includes(nome.toLowerCase())
        })
        
        .map((pokemon) => {
          return <PokemonCard
          cardColor={getColors(pokemon.type[0])}
          key={pokemon.id}
          pokemon={pokemon}
        />
        })}
      </CardsContainer>
    </>
  );
}

export default App;
