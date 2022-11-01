import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineArrowRight } from "react-icons/ai";

function WorkspaceItem(element) {
  return (
    <div 
        style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}    
    >
        <p 
            style={{fontSize: '28px'}}
        >
            {element.element.workspace_name}
        </p>
        <Link 
            style={{textDecoration: 'none', color: '#8A9A5B', fontSize: '26px'}}
            to={`/workspace${element.element.work_id}`}
        >
                <AiOutlineArrowRight/>
        </Link>
    </div>
  )
}

export default WorkspaceItem