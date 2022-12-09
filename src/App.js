import React, { useState , useEffect} from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Cards from "./components/Cards/Cards.jsx";
import Detail from "./components/Detail/Detail";
import Nav from "./components/Nav/Nav.jsx";
import Form from "./components/Form/Form";

function App() {
  //   const example = {
  //     name: 'Morty Smith',
  //     species: 'Human',
  //     gender: 'Male',
  //     image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
  //  };
  const location = useLocation();

  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const navigate = useNavigate();
  const username = "admin001@gmail.com";
  const password = "12345abc";
  function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate("/home");
    }
    else {
      alert("Incorrect username and password")
    }
  }
  function logout(){
    setAccess(false)
  }
  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  }
  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };
  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  return (
    <div>
      {location.pathname !== "/" && <Nav onSearch={onSearch} logout={logout}/>}

      <div style={{ padding: "25px" }}>
        <Routes>
          <Route path="/" element={<Form login={login}/>} />
          <Route
            path="/home"
            element={<Cards characters={characters} onClose={onClose} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/detail/:detailId" element={<Detail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
