import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createWorkSpace, getUserWorkSpace } from '../../store/workspace/workspaceSlice'
import WorkspaceItem from '../WorkspaceItem/WorkspaceItem';
import './WorkSpace.css';

function WorkSpace() {
    
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('user'));
    const workspaces = useSelector(state => state.workspace.workspaces);

    const [title, setTitle] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const workspaceData = {name: title, user_id: user.id}
      dispatch(createWorkSpace(workspaceData));
    }

    const getWorkspaces = (e) => {
      e.preventDefault();
      dispatch(getUserWorkSpace(user.id));
      setTitle('')
    }

    return (
      <div className='workspace_div' style={{display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
        <form className='workspace_form' onSubmit={(e) => {handleSubmit(e)}}>
          <p className='workspace_title'>Workspace</p>
          <div className='input_box'>
            <div className='workspace_input'>
              <label>Title</label>
              <input type="text" value={title} onChange={(e) => {setTitle(e.target.value)}}/>
            </div>
            <div className='workspace_button'>
                <button type='submit'>
                  Create
                </button>
            </div>
          </div>
        </form>
          <div className='getWorkSpace_button'>
            <button onClick={(e) => {getWorkspaces(e)}}>
              Get Workspaces
            </button>
          </div>
          {workspaces.length ? (
            workspaces.map((e) => <WorkspaceItem key={e.work_id} element={e}/>)
          ) : (
            <></>
          )}
      </div>
    )
};

export default WorkSpace