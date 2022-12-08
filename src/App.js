import React from 'react';
import Header from './Components/Header/Header';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  redirect,
  Link,
} from 'react-router-dom';

import Login from './Components/Login/Login';
import Hero from './Components/Hero/Hero';
import Cover from './Cover';

import CoughColdFlue from './Components/Categorie/Cough-Cold-Flu/CoughColdFlue';
import BracesSupport from './Components/Categorie/Braces-Support/BracesSupport';
import AllergyAsthma from './Components/Categorie/Allergy-Asthma/AllergyAsthma';
import DigestiveHealth from './Components/Categorie/Digestive-Health/DigestiveHealth';
//import CategoriesName from './Components/Hero/CategoriesName';
import FirstAide from './Components/Categorie/First-Aid/FirstAid';

/*const CategoriesPaths = () => {
  CategoriesName.map((category) => {
    return category.path, category.componentName;
  });
};
const CategoriesComponents = () => {
  CategoriesName.map((category) => {
    const componentName = category.componentName;
    return <componentName />;
  });
};*/

//const navigate = useNavigate();

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route path="/" exact element={<Cover />} />
          <Route path="/login" element={<Login />} />
          <Route path="/categories" element={<Hero />} />
          <Route path="/cough-cold-flu" element={<CoughColdFlue />} />
          <Route path="/braces-supports" element={<BracesSupport />} />
          <Route path="/allergy-asthma" element={<AllergyAsthma />} />
          <Route path="digestive-health" element={<DigestiveHealth />} />
          <Route path="/first-aid" element={<FirstAide />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
