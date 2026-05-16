function EventDelegation(){
    const handleclick=(e)=>{
        if(e.target.tagname==="button"){
            alert(e.target.innerText+"clicked");
        }
            
        
    };
    return(

    
        <div>

        <h2>EventDelegation example</h2>

        <div onclick={handleclick}>

        <button>button 1</button>
        <button>button 2</button>
        <button>button 3</button>
        </div>
        </div>
    );
}export default EventDelegation;