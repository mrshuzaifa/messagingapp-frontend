import { Avatar } from '@mui/material'
import './SidebarChat.css'
const SidebarChat = ({messages}) => {
    return (
        <div className="sidebarChat">
            <Avatar src="logo192.png" />
            <div className="sidebarChat__info">
                <h2>Dev Help</h2>
                <p>{messages[messages.length -1]?.message}</p>
            </div>
        </div>
    )
}
export default SidebarChat