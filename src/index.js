import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { StripeProvider } from 'react-stripe-elements';
// auth0
import auth from './global/components/Auth/Auth';
require('dotenv').config();

const getToken = () => {
	let token = localStorage.getItem('token');
	return token ? `Bearer ${token}` : '';
};

const stripeKey = process.env.REACT_APP_STRIPE_KEY || 'stripe';

const cache = new InMemoryCache();

const client = new ApolloClient({
	//https://quality-hub-gateway-staging.herokuapp.com/
	// uri: 'https://quality-hub-gateway-staging.herokuapp.com/',
	uri: 'http://localhost:5500',
	request: operation => {
		operation.setContext(context => ({
			headers: {
				...context.headers,
				Authorization: auth.getIdToken(),
			},
		}));
	},
	cache,
	resolvers: {},
});

cache.writeData({
	data: {
		isLoggedIn: !!localStorage.getItem('token'), // Logic needs update
		isCoach: false, // Needs update
	},
});

ReactDOM.render(
	<ApolloProvider client={client}>
		<StripeProvider apiKey={stripeKey}>
			<Router>
				<App />
			</Router>
		</StripeProvider>
	</ApolloProvider>,
	document.getElementById('root'),
);
