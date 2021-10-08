import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import Test from '../../pages/test/Test';

export const Routes = () => {
  return (
        <Switch>
            <Route exact path={'/'} render={() => <Redirect to={'/test'}/> }/>
            <Route path={'/test'} render={() => <Test/> }/>
            <Route path={'/login'} render={() => <>Login</>}/>
            <Route path={'/profile'} render={() => <>Profile</>}/>
            <Route path={'/registration'} render={() => <>Registration</>}/>
            <Route path={'/password-recovery'} render={() => <>Password recovery</>}/>
            <Route path={'/enter-new-password'} render={() => <>Enter new password</>}/>
            <Route path={'/404'} render={() => <h1>404: PAGE NOT FOUND</h1> }/>
            <Redirect from={ '*' } to={'/404'}/>
        </Switch>
  )
}
