import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, Divider, Fab, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
// import Team from "./scenes/team";
// import Invoice from "./scenes/invoices";
// import Contacts from "./scenes/contants";
// import Bar from "./scenes/bar";
// import Form from "./scenes/form";
// import Line from "./scenes/line";
// import Pie from "./scenes/pie";
// import FAQ from "./scenes/FAQ";
// import Geography from "./scenes/geography";
// import Calendar from "./scenes/calendar";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar/>
          <main className="content">
            <Topbar>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                {/* <Route path="/Team" element={<Team />} /> */}
                {/* <Route path="/Invoice" element={<Invoice />} /> */}
                {/* <Route path="/Contacts" element={<Contacts />} /> */}
                {/* <Route path="/Bar" element={<Bar />} /> */}
                {/* <Route path="/Form" element={<Form />} /> */}
                {/* <Route path="/Line" element={<Line />} /> */}
                {/* <Route path="/Pie" element={<Pie />} /> */}
                {/* <Route path="/FAQ" element={<FAQ />} /> */}
                {/* <Route path="/Geography" element={<Geography />} /> */}
                {/* <Route path="/Calendar" element={<Calendar />} /> */}
              </Routes>
            </Topbar>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
