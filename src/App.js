import React from 'react';
import './App.css';
import Footer from './components/Footer';
import SiderBar from './components/SiderBar';
import TopBar from './components/TopBar';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CatalogueFreelance from './pages/CV/CatalogueFreelance';
import NotFound from './components/NotFound';
import CatalogueOffre from './pages/Offre/CatalogueOffre';
import Offre from './pages/Offre/Offre';
import AdminCV from './pages/Admin/AdminCV';
import AdminOffre from './pages/Admin/AdminOffre';
import CvForm from './pages/CV/CvForm';
import CvPostuler from './pages/candidature/CvPostuler';
import OffreForm from './pages/Offre/OffreForm';
import CatalogueCvPostuler from './pages/candidature/CvPostuler';
import Candidature from './pages/candidature/Candidature';


import Home from './components/Home';
import PrivateRoute from './higherOrderComponents/PrivteRoute';
import PublicRoute from './higherOrderComponents/PublicRoute';
import QSN from './components/QSN';
import FAQ from './components/FAQ';
import GetOffre from './pages/Offre/OffreList';
import OffreList from './pages/Offre/OffreList';
import CvAdmin from './pages/Admin/CvAdmin';
import OffreAdmin from './pages/Admin/OffreAdmin';
import UserAdmin from './pages/Admin/UserAdmin';
import Compte from './pages/Compte';
import CandAdmin from './pages/Admin/CandAdmin';
import MyOffre from './pages/Offre/MyOffre';
import CV from './pages/CV/CV';
import UpdateOffreForm from './pages/Offre/UpdateOffreForm ';
import OneOffre from './pages/Offre/OneOffre ';
import esnProfil from './pages/esnProfil';



function App() {
  return (
    <div>
      <Router>


        <TopBar />
        <Switch>
        
        <div class="inner_container">
            <div class="full_container">
          
          <PrivateRoute role={[ "ESN", "admin"]} path="/catalogueFreelance" component={CatalogueFreelance} />
          {/*<PrivateRoute role={[ "freelancer", "client", "ESN", "admin"]} path="/CvPostuler" component={CatalogueCvPostuler} />*/}
          <PrivateRoute role={[ "client", "ESN", "admin"]} path="/candidature" component={Candidature} />
          <PrivateRoute role={["freelancer", "ESN", "admin"]} path="/allOffre" component={OffreList} />
          <PrivateRoute role={[ "client", "ESN", "admin"]} path="/myOffre" component={MyOffre} />
          <PrivateRoute role={[ "ESN", "admin"]} path="/oneOffre" component={OneOffre} />
          <PrivateRoute role={["freelancer", "client", "ESN", "admin"]} path="/offre" component={Offre} />
          <PrivateRoute role={["freelancer",  "ESN", "admin"]} path="/cv" component={CV} />
          <PrivateRoute role={[ "admin"]} path="/CvAdmin" component={CvAdmin} />
          <PrivateRoute role={["client", "ESN", "admin"]} path="/getOffre" component={OffreList} />
          <PrivateRoute role={[  "admin"]} path="/OffreAdmin" component={OffreAdmin} />
          {/*<PrivateRoute role={["freelancer","client", "ESN", "admin"]} path="/Compte" component={Compte} />*/}
          <PrivateRoute role={[ "client","ESN", "admin"]} path="/mesOffre" component={AdminOffre} />
          <PrivateRoute role={[  "admin"]} path="/UserAdmin" component={UserAdmin} />
          <PrivateRoute role={[  "admin"]} path="/CandAdmin" component={CandAdmin} />
          <PrivateRoute role={["freelancer", "ESN", "admin"]} path="/cvForm" component={CvForm} />
          <PrivateRoute role={["freelancer", "ESN", "admin"]} path="/cvPostuler" component={CvPostuler} />
          <PrivateRoute role={[ "ESN", "admin"]} path="/esnProfil" component={esnProfil} />
          <PublicRoute path="/QSN" component={QSN} />
          <PublicRoute path="/FAQ" component={FAQ} />
          <PublicRoute path="/users/search" component={QSN} />
          <PrivateRoute role={["client", "ESN", "admin"]} path="/offreForm" component={OffreForm} /> 
          <PrivateRoute role={[ "client", "ESN", "admin"]} path="/UpdateOffre" component={UpdateOffreForm} /> 
          <Route path="/NotFound" component={NotFound} />
          <PublicRoute path="/login" component={Login} />
          <PublicRoute path="/signUp" component={SignUp} />
          
          <PublicRoute exact path="/" component={Home} />
          {/*<PublicRoute path="/dash" component={Dash} />*/}
          
          
          {/*<PublicRoute path="/" component={Home} />*/}

          { /*<Route path="/login" component={Login} />
          <Route path="/signUp" component={SignUp} />*/}
          {/*
          <Route path="/QSN" component={QSN} />
          <Route path="/FAQ" component={FAQ} />

          <div class="inner_container">
            <div class="full_container">
              <SiderBar />
              <Route path="/SiderBar" component={SiderBar} />
              <Route path="/catalogueFreelance" component={CatalogueFreelance} />
              <Route path="/catalogueCvPostuler" component={CatalogueCvPostuler} />
              <Route path="/candidature" component={Candidature} />
              <Route path="/notFound" component={NotFound} />
              <Route path="/catalogueOffre" component={CatalogueOffre} />
              <Route path="/getOffre" component={GetOffre} />
              <Route path="/offre" component={Offre} />
              <Route path="/adminCV" component={AdminCV} />
              <Route path="/adminOffre" component={AdminOffre} />
              <Route path="/cvForm" component={CvForm} />
              <Route path="/cvPostuler" component={CvPostuler} />
              <Route path="/offreForm" component={OffreForm} />
            </div>
          </div>
        
        <Route path="/Home" component={Home} />*/}
        </div>
          </div>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
