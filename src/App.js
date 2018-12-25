import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Redirect
} from 'react-router-dom';
import Chart from './Chart';
import indicators from './indicators';

class App extends Component {
  render() {
    return (
      <div className="App ui grid stackable">
        <Router>
          <div className="ui row">
            <div className="twelve wide column">
              <Route
                exact
                path="/"
                render={() => <Redirect to={'/' + indicators[0].id} />}
              />
              {indicators.map(indicator => (
                <Route
                  path={'/' + indicator.id}
                  exact
                  render={() => <Chart {...indicator} />}
                />
              ))}
            </div>
            <div className="four wide column">
              <h1>Indicators</h1>
              <div className="ui middle aligned selection list">
                {indicators.map((indicator, i) => (
                  <NavLink
                    to={'/' + indicator.id}
                    className="item"
                    activeClassName="active"
                    key={indicator.id}>
                    <div className="content">
                      <div className="header">{indicator.name}</div>
                      <div className="description">{indicator.info}</div>
                    </div>
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
