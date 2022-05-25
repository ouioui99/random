import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#CA7D45",
      contrastText: "#f4e5da",
    },
    background: {
      default: "#faf2ec",
    },
    text: { primary: "#CA7D45" },
  },
});

export default theme;
