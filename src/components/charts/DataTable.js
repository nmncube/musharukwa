import React from "react";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import { Paper, makeStyles, TableContainer } from "@material-ui/core";

const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
});

const DataTable = () => {
	const useStyles = makeStyles();
	return (
		<Table>
			<TableHead>
				<TableRow>
					<TableCell>Institution</TableCell>
					<TableCell>Enrolment</TableCell>
					<TableCell>Male</TableCell>
					<TableCell>Female</TableCell>
					<TableCell>Graduation</TableCell>
				</TableRow>
			</TableHead>
		</Table>
	);
};

export default DataTable;
