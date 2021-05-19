import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import Korisnik from './korisnik';

export default function Naslovna() {
  const Korisnik1={
    username: "OTFab",
    name: "Fabio",
    password:"443",
    
    };

const Korisnik2={
    username: "Kouko",
    name: "Ammar",
    password:"animefan",
    
    };

const Korisnik3={
    username: "Manebuda",
    name: "Mauro",
    password:"funky",
    
    };

const Korisnik4={
    username: "BogIgre",
    name: "Matej",
    password:"gaming",
    
    };

    const Korisnik5={
    username: "Bobo",
    name: "Boban",
    password:"gamingtoo",
    
    };

const Korisnik6={
    username: "tinci",
    name: "Tina",
    password:"edge",
    
    };

  return (
    <div className="App">
      <center>
<h1 class = "biggie">Recenzije</h1>
<div class = "list">
 <Korisnik saljem={Korisnik1} saljem2={Korisnik2} saljem3={Korisnik3} saljem4={Korisnik4} saljem5={Korisnik5} saljem6={Korisnik6}>

 </Korisnik>

 
<br/><br/><br/>

</div>
<footer>
  <div class="blek"> <br/> <br/> <br/><h1 class="copyright">Copyright Reserved F.Z.</h1></div>
</footer>
      </center>
    </div>
  );
}
