import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import { Test } from '../../pages/test/Test';
import {ErrorPage} from "../../pages/404/ErrorPage";
import {Registration} from "../../pages/registration/Registration";
import {Login} from "../../pages/login/Login";
import {Profile} from "../../pages/profile/Profile";
import {PasswordRecovery} from "../../pages/password-recovery/PasswordRecovery";
import {Home} from "../../pages/home/Home";
import {SetPassword} from "../../pages/set-password/SetPassword";

export const Routes = () => {
  return (
        <Switch>
            <Route exact path={'/'} render={() => <Home/> }/>
            <Route path={'/test'} render={() => <Test/> }/>
            <Route path={'/login'} render={() => <Login/>}/>
            <Route path={'/profile'} render={() => <Profile/>}/>
            <Route path={'/registration'} render={() => <Registration/>}/>
            <Route path={'/password-recovery'} render={() => <PasswordRecovery/>}/>
            <Route path={'/set-password'} render={() => <SetPassword/>}/>
            <Route path={'/404'} render={() => <ErrorPage/> }/>
            <Redirect from={ '*' } to={'/404'}/>
        </Switch>
  )
}
