/*
应用根组件
*/

import React from 'react'
import { Button, message } from 'antd'

export default class App extends React.Component {
    handleClick = () => {
        message.success('成功啦……');
    }

    render () {
        return (
            //<div>App</div>
            <Button type='primary' onClick={this.handleClick}>学习</Button>
        )
    }
}