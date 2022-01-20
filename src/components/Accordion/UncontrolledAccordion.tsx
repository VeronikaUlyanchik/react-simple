import React, {useState} from "react";

type UncontrolledAccordionPropsType = {
    titleValue: string,
}

export function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
    let [collapsed, setCollapsed] = useState(false);
    const onClickHandler = () => {
        setCollapsed(!collapsed)
    }
    return (
        <>
            <AccordionTitle
                title={props.titleValue}
                onClickHandler={onClickHandler}/>
            {!collapsed && <AccordionBody/>}

        </>
    )
    // }
}

type AccordionTitlePropsType = {
    title: string
    onClickHandler: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={props.onClickHandler}>{props.title}</h3>
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

