import React, { Component } from 'react'
import List from './list'
import './index.css'
class Content extends Component{
    render() {
        return (<div className="content">
            <List title="正在进行" todo={this.props.todo} />
        </div>)
    }
}

export default Content