import { createMuiTheme } from "@material-ui/core/styles";

const mushaBlue = "#0033A1";
const mushaOrange = "#FFBA60";

const theme = createMuiTheme({
	palette: {
		type: "light",
		common: {
			red: `${mushaBlue}`,
			orange: `${mushaOrange}`,
		},
		primary: {
			main: `${mushaBlue}`,
		},
		secondary: {
			main: `${mushaOrange}`,
		},
	},
	typography: {
		tab: {
			fontFamily: "Raleway",
			textTransform: "none",
			fontWeight: "700",
			fontSize: "1rem",
		},
	},
});
export default theme;
