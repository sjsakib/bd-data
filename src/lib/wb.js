import axios from 'axios';

const wb = axios.create({
	baseURL: 'http://api.worldbank.org/v2/countries/BD/indicators/',
	params: { date: '1990:2018', format: 'json' }
});

export default wb;
