import React, { Component } from 'react';
import Chart from './Chart';
import indicators from './indicators';

class App extends Component {
  state = { currentIndicator: 0 };
  render() {
    const current = this.state.currentIndicator;
    const indicator = indicators[current];
    return (
      <div className="App ui grid stackable">
        <div className="ui row">
          <div className="eleven wide column">
            <Chart
              info={indicator.info}
              name={indicator.name}
              id={indicator.id}
            />
          </div>
          <div className="five wide column">
            <h1>More indicators</h1>
            <div className="ui middle aligned selection list">
              {indicators.map((indicator, i) => (
                <div
                  className={`item ${i === current ? 'active' : ''}`}
                  key={indicator.id}
                  onClick={() => this.setState({ currentIndicator: i })}>
                  <div className="content">
                    <h3 className="header">{indicator.name}</h3>
                    <div className="description">{indicator.info}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
