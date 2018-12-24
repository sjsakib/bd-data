import axios from 'axios';

const wb = axios.create({
	baseURL: 'https://api.worldbank.org/v2/countries/BD/indicators/',
	params: { date: '1990:2018', format: 'json' }
});

export default wb;
