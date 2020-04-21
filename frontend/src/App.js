import React, { Component } from 'react';
import axios from 'axios';

import Header from './components/header'
import Content from './components/content'
import Footer from './components/footer'

import './App.css';
class App extends Component {
  constructor() {
    super()
    this.state = {
      todo: {
        list: [],
        add: (item) => {
          axios.get("/add?item="+item).then(response => {
            axios.get('/query').then(response => {
              this.setState(preState => {
                let newTodo = preState.todo
                let list = response.data
                console.log(list)
                newTodo.list = list
                return {
                  todo: newTodo
                }
              });
            }).catch(function(err) {
              console.log(err);
            });
          }).catch(function(err) {
            console.log(err)
          });
        },
        delete: (id) => {
          axios.get("/del?id="+id).then(response => {
            axios.get('/query').then(response => {
              this.setState(preState => {
                let newTodo = preState.todo
                let list = response.data
                console.log(list)
                newTodo.list = list
                return {
                  todo: newTodo
                }
              });
            }).catch(function(err) {
              console.log(err);
            });
          }).catch(function(err) {
            console.log(err)
          });
        },
        update: (id, content) => {
          this.setState(preState => {
            axios.get("/update?id="+id+"&cont=" + content).then(response => {
              axios.get('/query').then(response => {
                this.setState(preState => {
                  let newTodo = preState.todo
                  let list = response.data
                  console.log(list)
                  newTodo.list = list
                  return {
                    todo: newTodo
                  }
                });
              }).catch(function(err) {
                console.log(err);
              });
            }).catch(function(err) {
              console.log(err)
            });
          })
        }
      }
    }
    axios.get('/query').then(response => {
      this.setState(preState => {
        let newTodo = preState.todo
        let list = response.data
        console.log(list)
        newTodo.list = list
        return {
          todo: newTodo
        }
      });
    }).catch(function(err) {
      console.log(err);
    });
  }
  render() {
    return (
      <div className="App">
        <Header todo={this.state.todo}></Header>
        <Content todo={this.state.todo}></Content>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
