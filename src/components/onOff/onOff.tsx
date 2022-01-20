import React, {useState} from "react";
import s from "./onOff.module.css";

type onOffPropsType={
    on:boolean
    setOn:(on:boolean)=> void
}

export const OnOff = (props:onOffPropsType)=>{

    const onStyle ={
        width: '50px',
        border: '1px #282c34 solid',
        margin: '10px',
        cursor: 'pointer',
        display: "inline-block",
        padding: '2px',
        background: props.on? "green" : "white"
    };
    const offStyle={
        width: '50px',
        border: '1px #282c34 solid',
        margin: '10px',
        cursor: 'pointer',
        display: "inline-block",
        padding: '2px',
        background: props.on ? "white" : "red"
    };
    const indicatorStyle={
        width: '10px',
        height: '10px',
        borderRadius: '10px',
        border: "1px solid black",
        display: "inline-block",
        padding: '2px',
        background: props.on ? "green" : "red"
    }
    return (
        <div >
            <div>
                  <div style={onStyle} onClick={()=> props.setOn(true) }>On</div>
                   <div style={offStyle} onClick={()=>props.setOn(false) }>Off</div>
                    <div style={indicatorStyle}> </div>
            </div>

        </div>
    )
}