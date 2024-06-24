import { useRef, useState, useEffect } from 'react'
import { Avatar, IconButton } from '@mui/material'
import { AttachFile, MoreVert, SearchOutlined, InsertEmoticon, Mic} from '@mui/icons-material'
import './Chat.css'
import axios from '../axios.js';
import { useStateValue } from './StateProvider';
const Chat = ({ messages }) => {
    const [{ user }, dispatch] = useStateValue()
    const [input, setInput] = useState("")
    const messagesEndRef = useRef(null)
    useEffect(() => {
        const scrollToBottom = () => {
            messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
        }
        scrollToBottom()
      }, [messages]);
    const sendMessage = async (e) => {
        e.preventDefault()
        await axios.post('/messages/new', {
            message: input,
            name: user.displayName,
            timestamp: new Date().toUTCString(),
            received: true
        })
        setInput("")
    }
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src="logo192.png" />
                <div className="chat__headerInfo">
                    <h3>Dev Help</h3>
                    <p>Last seen at { " "}
                    {messages[messages.length -1]?.timestamp}
                    </p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                {messages.map(message => (
                <p className={`chat__message ${message.name === user.displayName && 'chat__receiver'}`}>
                <span className="chat__name">{message.name}</span>
                    {message.message}
                <span className="chat__timestamp">
                    {message.timestamp}
                </span>
                </p>
                ))}
                <div ref={messagesEndRef} />
            </div>
            <div className="chat__footer">
                <InsertEmoticon />
                <form>
                    <input
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        placeholder="Type a message"
                        type="text"
                    />
                    <button type="submit" onClick={sendMessage} >Send a message</button>
                </form>
                <Mic />
            </div>
        </div>
    )
}
export default Chat