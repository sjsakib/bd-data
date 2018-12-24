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
          <div className="twelve wide column">
            <Chart
              {...indicator}
            />
          </div>
          <div className="four wide column">
            <h1>Indicators</h1>
            <div className="ui middle aligned selection list">
              {indicators.map((indicator, i) => (
                <div
                  className={`item ${i === current ? 'active' : ''}`}
                  key={indicator.id}
                  onClick={() => this.setState({ currentIndicator: i })}>
                  <div className="content">
                    <div className="header">{indicator.name}</div>
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
