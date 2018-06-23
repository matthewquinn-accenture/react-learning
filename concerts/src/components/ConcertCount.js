import React from 'react'
import '../stylesheets/ui.scss'

export const ConcertCount = React.createClass({
    render() {
        return (
            <div className='concert-count'>
                <div className='total-concerts'>
                    <span>5 concerts</span>
                </div>

                <div className='ohio-concerts'>
                    <span>2 Ohio concerts</span>
                </div>

                <div className='outdoor-concerts'>
                    <span>1 outdoor concert</span>
                </div>
            </div>
        )
    }
})