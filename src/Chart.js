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
import FacebookProvider, { Comments, Like } from 'react-facebook-sdk';
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
    const { name, info, negative, id } = this.props;
    return (
      <div className="chart">
        <h1>{name}</h1>
        <div className="chart-container">
          <LineChart width={700} height={400} data={this.state.data}>
            <Line
              connectNulls={true}
              type="monotone"
              dataKey="value"
              stroke={negative ? 'red' : 'green'}
            />
            <CartesianGrid stroke="#ccc" vertical={false} />
            <ReferenceLine x="1991" stroke="blue" />
            <ReferenceLine x="1996" stroke="blue" />
            <ReferenceLine x="2001" stroke="blue" />
            <ReferenceLine x="2006" stroke="blue" />
            <ReferenceLine x="2009" stroke="blue" />
            <XAxis dataKey="date" />
            <YAxis
              dataKey="value"
              tickFormatter={v => numeral(v).format('0.0a')}
            />
            <Tooltip />
          </LineChart>
        </div>
        <p>
          {info} (<a
            href={`https://data.worldbank.org/indicator/${id}?locations=BD&view=chart`}>
            সোর্স
          </a>)
        </p>
        <div className="fb">
        <FacebookProvider appId="162637991074423">
          <Like href={'https://bddata.netlify.com/' + id} showCount share />
          <Comments
            href={'https://bddata.netlify.com/' + id}
            orderBy="social"
          />
        </FacebookProvider>
        </div>
      </div>
    );
  }
}

export default Chart;
