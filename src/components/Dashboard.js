import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";
import Linechart from "./charts/Linechart";
import Barchart from "./charts/Barchart";
import Piechart from "./charts/Piechart";
import DataTable from "./charts/DataTable";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(3),
		textAlign: "center",
		background: "light",
	},
}));

const Dashboard = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Grid container direction="column" spacing={3}>
				<Grid item xs={12}>
					<Paper className={classes.paper}>Dashboard Heading comes here</Paper>
				</Grid>
				<Grid item container spacing={3}>
					<Grid item xs={12} sm={4}>
						<Paper className={classes.paper}>
							<Barchart />
						</Paper>
					</Grid>
					<Grid item xs={12} sm={4}>
						<Paper className={classes.paper}>
							<Piechart />
						</Paper>
					</Grid>
					<Grid item xs={12} sm={4}>
						<Paper className={classes.paper}>
							<Linechart />
						</Paper>
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<Paper className={classes.paper}>
						<DataTable />
					</Paper>
				</Grid>
			</Grid>
		</div>
	);
};

export default Dashboard;
