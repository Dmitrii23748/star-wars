import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../../components/Header/Header';
import  routesConfig  from '../../routs/routsConfig'
import styles from './App.module.css';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className={styles.wrapper}>
          <Header/>
          <Switch>
            {
              routesConfig.map( ( { path, exact, component }, index ) => {
                return (
                  <Route
                  path={ path }
                  exact={ exact }
                  component={ component }
                  key={index}
                  />)
              } )
            }
          </Switch>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App;
