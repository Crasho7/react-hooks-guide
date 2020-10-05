import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { AboutPage } from "./AboutPage";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";
import { NavBar } from "./NavBar";
import { FailPage } from "./FailPage";

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar />
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/about" component={AboutPage} />
                        <Route path="/login" component={LoginPage} />
                        <Route component={FailPage} />
                    </Switch>
                </div>
            </div>
        </Router>
    )
}
