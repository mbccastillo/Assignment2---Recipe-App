import React, { useState } from 'react';
/* import ReactDOM from 'react-dom'; */
//code credits to EduRise @ https://linktr.ee/edurise

const Search = ({setSearchTerm}) => {
const [string, setString] = useState("");


const onSubmit = (event) => {
    event.preventDefault();
    setSearchTerm(string);
}
return (
    <div>
         <div className="row">
            <form className="col s12" onSubmit={e => onSubmit(e)}>
                <div className="col s10">             
                    <div className="row">
                         <div className="input-field col s12">
                            <input 
                            placeholder="Type a keyword to search for a recipe" 
                            id="search_recipe" 
                            type="text"
                            value={string} 
                            className="validate"
                            onChange={event => setString(event.target.value)}
                            />
                            <label htmlFor="search_recipe"></label>
                        </div> 
                    </div>
                </div>  
                <div className="col s2">
                    <button 
                    class="btn waves-effect waves-light" 
                    type="submit" 
                    name="action"
                    onClick={(e)=> onSubmit(e)}
                    >
                        Submit
                    <a href="sass.html"><i className="material-icons right">send</i></a>
                    </button>
                </div>                                          
            </form>
        </div>
    </div>
);
};


export default Search;