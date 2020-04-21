import React, { Component } from 'react'
import TodoItem from './todoItem'
import './index.css'

class List extends Component {
    render() {
        return (<div className="list">
            <h2 className="list-title">
                {this.props.title}
                <span className="title-numb">{this.props.todo.list.length}</span>    
            </h2>
            <div>
                {
                    this.props.todo.list.map((item, index) => {
                        return <TodoItem item={item} key={index} id={index} clickDelete={this.props.todo.delete} clickUpdate={this.props.todo.update}/>
                    })
                }
            </div>
        </div>)
    }
}

export default List