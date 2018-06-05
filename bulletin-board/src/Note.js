import React, { Component } from 'react'
import FaPencil from 'react-icons/lib/fa/pencil'
import FaTrash from 'react-icons/lib/fa/trash'
import FaFloppyO from 'react-icons/lib/fa/floppy-o'

class Note extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editing: false
        }
        this.edit = this.edit.bind(this)
        this.remove = this.remove.bind(this)
        this.save = this.save.bind(this)
        this.renderForm = this.renderForm.bind(this)
        this.renderDisplay = this.renderDisplay.bind(this)
        this.checkState = this.checkState.bind(this)
    }

    edit() {
        this.setState({
            editing: true
        })
    }

    remove() {
        alert('removing note')
    }

    save() {
        alert('saved!')
    }

    renderForm() {
        return (
            <div className="note">
                <form>
                    <textarea />
                    <button onClick={this.save}><FaFloppyO /></button>
                </form>
            </div>
        )
    }

    renderDisplay() {
        return (
            <div className="note"> 
                <p>I'm awesome</p>
                <span>
                    <button onClick={this.edit} id="edit"> <FaPencil /> </button>
                    <button onClick={this.remove} id="remove"> <FaTrash /> </button>
                </span>
            </div>
        )
    }

    checkState() {
        let display = this.renderDisplay() 

        if (this.state.editing) {
            display = this.renderForm()
        }

        return display
    }

    render() {
        return this.checkState()
    }
}

export default Note