import React from "react";

function GifSearch({setQuery, query}){
    

    function handleSubmit(event) {
        event.preventdefault();
      setQuery(query);
       
    }

    function handleChange(event) {
        console.log(event)
        setQuery(event.target.value);
        
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="search">Enter a Search Term:</label>
                <input
                id="search"
                className="form-control"
                type="text"
                value={query}
                onChange= {handleChange}
                
                />
            </div>
            <button onClick={handleSubmit}type="submit">
                Find Gifs
            </button>
            </form>
        </div>
    );
    
    
    
    



}









export default GifSearch;