import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './ReviewItem.css'

const ReviewItem = ({cartitems,removeItemHandler}) => {
    const {id,name,quantity,img,price} =cartitems;

    return (
        <div className='reviewitem'>
                <img className='reviewitem-img' src={img} alt="" />
                <div className='reviewitem-details'>
                    <h1 className='reviewitem-title'>{name}</h1>
                    <p>price :${price}</p>
                    <p>Amount :{quantity}</p>
                </div>
                <button onClick={()=>removeItemHandler(id)} className='delate-btn'>
                <FontAwesomeIcon className="btn-color" icon={faTrashAlt} />
                </button>
        </div>
    );
};

export default ReviewItem;