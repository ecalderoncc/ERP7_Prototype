import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from '@material-ui/core';

import SnackBar from './components/SnackBar';
import AdminPanel from './views/AdminPanel';
import LoginPage from './views/LoginPage';
import './App.css';

let theme = createTheme({
  palette: {
    primary: {
      main: '#035A8D',
    },
  },
});
theme = responsiveFontSizes(theme);

function App() {
  //const dispatch = useDispatch();
  const userReducer = useSelector((state) => state.userReducer);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route
            exact
            path="/login"
            render={() =>
              userReducer.currentUser ? (
                <Redirect to="/dashboard" />
              ) : (
                <LoginPage />
              )
            }
          />
          <Route
            render={() =>
              userReducer.currentUser ? (
                <AdminPanel />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
        </Switch>
      </Router>
      <SnackBar />
    </ThemeProvider>
  );
}

export default App;
