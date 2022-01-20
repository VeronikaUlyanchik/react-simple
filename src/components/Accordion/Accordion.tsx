import React from "react";

type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean
    setAccordionCollapsed:(collapsed:boolean)=>void
}

function Accordion(props: AccordionPropsType) {
       return (
          <>
               <AccordionTitle title={props.titleValue} onClick={props.setAccordionCollapsed} collapsed={props.collapsed} />
              { !props.collapsed && <AccordionBody/>}
               {/*условный рендеринг (ищет первое фолс или последнее тру, после фолсе дальше не идет - значит ничего не отрисует*/}
           </>
       )
    // }
}

type AccordionTitlePropsType = {
    title: string
    onClick: (collapsed:boolean)=>void
    collapsed:boolean
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={()=>props.onClick(!props.collapsed)}>{props.title}</h3>
    )
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default Accordion;