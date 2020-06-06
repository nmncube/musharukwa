import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Paper } from "@material-ui/core";

import Header from "./navigation/Header";
import LandingPage from "./components/LandingPage";
import Dashboard from "./components/Dashboard";
import DataPage from "./components/DataPage";

function App() {
	return (
		<React.Fragment>
			<Paper style={{ height: "100vh" }}>
				<Router>
					<Header />
					<Switch>
						<Route exact path="/" component={LandingPage} />
						<Route exact path="/dashboard" component={Dashboard} />
						<Route exact path="/data" component={DataPage} />
						<Route exact path="/institutions" component={() => <div>Insitutions</div>} />
						<Route exact path="/programmes" component={() => <div>Programmes</div>} />
						<Route exact path="/login" component={() => <div>Login</div>} />
					</Switch>
				</Router>
			</Paper>
		</React.Fragment>
	);
}

export default App;
