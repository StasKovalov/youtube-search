import React, { Fragment } from 'react';
import './index.css';


const SearchArea = props => {

    const { videoList,
        placeholderText,
        inputValue,
        inputOnChange,
        inputOnKeyPress,
        buttonDisable,
        buttonText,
        onSearchHandler } = props;

    return (
        <Fragment>
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
        </Fragment>
    )
}

export default SearchArea;
