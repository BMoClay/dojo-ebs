const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The EBS bookstore</h1>
            <div className="links">
                <a href="/" className="Home">Home </a>
                <a href="/create" style={{
                    color: "green",
                    backgroundColor: "#f1356d",
                    borderRadius: "8px"
                }} className="create">New blogg</a>
            </div>
        </nav>
    );
}
 
export default Navbar;