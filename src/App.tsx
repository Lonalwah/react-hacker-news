import React, { Fragment } from 'react';
import { Routes, Route, useParams } from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css';
import 'material-icons';

import './style.css';

import Item from "./components/Item";
import Feed from "./components/Feed";

function App() {

  return (
    <Fragment>
      <nav>
        <div className="nav-wrapper amber darken-4">
          <a href="/" className="brand-logo center">
            <span className="material-icons">newspaper</span> Hacker News
          </a>
        </div>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="item" element={<Item />} />
        </Routes>
      </main>
    </Fragment>
  );
}

export default App;
