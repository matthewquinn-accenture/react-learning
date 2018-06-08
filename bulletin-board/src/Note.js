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
        this.props.onRemove(this.props.index)
    }

    save(e) {
        this.props.onChange(this._newText.value, this.props.index)
        this.setState({
            editing: false
        })
    }

    renderForm() {
        return (
            <div className="note">
                <form onSubmit={this.save}>
                    <textarea ref={input => this._newText = input} />
                    <button type="button" id="save"><FaFloppyO /></button>
                </form>
            </div>
        )
    }

    renderDisplay() {
        return (
            <div className="note"> 
                <p>{this.props.children}</p>
                <span>
                    <button type="button" onClick={this.edit} id="edit"> <FaPencil /> </button>
                    <button type="button" onClick={this.remove} id="remove"> <FaTrash /> </button>
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