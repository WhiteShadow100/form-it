import MenuCard from "./utils/MenuCard";

// Importing image
import text_input from './../../images/menu/text_input.png'
import num_input from './../../images/menu/num_input.png'
import option_input from './../../images/menu/option_input.png'
import bool_input from './../../images/menu/bool_input.png'
import date_time_input from './../../images/menu/date_time_input.png'
import desc_input from './../../images/menu/desc_input.png'
import { useState } from "react";

function ElementMenu(){

    const [testVar, setTestVar] = useState(null)

    function textSetter(text){
        setTestVar(text)
    }

    return(
        <>
            <div>
                {
                    testVar != null ? (
                        "Currently selected: "+testVar
                    ) : (
                        <></>
                    )
                }
            </div>

            <div className="container mt-3">
                <div className="row">
                    <div className="col-6">
                        <button onClick={() => {textSetter("Text Input")}}><MenuCard menuIcon={text_input} menuName={'Text Input'} /></button>
                    </div>
                    <div className="col-6">
                    <button onClick={() => {textSetter("Numeric Input")}}><MenuCard menuIcon={num_input} menuName={'Numberic Input'} /></button>
                    </div>
                </div>

                <div className="row">
                    <div className="col-6">
                    <button onClick={() => {textSetter("Optional Input")}}><MenuCard menuIcon={option_input} menuName={'Optional'} /></button>
                    </div>

                    <div className="col-6">
                    <button onClick={() => {textSetter("Boolean Input")}}><MenuCard menuIcon={bool_input} menuName={'True or False'} /></button>
                    </div>
                </div>

                <div className="row">
                    <div className="col-6">
                        <button onClick={() => {textSetter("Date and Time Input")}}><MenuCard menuIcon={date_time_input} menuName={'Date and Time'} /></button>
                    </div>
                    <div className="col-6">
                    <button onClick={() => {textSetter("Descriptive Input")}}><MenuCard menuIcon={desc_input} menuName={'Descriptive'} /></button>
                    </div>
                </div>
            </div>
        </>        
    );
}

export default ElementMenu;