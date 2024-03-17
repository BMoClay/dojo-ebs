const Home = () => {

    const handleClick = (e) => {
        console.log("hey ninjas", e)
    }
    
    const handleClickAgain = (name, e) => {
        console.log("hey " + name, e.target)
    }

    const handleClickAgain2 = (name) => {
        console.log("hey " + name)
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => {
                handleClickAgain('mario', e)
            }}>Click me again</button>
            <button onClick={() => handleClickAgain2('mario')}>Click me again ...one-line code</button>
        </div>
    );
}
 
export default Home;