import React, {Fragment} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'material-icons';

import './style.css';

import Feed from "./components/Feed";

function App() {
  return (
    <Fragment>
      <nav>
        <div className="nav-wrapper amber darken-4">
          <a href="#" className="brand-logo center">
            Hacker News
          </a>
        </div>
      </nav>
      <main>
        <div className="container">
          <div className="row">
            <div className="col s12">
              <Feed></Feed>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
}

export default App;
