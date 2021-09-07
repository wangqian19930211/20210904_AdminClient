/*
应用根组件
*/

import React from 'react'
import { message } from 'antd'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from "./pages/login/login"
import Admin from "./pages/admin/admin"

export default class App extends React.Component {
    handleClick = () => {
        message.success('成功啦……');
    }

    render () {
        return (
            //<div>App</div>
            //<Button type='primary' onClick={this.handleClick}>学习</Button>
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Login} />
                    <Route path="/admin" component={Admin} />
                    <Route />
                </Switch>
            </BrowserRouter>
        )
    }
}