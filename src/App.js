import "./App.css";
import { useStyles } from './useStyles'
import Header from "./Components/Header";
import ContentHeader from "./Components/ContentHeader";
import ContentBody from "./Components/ContentBody";
import Footer from "./Components/Footer";

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <Header/>
      <main>
        <ContentHeader/>
        <ContentBody/>
      </main>
      <Footer/>
    </div>
  );
};

export default App;
