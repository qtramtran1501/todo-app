import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import Button from 'mui-button';

export const ToDoList = () => {
    const { data, setData, name, setName, deadline, setDeadline } = useContext(TodoContext);
    const handleClick = (e) => {
        e.preventDefault();
        const newItem = {
            id: data.length + 1,
            name: name,
            deadline: deadline,
            isCompleted: false
        };
        setData([...data, newItem]);
        setName('');
        setDeadline('');
    }
    
    return (
        <div>
            <h2>ToDo List</h2>
            <table style={{backgroundColor:'#aaaa', border: '2px dashed green', marginLeft: 'auto', marginRight: 'auto', 'borderRadius':'5px', padding: '100px', paddingBottom:'30px', marginBottom:'30px', boxShadow: '5px 10px 8px #888888'}}>
                <tbody>
                    <tr >
                        <td><b>Name:</b></td>
                        <td>
                        <input style={{border: '1px solid', 'borderRadius':'10px', paddingBottom:'10px'}} value={name} onChange={(e) => {
                            setName(e.target.value);
                        }} />
                        </td>
                    </tr>
                    <tr>
                        <td><b>Deadline:</b></td>
                        <td>
                            <input style={{border: '1px solid', 'borderRadius':'10px', paddingBottom:'10px'}} value={deadline} onChange={(e) => {
                                setDeadline(e.target.value);
                            }} />
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td style={{paddingTop:'5px'}}colSpan="2">
                            <button style={{cursor:'pointer', backgroundColor:'#91b13f', border:'none', borderRadius:'3px', color:'white', padding: '5px', textAlign: 'center', display:'inline-block', fontSize:'15px', paddingLeft:'10px', paddingRight:'10px'}} onClick={handleClick}>Add to List</button>
                        
                        </td>
                    </tr>
                </tfoot>
             </table>
            {data.map((item) => {
                //process js
                

                return (
                    
                    <div>
                        <br/>
                        {item.name} - {item.deadline} : { item.isCompleted ? 'COMPLETED' : 'IN-COMPLETE'}
                        <br/>
                        <br/>
                    </div>

                )
            })}
        </div>
    )
};