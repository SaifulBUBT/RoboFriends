import React from 'react'

const SearchBox = (props) =>{
    let {searchChange} = props;
    return(
        <div className="pa2">
            <input 
                className="pa3 ba b--green bg-lightest-blue"
                type="search"
                placeholder="Search robots"
                onChange={searchChange}
            />
            
        </div>
        
    )
}

export default SearchBox