import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import { Test } from '../../pages/test/Test';
import {ErrorPage} from "../../pages/404/ErrorPage";
import {EnterNewPassword} from "../../pages/enter-new-password/EnterNewPassword";
import {Registration} from "../../pages/registration/Registration";
import {Login} from "../../pages/login/Login";
import {Profile} from "../../pages/profile/Profile";
import {PasswordRecovery} from "../../pages/password-recovery/PasswordRecovery";

export const Routes = () => {
  return (
        <Switch>
            <Route exact path={'/'} render={() => <Redirect to={'/test'}/> }/>
            <Route path={'/test'} render={() => <Test/> }/>
            <Route path={'/login'} render={() => <Login/>}/>
            <Route path={'/profile'} render={() => <Profile/>}/>
            <Route path={'/registration'} render={() => <Registration/>}/>
            <Route path={'/password-recovery'} render={() => <PasswordRecovery/>}/>
            <Route path={'/enter-new-password'} render={() => <EnterNewPassword/>}/>
            <Route path={'/404'} render={() => <ErrorPage/> }/>
            <Redirect from={ '*' } to={'/404'}/>
        </Switch>
  )
}
