import React, {useState} from 'react';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledOnOff} from "./components/onOff/UncontrolledOnOff";
import {UncontrolledAccordion} from "./components/Accordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";
import {OnOff} from "./components/onOff/onOff";


function App() {

    let [on, setOn]= useState(false);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    let [ratingValue, setRatingValue] = useState<RatingValueType>(2)

    return (
        <div>
            <PageTitle title={" This is APP component"}/>
            <PageTitle title={" My friends"}/>
            <Accordion titleValue={"Menu"} collapsed={accordionCollapsed}
                       setAccordionCollapsed={setAccordionCollapsed}/>
            <Rating value={ratingValue} setRatingValue={setRatingValue}/>
            <UncontrolledRating/>
            <UncontrolledAccordion titleValue={"Users"}/>
            <div>appState</div>
            < OnOff on={on} setOn={setOn}/>
            < UncontrolledOnOff/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}


export default App;
