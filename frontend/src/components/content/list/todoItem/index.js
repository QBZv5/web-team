import React, { Component } from 'react'
import './index.css'

class ToDoItem extends Component {
    constructor() {
      super()
      this.state = {edit:false, content:""};
    }
    clickDelete = () => {
        this.props.clickDelete(this.props.id)
    }

    clickUpdate = () => {
      this.setState({edit:false});
      this.props.clickUpdate(this.props.id, this.state.content)
    }

    clickEdit = () => {
      this.setState({edit:true, content:this.props.item})
    }

    clickCancelEdit = () => {
      this.setState({edit:false, content:this.props.item})
    }

    handleChange = (event) => {
      this.setState({content:event.target.value})
    }

    render() {
        return (
        <div className={'ToDoItem'}>
          {
            this.state.edit ?
            <div>
              <input type="text" className="Edit" value={this.state.content} onChange={this.handleChange} required="required" autoComplete="off"></input>
              <button className="UpdateButton" onClick={this.clickUpdate}>Update</button>
              <button className="CancelButton" onClick={this.clickCancelEdit}>Cancel</button>
            </div>
            : 
            <div>
              <p>{this.props.item}</p>
              <button className="EditButton" onClick={this.clickEdit}>Edit</button>
            </div>
          }
          <span onClick={this.clickDelete}>X</span> 
        </div>)
    }
}

export default ToDoItem 