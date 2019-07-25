import React from 'react';

export default ({list, _delete, _edit}) => {    
    return (<ul>
        {
            list.map((value, index) => 
            <li key={index}>{value} &nbsp;&nbsp; 
                <button onClick={() => _delete(index)}>Delete</button>&nbsp;&nbsp; 
                <button onClick={() => _edit(index)}>Edit</button>  
            </li>
        
    )}
    </ul>);
};