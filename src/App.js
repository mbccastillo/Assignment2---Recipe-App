import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Result from './components/Result/Result';
import Search from './components/Search/Search';

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [pagination,setPagination] = useState(0);
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const prevSearchIdRef = useRef();
  useEffect(() =>{
      prevSearchIdRef.current = searchTerm;
     });
  const prevSearch = prevSearchIdRef.currrent;
       
    useEffect(()=>{
    const getRecipes = async () => {
      setLoading(true);
    const APP_ID = "a0ef2f76";
    const APP_KEY = "e96bf0f29a2f68d5803df78fbfc7abde";

    var currentPagination = pagination;

    if(prevSearch !== searchTerm){
      currentPagination = 0;
      setPagination(0);
    }

    const result = await fetch(`https://api.edamam.com/search?q=${searchTerm}&app_id=${APP_ID}&app_key=${APP_KEY}&from=${currentPagination}&to=${currentPagination+10}`);
   const data = await result.json();
   if(data.hits.length > 0) {
     setLoading(false);
     setResult(data.hits);
       }
    };
     
      if(searchTerm && (searchTerm !== prevSearch || pagination>0)){
       getRecipes();
      } 
  }, [searchTerm, pagination]);
    
return (
        <div>
            <Search setSearchTerm={setSearchTerm}/>
            <Result 
            recipes={result} 
            pagination={pagination} 
            setPagination={setPagination} 
            loading={loading}
            />
        </div>
    );
};



export default App;