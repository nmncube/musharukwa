import React, { useReducer, useEffect } from "react";
import { DataTable } from "primereact/components/datatable/DataTable";
import { Column } from "primereact/column";
import institutions from "./Institutions.json";
import classNames from "classnames";

const init = (initialState) => initialState;

const reducer = (state, action) => {
	switch (action.type) {
		case "dataLoaded":
			return {
				...state,
				results: action.payload,
				loading: false,
			};
		default:
			throw new Error();
	}
};

const InstitutionTable = () => {
	const initialState = {
		results: [],
		loading: true,
	};

	const [state, dispatch] = useReducer(reducer, initialState, init);
	const { results, loading } = state;

	useEffect(() => {
		if (loading) {
			dispatch({ type: "dataLoaded", payload: institutions.data });
		}
	}, [loading]);

	return (
		<div>
			<DataTable value={results}>
				<Column field="name" header="Name" />
				<Column field="applications" header="Applications" />
				<Column field="enrolment" header="Enrolment" />
				<Column field="graduation" header="Graduation" />
				<Column field="male" header="Male" />
				<Column field="female" header="Female" />
			</DataTable>
		</div>
	);
};

export default InstitutionTable;
