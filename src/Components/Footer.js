import React from 'react'
import { Container } from 'react-bootstrap'


const Footer = (props) => {
  return(
  <div className="footer mt-5 pt-4">
        <Container >
        <div className="d-flex justify-content-around ">
        <div >
            <h6>À PROPOS</h6>
            <a href="vv">Fonctionnement d'Airbnb</a> <br/>
            <a href="vv">Newsroom</a> <br/>
            <a href="vv">Investisseurs</a><br/>
            <a href="vv">Airbnb Plus</a><br/>
            <a href="vv">Airbnb Luxe</a><br/>
            <a href="vv">HotelTonight</a><br/>
            <a href="vv">Airbnb for Work</a><br/>
            <a href="vv">C'est possible, grâce aux hôtes</a><br/>
            <a href="vv">Carrières</a><br/>
            <a href="vv">Lettre des fondateursq</a>
            
        </div>
        <div >
            <h6>COMMUNAUTÉ</h6>
        <a href="vv"> Diversité et intégration</a> <br/>
        <a href="vv">Accessibilité</a><br/>
        <a href="vv">Partenaires Airbnb</a><br/>
        <a href="vv">Logements d'urgence</a><br/>
        <a href="vv">Parrainage de voyageurs</a><br/>
        <a href="vv">Accessibilité</a><br/>
        <a href="vv">Airbnb.org</a>
        </div>
      
        <div >
            <h6>HÔTE</h6>
        <a href="nn">Héberger des voyageurs</a><br/>
        <a href="nn">Organiser une expérience en ligne</a><br/>
        <a href="nn">Organiser une expérience</a><br/>
        <a href="nn">Accueil responsable</a><br/>
        <a href="nn">Centre de ressources</a><br/>
        <a href="nn">Community Center</a>
        </div>
       
        <div >
            <h6>ASSISTANCE</h6>
        <a href="jjj"> Nos mesures face au COVID-19</a>
        <a href="nnn">Centre d'aide</a><br/>
        <a href="nn">Options d'annulation</a><br/>
        <a href="nn">Service d'aide aux voisins</a><br/>
        <a href="nn">Confiance et sécurité</a>
        </div>
    </div>
    <hr/>
    <div className="d-flex justify-content-between">
       <div>
       <p>© 2021 Airbnb, Inc.</p>
        <div className="d-flex ">
    
    <a href="nn">Confidentialité·</a>
    <a href="nn">Conditions générales·</a>
    <a href="nn">Plan du site·</a>
    <a href="nn">Fonctionnement du site·</a>
    <a href="nn">Infos sur l'entreprise</a>
    </div>
       </div>
        <div className="d-flex justify-content-around">
            <i class="fas fa-globe  mt-3 ml-3"></i>
            <a className="mb-2 ml-2"  href="jjj">Francais (FR)</a>
            <i class="fas fa-euro-sign  mt-3 ml-3"></i>
            <a  className="mb-2 ml-2" href="jjj">EUR</a>
            <i class="fab fa-facebook-f  mt-3 ml-3"></i>
            <i class="fab fa-twitter mt-3  ml-3"></i>
            <i class="fab fa-instagram  mt-3 ml-3"></i>

        </div>
    </div>
    
    </Container>
  </div>
   )

 }

export default Footer