import React from 'react';
import {FormattedMessage} from "react-intl";


function ListItem({ id, name, text, urlMain, price,addedCookies, onAddCookie}){
    const AddCookie = () => {
        const obj = {
            id,
            name,
            price,
            urlMain,
        }
        onAddCookie(obj)
    }
    return (
        <li>
            <img src={ urlMain } alt={urlMain}/>
            <div className="listContainerText">
                <div className="listContainerHeader"><FormattedMessage id={ name }/></div>
                <div className="listContainerContent"><FormattedMessage id={ text }/></div>
                <div className="listBtns">
                    <input defaultValue={1}/><span><FormattedMessage id="tk"/></span>
                    <button onClick={AddCookie} className="listContainerBtn">
                        <span>
                            <FormattedMessage id="add_to_cart"/>
                        </span>
                        {addedCookies && <div className="addedCookies"><i>{addedCookies}</i></div>}
                    </button>
                </div>

            </div>
        </li>
    )
}
export default ListItem;