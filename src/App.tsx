import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { Home } from "./pages/Home";
import { theme } from "./styles/theme";

export function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </>
  );
}
