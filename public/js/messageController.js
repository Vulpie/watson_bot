const { clearChat } = require('./displayController')
const { displayMessageOnChatScreen } = require('./renderMessage')

export const sendResponseToController = async (intent, assistant_response) => {
    switch (intent) {
        case 'General_Ending':
            setTimeout(clearChat(), 1000)
            break
        case 'Session_restart':
            await fetch('/api/session/resetid', {
                method: 'post'
            })

            displayMessageOnChatScreen({
                assistant_response,
                identity: 'watson'
            })
            break
        case 'Display_image':
            displayMessageOnChatScreen({
                assistant_response,
                identity: 'image_bot'
            })
            break
        default:
            displayMessageOnChatScreen({
                assistant_response,
                identity: 'watson'
            })
    }
}
