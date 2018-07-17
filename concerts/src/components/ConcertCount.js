import React from 'react'
import '../stylesheets/ui.scss'

export const ConcertCount = React.createClass({
    render() {
        return (
            <div className='concert-count'>
                <div className='total-concerts'>
                    <span> {this.props.total} </span>
                    <span>concerts</span>
                </div>

                <div className='ohio-concerts'>
                    <span> {this.props.ohio} </span>
                    <span>Ohio concerts</span>
                </div>

                <div className='outdoor-concerts'>
                    <span> {this.props.outdoor} </span>
                    <span>outdoor concert</span>
                </div>

                <div>
                    <span> {this.props.goal} </span>
                </div>

            </div>
        )
    }
})
