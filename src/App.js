import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom';

import { Header, Footer } from './components/';

import { Home, CityMoscow, CityStPetersburg, CitySochi, Policy } from './pages/';

const App = () => {
	return (
		<>
			<Header />

			<Suspense fallback={() => <></>}>
				<Switch>
					<Route path="/" render={() => <Home />} exact />
					
					<Route path="/moscow" render={() => <CityMoscow />} exact />
					<Route path="/st.petersburg" render={() => <CityStPetersburg />} exact />
					<Route path="/sochi" render={() => <CitySochi />} exact />

					<Route path="/policy" render={() => <Policy />} exact />
				</Switch>
			</Suspense>

			<Footer />
		</>
	);
}

export default App;
