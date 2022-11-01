import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { createChanel, getChannel } from '../../store/channel/channelSlice'
import ChannelItem from '../ChannelItem/ChannelItem';
import './Channel.css'

function Channel() {

    const work_id = useParams().id;
    const user_id = JSON.parse(localStorage.getItem('user')).id;

    const channels = useSelector((state) => state.channel.channels);
    
    const [name, setName] = useState('')
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
            name,
            work_id,
            user_id 
        }
        dispatch(createChanel(payload));
        setName('')
    }

    const handleGetChannel = (e) => {
        e.preventDefault();
        dispatch(getChannel(work_id));
    }

    return (
        <div className='channel_div' style={{display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
            <form className='channel_form' onSubmit={handleSubmit}>
                <p className='channel_title'>Channels</p>
                <div className='input_box'>
                    <div className='channel_input'>
                        <label>Name</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className='channel_button'>
                        <button type='submit' >
                            Submit
                        </button>
                    </div>
                </div>
            </form>

            <div className='getChannel_button'>
                <button onClick={(e) => handleGetChannel(e)}>
                    Get Channels
                </button>
            </div>

            {channels.length ? (
                channels.map(e => <ChannelItem key={e.channel_id} element={e}/>)
            ) : (
                <></>
            )}
        </div>
    )
}

export default Channel