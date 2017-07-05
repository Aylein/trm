import * as React from "react"
import * as ReactDOM from "react-dom"
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { useStrict } from "mobx"
import routes from "./router";

useStrict(true)

import App from "./app"

ReactDOM.render(<Router>
    <Switch>
        <App>
            {routes.map((va, i) => <Route exact path={va.path} key={i} render={(props: any) => <va.component {...props}/> } /> )}
        </App>
    </Switch>
</Router>, document.getElementById("main"))