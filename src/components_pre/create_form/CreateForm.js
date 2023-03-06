import { useEffect, useRef, useState } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import ItemCard from "./utils/ItemCard";

function CreateForm(){

    const [htmlData, setHtmlData] = useState([]);

    function AddNewComponent(){
        let temp_data = [];

        temp_data.push(
            <ItemCard itemTitle="Item" />
        )

        setHtmlData(pre => (
            [pre, ...temp_data]
        ))
    }


    return(
        <>
            <div className="container">
                <div className='row position-fixed bottom-0 start-0 '>
                    <div className='col-12 '>
                        <div className="d-grid gap-1 col-12 mx-auto">
                            <button className="btn btn-primary" onClick={AddNewComponent}><FontAwesomeIcon icon={faPlus} /></button>
                        </div>
                    </div>
                </div>

                {
                    htmlData.map(a => (a))
                }
            </div>
        </>
    );
}

export default CreateForm;