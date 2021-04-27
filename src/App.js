import './App.css';
import Explore from './Components/Explore';
import "./Components/Css/style.css"
import Header from './Components/Navbar';
import CompanyParent from './Components/compagnie/CompanyParent';
import { Container } from 'react-bootstrap';
import ExperienceParent from './Components/Experience/ExperienceParent';

function App() {
  return (

    <div className="App ">
      <Header/>
      <Container>
      <h1 className="explorer">Explorez les environs</h1>
      <Explore/>
      <h1 className="explorer">Chez vous, partout</h1>
      <CompanyParent/>
      
  
  <div className="hote pl-5 mt-5">
         <h1 className="pt-5">Devenez hôte</h1>
         <p>Gagnez un revenu complémentaire <br/> et saisissez de nouvelles opportunités en louant
          <br/> votre logement.</p>
         <button className="btn btn-savoir mt-3">En savoir plus</button>
       </div>
       <h1 className="mt-5">Découvrez les expériences</h1>
       <span>Des activités uniques avec des experts locaux, en personne ou en ligne.</span>
 
 <ExperienceParent/>
  </Container>
     
    </div>
  );
}

export default App;
