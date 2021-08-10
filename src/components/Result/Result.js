import React from 'react'
<link type="text/css" rel="stylesheet" href="css/materialize.min.css"  media="screen,projection"/>

//code credits to EduRise @ https://linktr.ee/edurise

const Result = ({pagination, setPagination, recipes, loading }) => {
    const prevClick = () => {
        if (pagination === 0){
          return;}
        setPagination(pagination - 10);};

    const nextClick = () => {
        setPagination(pagination + 10);};

return (
<div>
    <div className="container">
        <div 
        style={{
            justifyContent: "center", 
            display: recipes.length > 0 ? "block" : "none" }} >     

<ul class="pagination">
    <li class="waves-effect" onClick={prevClick}>
        <a href="#!">
            <div style={{display: "flex" }}>
                <i className="material-icons"><i class="fa fa-arrow-left" aria-hidden="true"></i></i>            
                <span style={{ fontSize: 16}}>Prev</span>
            </div>
        </a>
    </li>
    <li class="waves-effect" onClick={nextClick}>
        <a href="#!">
            <div style={{justifyContent:"center", display: "flex" }}>
                <span style={{ fontSize: 16}}>Next</span>
                <i className="material-icons"><i class="fa fa-arrow-right" aria-hidden="true"></i></i>            
            </div>
        </a>
    </li>
</ul>
</div>
{loading && <loading/>}
<div className="row" style={{ display: "flex", flexWrap: "wrap"}}>
          {recipes.map(({ recipe }, index) => (
            <div className="col s6 m6" key={index}>
                <div className="card">
                    <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src={recipe.image} alt="img"/>
                    </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">{recipe.label}<i className="material-icons right">more_vert</i></span>
                    
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">
                        Ingredients<i className="material-icons right">close</i>
                        </span>
                        <ul>
                        {recipe.ingredientLines.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                        ))}
                        </ul>
                </div>
            </div>
        </div>              
))}
</div>
</div>
</div>
    );
};



export default Result;