import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

function ItemCard({itemTitle}){

    return(
        <div className='row shadow-sm p-3 mt-2 mb-5 bg-body rounded'>
            <div className='col-8'>
                <h2 className="text-start">{itemTitle || ''}</h2>
            </div>

            <div className='col-2'>
                <FontAwesomeIcon icon={faTrash} />
            </div>

            <div className='col-2'>
                <FontAwesomeIcon icon={faPenToSquare} />
            </div>
            
        </div>
    )
}

export default ItemCard;