import React, { Fragment } from 'react';
import './index.css';


const SearchArea = ({ videoList, placeholderText, inputValue, inputOnChange, inputOnKeyPress, buttonDisable, buttonText, onSearchHandler}) => 
     (
        <div className='wrapper-search'>
            <div className='search-area'>
                <i className="fas fa-search"></i>
                <input
                    type='text'
                    placeholder={placeholderText}
                    value={inputValue}
                    className='search-area__input'
                    onChange={inputOnChange}
                    onKeyPress={inputOnKeyPress} />
                <button
                    disabled={buttonDisable}
                    className='search-area__button'
                    onClick={onSearchHandler}>
                    {buttonText}</button>
            </div>
            {videoList}
        </div>
    )

export default SearchArea;
