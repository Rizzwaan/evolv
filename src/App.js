import './App.css';
import Box from '@material-ui/core/Box';
import HomePage from './pages/home-page/home-page.component';
import BlogPage from './pages/blog-page/blog-page.component';
import AskPage from './pages/ask-page/ask-page.component';
import ErrorPage from './pages/404page/404page.component'
import { Switch, Route, } from 'react-router-dom'
import Header from './components/common/header/header.component'
import Footer from './components/common/footer/footer.component'
function App() {
  return (
    <Box component='div'>
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/blogs">
          <BlogPage />
        </Route>
        <Route path="/ask">
          <AskPage />
        </Route>
        <Route component={ErrorPage} />
      </Switch>
      <Footer />
    </Box>
  );
}

export default App;
