import logo from './logo.svg';
import './App.css';
import './css/base.css'
import './css/main.css'
import './css/vendor.css'
import SiteHeader from './components/site-header/siteheader';
import Intro from './components/pages/introPage/intro';
import AboutMe from './components/pages/aboutMePage/aboutme';

function App() {
  return (
    <div className="App">
      <SiteHeader></SiteHeader>
      <Intro></Intro>
      <AboutMe></AboutMe>
    </div>
  );
}

export default App;
