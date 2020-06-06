import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/ToolBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

import logo from "../assets/logozimche.jpg";

const useStyles = makeStyles((theme) => ({
	toolbarMargin: {
		...theme.mixins.toolbar,
		marginBottom: "0.2em",
	},
	logo: {
		height: "5em",
	},
	logoContainer: {
		padding: 0,
		"&:hover": {
			backgroundColor: "transparent",
		},
	},
	tabContainer: {
		marginLeft: "auto",
	},
	tab: {
		...theme.typography.tab,
		minWidth: 10,
		marginLeft: "20px",
	},
}));

const Header = (props) => {
	const classes = useStyles();
	const [value, setValue] = useState(0);
	const handleChange = (e, value) => {
		setValue(value);
	};

	useEffect(() => {
		if (window.location.pathname === "/" && value !== 0) {
			setValue(0);
		} else if (window.location.pathname === "/dashboard" && value !== 1) {
			setValue(1);
		} else if (window.location.pathname === "/data" && value !== 2) {
			setValue(2);
		} else if (window.location.pathname === "/institutions" && value !== 3) {
			setValue(3);
		} else if (window.location.pathname === "/programmes" && value !== 4) {
			setValue(4);
		} else if (window.location.pathname === "/login" && value !== 5) {
			setValue(5);
		}
	}, [value]);
	return (
		<React.Fragment>
			<AppBar position="fixed" color="primary">
				<Toolbar disableGutters>
					<Button
						component={Link}
						to="/"
						disableRipple
						onClick={() => setValue(0)}
						className={classes.logoContainer}>
						MUSHARUKWA
					</Button>
					<Tabs
						value={value}
						onChange={handleChange}
						className={classes.tabContainer}
						indicatorColor="primary">
						<Tab className={classes.tab} component={Link} to="/" label="Home" />
						<Tab className={classes.tab} component={Link} to="/dashboard" label="Dashboard" />
						<Tab className={classes.tab} component={Link} to="/data" label="Data" />
						<Tab className={classes.tab} component={Link} to="/institutions" label="Institutions" />
						<Tab className={classes.tab} component={Link} to="/programmes" label="Programmes" />
						<Tab className={classes.tab} component={Link} to="/login" label="Login" />
					</Tabs>
				</Toolbar>
			</AppBar>
			<div className={classes.toolbarMargin} />
		</React.Fragment>
	);
};

export default Header;
