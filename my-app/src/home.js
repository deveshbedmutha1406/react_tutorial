const Home = () => {
    const handleClick = () => {
        console.log("Hello Devesh");
    }

    const handleClickAgain = (name) => {
        console.log(name);
    }
    
    return (
        <div className="home">
            <h2>HomePage</h2>        
            <button onClick={handleClick}>Click Me</button>
            
            <button onClick={() => {
                handleClickAgain("parameters");
            }}>Click again</button>
        </div>      
    );
}

export default Home;