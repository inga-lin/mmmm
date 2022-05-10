import { useEffect, useState } from "react";
import axios from 'axios';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import movie from "../img/movie.svg"
import MovieList from "./MovieList";

function Filmai(){


    const [users, setUsers] = useState([]);//movielist
    const [inputText, setInputText] = useState('');
    const [clickMove, setClickMove] = useState();//cia apsirasom kad kai paspaudziam filma ji viena atvaizduotu
    

    useEffect(() => {
      if (inputText.length > 1  ) { //nuo 3raidziu prades rodyti filma
        //per cia gaunam info apie filmus
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=13e0bada9ae6d703bc0c36703e5628fa&language=en-US&query=${inputText}`)
        .then(res => {
            console.log(res.data);
            setUsers(res.data.results);
            
        });
      }
    },[inputText]);

   const handeleImputChange = (e) => {
    const searchWord = e.target.value;
       setInputText(searchWord)
      //console.log(setInputText);

  const newFilter = users.filter((value) => {
    return value.title.toLowerCase().includes(searchWord.toLowerCase());
  });
  //jeigu istrinsim jieskoma zodi uzsidarys lentele
  if (searchWord === "") {
    setUsers([]);
  } else {
    setUsers(newFilter);
  }
};


//cia apsirasom kad kai paspaudziam filma ji viena atvaizduotu
const heandelSelect = (value) => {
  setClickMove(value)

}

//cia apsirasom kad kai paspaudziam filma ji viena atvaizduotu
const clearInput = () => {
  setUsers([]);
  setInputText("");
};
///////
////

    return (

        <>
            <div className="search">
                <div className="searchInputs">
                   <input type="text" style={{ color:'white'}} placeholder="              filmu paieska" value={inputText} onChange={(e) => handeleImputChange(e)}>
                   </input>
                   <img className="movie" style={{ width: "45px", height: "45px", color:'red' }} src={movie} alt="movie"></img>
                   <div className="searchIcon">
                     {users.length === 0 ? ( <SearchIcon></SearchIcon>) : (<CloseIcon id="clearBtn" onClick={clearInput} />)}
                   </div>
                </div>
                {users.length !== 0 && (
                <div className="dataResult">
                {users.slice(0, 8).map((value) => {
                    return (
                    <div className="dataItem2" >
                    <li className="dataItem" onClick={() => heandelSelect(value) } filmai={users}>
                       <h3>{value.title} </h3>
                       <p>{value.vote_average} Rating, {value.release_date.substring(0,4)}</p>
                    </li>
                    </div>
                    );
                     })}
                </div>
                )}
                {/*//cia apsirasom kad kai paspaudziam filma ji viena atvaizduotu*/}
               {clickMove && <MovieList className="MovieList" filmas={clickMove}></MovieList> }
            </div> 
        </>
    )
}

export default Filmai;

/*{clickMove && <MovieList className="MovieList" filmas={clickMove}></MovieList>}*/
/*
terminale instaliuoti - https://mui.com/material-ui/getting-started/installation/
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material
ir package.json atsiras papildomai:
      "dependencies": {
    "@emotion/react": "^11.9.0",
    "@emotion/styled": "^11.8.1",
    "@mui/icons-material": "^5.6.2",
    "@mui/material": "^5.7.0",
ikonu pasirinkimas -https://mui.com/material-ui/material-icons/?theme=Outlined
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
*/