import { useState } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GlobalStyle from "./lib/GlobalStyle";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Play from "./pages/Play";
import MyList from "./pages/MyList";

import { movies } from "./dummydata/dummyDatas";

const Container = styled.div`
  display: block;
  width: 100%;
  height: 100vh;
`;

function App() {
  const [movieList, setMovieList] = useState(movies);
  const [myList, setMyList] = useState([]);

  return (
    <Container>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/login" component={Login} />
          <Route
            path="/main"
            render={() => (
              <Main
                movieList={movieList}
                myList={myList}
                setMyList={setMyList}
              />
            )}
          />
          <Route path="/play" component={Play} />
          <Route
            path="/mylist"
            render={() => (
              <MyList
                movieList={movieList}
                myList={myList}
                setMyList={setMyList}
              />
            )}
          />
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
