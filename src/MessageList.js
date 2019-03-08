import React from 'react';
import ReactDOM from 'react-dom'
import Message from './Message'


class MessageList extends React.Component {
    
    componentWillUpdate() {
        let node = ReactDOM.findDOMNode(this)
        this.shouldScrollToBottom = node.scrollTop + node.clientHeight + 100 >= node.scrollHeight
    }
    
    componentDidUpdate() {
        if (this.shouldScrollToBottom) {
            let node = ReactDOM.findDOMNode(this)
            node.scrollTop = node.scrollHeight   
        }
    }
    
    render() {
        return (
            <div className="message-list">
                {this.props.messages.map((message) => {
                    let messageObj = {key: message.id, username: message.senderId, text: message.text};
                    return (
                        <Message {...messageObj} />
                    )
                })}
            </div>
        )
    }
}

export default MessageList