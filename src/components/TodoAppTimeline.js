import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import { VerticalTimeline, VerticalTimelineElement, SchoolIcon, WorkIcon } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export function TodoAppTimeline() {
    const { data, setData } = useContext(TodoContext);
    const completeClick = (e) => {
        const newValue = data;
        newValue[e].isCompleted=true;
        setData([...newValue]);
    }
    const incompleteClick = (e) => {
        const newValue = data;
        newValue[e].isCompleted=false;
        setData([...newValue]);
    }
    const deleteClick = (e) => {
        if(e<0) return;
        const newValue = data;
        newValue.splice(e,1);
        setData([...newValue]);
    }
    return (
        <div style={{ backgroundColor: '' }}>
            <h2>TODO TIMELINE</h2>
            <VerticalTimeline>
                {data.map((event, idx) => (
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date={event.deadline}
                    iconStyle={{ background: "#5a7b30", color: "#5a7b30" }}
                >
                    <h3
                    className="vertical-timeline-element-title"
                    dangerouslySetInnerHTML={{ __html: event.name }}
                    />
                    <h4>Status: {event.isCompleted? 'complete' : 'incomplete'}</h4>
                    {!event.isCompleted? (<button style={{cursor:'pointer', backgroundColor:'#91b13f', border:'none', borderRadius:'3px', color:'white', padding: '5px', textAlign: 'center', display:'inline-block', fontSize:'15px', paddingLeft:'10px', paddingRight:'10px'}} onClick = {()=>completeClick(idx)}>Completed</button>) : (<button style={{cursor:'pointer', backgroundColor:'#f44336', border:'none', borderRadius:'3px', color:'white', padding: '5px', textAlign: 'center', display:'inline-block', fontSize:'15px', paddingLeft:'10px', paddingRight:'10px'}} onClick = {()=>incompleteClick(idx)}>Incomplete</button>)}
                    <button style={{marginLeft:'10px', cursor:'pointer', backgroundColor:'#555555', border:'none', borderRadius:'3px', color:'white', padding: '5px', textAlign: 'center', display:'inline-block', fontSize:'15px', paddingLeft:'10px', paddingRight:'10px'}} onClick = {() => deleteClick(idx)}>Delete</button>
                </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </div>
    );
};