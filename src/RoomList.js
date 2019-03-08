import React, { Component } from 'react'

class RoomList extends Component {
    render() {
        const orderedRooms = [...this.props.rooms].sort((a, b) => a.id > b.id)
        return (
            <div className="rooms-list">
                <ul>
                    <h3>Your rooms:</h3>
                    {orderedRooms.map( ({ id, name }) => {
                        let active = id === this.props.roomId ? ' active' : '';
                        return (
                            <li key={ id } className={ "room" + active }>
                                <a  href="javascript:;" 
                                    onClick={ () => this.props.subscribeToRoom(id) } 
                                >
                                    # { name }
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default RoomList;
