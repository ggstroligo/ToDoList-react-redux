import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {

    constructor(props) {
        super(props)

        this.state = { description: '', list: [] }

        // Metódos de ToDoForm.jsx
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClearSearch = this.handleClearSearch.bind(this)
        
        // Metódos de ToDoList.jsx
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.sortByDescription = this.sortByDescription.bind(this)
        this.sortByAction = this.sortByAction.bind(this)

        this.refresh()
    }

    refresh(description = '', sort = 'createdAt'){
        const search = description ? `&description__regex=/${description}/i` : ''
        axios.get(`${URL}?sort=${sort}${search}`)
            .then( res => this.setState({...this.state, description, sort, list: res.data }) )
    }

    sortByDescription(){
        let c
        if(this.state.sort.charAt(0) == '-' ) {
            c = '+'
        } else {
            c = '-'
        }
        this.refresh(this.state.description, `${c}description` )
    }

    sortByAction(){
        let c
        if(this.state.sort.charAt(0) == '-' ) {
            c = '+'
        } else {
            c = '-'
        }
        this.refresh(this.state.description, `${c}done` )
    }

    handleChange(event) {
        this.setState({ ...this.state, description: event.target.value })
    }

    handleSearch(todo){
        this.refresh(this.state.description, this.state.sort)
    }

    handleClearSearch(){
        this.refresh('', this.state.sort)
    }

    handleAdd() {
        const description = this.state.description
        axios.post(URL, { description })
            .then(res => this.refresh('', this.state.sort))
    }

    handleRemove(todo) {
        axios.delete(`${URL}/${todo._id}`)
            .then(res => this.refresh(this.state.description, this.state.sort))
    }

    handleMarkAsDone(todo) {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
            .then( res => this.refresh(this.state.description, this.state.sort))
    }

    handleMarkAsPending(todo) {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
            .then( res => this.refresh(this.state.description, this.state.sort))
    }

    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro'/>
                <TodoForm 
                    description={this.state.description} 
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd} 
                    handleSearch={this.handleSearch}
                    handleClearSearch={this.handleClearSearch} />
                
                <TodoList 
                    list={this.state.list}
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPending={this.handleMarkAsPending}
                    handleRemove={this.handleRemove}
                    sortByDescription={this.sortByDescription}
                    sortByAction={this.sortByAction} />
            </div>
        )
    }
}