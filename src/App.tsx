import React from "react";
import clsx from "clsx";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import AppMenu from "./AppMenu";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    // paddingTop: "100px",
    // paddingBottom: "100px",
    background: "#535454",
    color: "#fff",
  },
  content: {
    flexGrow: 1,
    overflow: "auto",
  },
  container: {
    // paddingTop: "100px",
    // marginLeft:"200px",
    paddingBottom: "100px",
    color: "red",
  },
  typo: {
    justifyContent: "center",
    display: "flex",
  },
  div: {
    display: "flex",
    background: "#3a3a53",
    color: "white",
    justifyContent: "space-between",
    alignItems:"center",
    width: "100%",
    
  },
}));

const App: React.FC = () => {
  const classes = useStyles();

  const PageDashboard = () => (
    <Typography variant="h3" component="h1" className={classes.typo}>
      Dashboard Page
    </Typography>
  );
  const PageOrders = () => (
    <Typography variant="h3" component="h1" className={classes.typo}>
      User Profile Page
    </Typography>
  );
  const PageCustomers = () => (
    <Typography variant="h3" component="h1" className={classes.typo}>
      Friends list Page
    </Typography>
  );
  const PageReports = () => (
    <Typography variant="h3" component="h1" className={classes.typo}>
      Reports Page
    </Typography>
  );
  const Page404 = () => (
    <Typography variant="h3" component="h1" className={classes.typo}>
      Not Found 404
    </Typography>
  );
  const [show, setShow] = React.useState(false);
  const handleside = () => {
    setShow(false);
  };

  return (
    <BrowserRouter>
      <div className={clsx("App", classes.root)}>
        <CssBaseline />

        <Drawer anchor="left" open={show} onClose={() => setShow(false)}>
          <AppMenu handle={handleside} />
        </Drawer>
        <main className={classes.content}>
          <Container maxWidth="lg" className={classes.container}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className={classes.div}>
                <Button variant="contained" onClick={() => setShow(true)} style={{height:"30px"}}>Show SideBar</Button>
                <h3>Navbar</h3>
              </div>
              <Routes>
                <Route path="/" element={<PageDashboard />} />
                <Route path="/profile" element={<PageOrders />} />
                <Route path="/friends" element={<PageCustomers />} />
                <Route path="/reports" element={<PageReports />} />
                <Route path="*" element={<Page404 />} />
              </Routes>
            </div>
          </Container>
        </main>
      </div>
    </BrowserRouter>
  );
};

const drawerWidth = 240;

export default App;
