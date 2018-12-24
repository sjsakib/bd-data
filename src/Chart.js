import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ReferenceLine
} from 'recharts';
import numeral from 'numeral';
import wb from './lib/wb';

class Chart extends React.Component {
  state = { data: [] };

  update() {
    // this.setState({data: []});
    wb.get(this.props.id).then(res => {
      this.setState({ data: res.data[1].reverse() });
    });
  }

  componentDidMount() {
    this.update();
  }

  componentDidUpdate(prevProp) {
    if (prevProp.id !== this.props.id) {
      this.update();
    }
  }

  render() {
    const { name, info } = this.props;
    return (
      <div className="chart">
        <h1>{name}</h1>
        <LineChart width={700} height={400} data={this.state.data}>
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" vertical={false} />
          <ReferenceLine x="1991" stroke="green" />
          <ReferenceLine x="1996" stroke="green" />
          <ReferenceLine x="2001" stroke="green" />
          <ReferenceLine x="2006" stroke="green" />
          <ReferenceLine x="2009" stroke="green" />
          <XAxis dataKey="date" />
          <YAxis dataKey="value" tickFormatter={(v) => numeral(v).format('0.0a') }/>
          <Tooltip />
        </LineChart>
        <p>{info}</p>
      </div>
    );
  }
}

export default Chart;
