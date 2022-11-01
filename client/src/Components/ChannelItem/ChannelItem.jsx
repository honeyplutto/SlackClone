import React from 'react'

function ChannelItem(element) {
    return (
    <div 
    style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}
    >
        <p
            style={{fontSize: '28px'}}
        >
            Channel Name - {element.element.channel_name}
        </p>
    </div>
    )
}

export default ChannelItem