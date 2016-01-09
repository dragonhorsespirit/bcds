import React from 'react';
import { Router, Route, Link ,browserHistory, IndexRoute } from 'react-router';
import Home from './Home';
import Bank from './Bank';
import Company from './Company';
import CreateDraft from './CreateDraft';
import CompanyDrafts from './CompanyDrafts';
import CompanyReceived from './CompanyReceived';

export default class Routes extends React.Component {
  render() {
    return (<Router history={browserHistory}>
      <Route path="/">
        <IndexRoute component={Home} />
        <Route  path="bank" component={Bank}/>
        <Route  path="company">
          <Route  path="/company/drafts" component={CompanyDrafts}/>  
          <Route  path="/company/received" component={CompanyReceived}/> 
        </Route>
        <Route  path="draft/new" component={CreateDraft}/>
      </Route>
    </Router>) ;
  }
}
