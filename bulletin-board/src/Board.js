import React, { Component } from 'react'
import Note from './Note'

class Board extends Component {
    constructor(props) {
        super(props)
        this.state = {
            notes: [
                {
                    id: 0,
                    note: "IQs DA BEST"
                },
                {
                    id: 1,
                    note: "GOAT!"
                },
                {
                    id: 2,
                    note: "YEAHHHH BABY!"
                }
            ]
        }
        this.update = this.update.bind(this)
        this.eachNote = this.eachNote.bind(this)
    }

    update(newText, i) {
        this.setState(prevState => ({
            notes: prevState.notes.map(
                note => (note.id !== i) ? note : {...note, note: newText}
            )
        }))
    }

    eachNote(note, i) {
        return (
            <Note key={i} index={i} onChange={this.update}>
                {note.note}
            </Note>
        )
    }

    render() {
        return (
            <div className='board'> 
                {this.state.notes.map(this.eachNote)}
            </div>
        )
    }
}

export default Board