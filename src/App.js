import React, { lazy, Suspense } from "react";
import "./App.css";
import "./Assests/Css/theme.css";
import "./Assests/Css/maicons.css";
import Loader from "./Components/User/Loader";

// lazy loader
const LazyIndex = lazy(() => import("./Pages"));

function App() {
  return (
    <div className="App">
      {/* adding loader */}
      <Suspense fallback={<Loader />}>
        <LazyIndex />
      </Suspense>
    </div>
  );
}

export default App;
