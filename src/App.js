import React, { lazy, Suspense } from "react";
import "./App.css";
import "./Assests/Css/theme.css";
import "./Assests/Css/maicons.css";
import Loader from "./Components/User/Loader";

const LazyIndex = lazy(() => import("./Pages"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <LazyIndex />
      </Suspense>
    </div>
  );
}

export default App;
