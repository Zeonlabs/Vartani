import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Applicantpage from "./Pages/ApplicantPage";
import Businesspage from "./Pages/BusinessPage";
import Distribution from "./Pages/Distribution";
import Manufacturingpage from "./Pages/ManufacturingPage";
import Myquotepage from "./Pages/MyquotePage";
import Policypage from "./Pages/PolicyPage";
import Productpage from "./Pages/ProductPage";
import Sellerpage from "./Pages/SellerPage";
import routes from "./router";
// import './App.css';
import "./Scss/index.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path={routes.seller}
          name="sellerPage"
          component={Sellerpage}
        />
        <Route
          exact
          path={routes.business}
          name="businessPage"
          component={Businesspage}
        />
        <Route
          exact
          path={routes.product}
          name="productPage"
          component={Productpage}
        />
        <Route
          exact
          path={routes.policy}
          name="policyPage"
          component={Policypage}
        />
        <Route
          exact
          path={routes.applicant}
          name="applicantPage"
          component={Applicantpage}
        />
        <Route
          exact
          path={routes.quotes}
          name="quotePage"
          component={Myquotepage}
        />
        <Route
          exact
          path={routes.manufacturing}
          name="maufacturing Page"
          component={Manufacturingpage}
        />
        <Route
          exact
          path={routes.distribution}
          name="distribution page"
          component={Distribution}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
