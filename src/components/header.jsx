function Header(){
    return(
        <header className="color">
            <div className="logo">
                <h1>Develo<span>per</span></h1>
            </div>

            <div className="menu">
                <i className="fas fa-bars"></i>
            </div>

            <nav>
                <ul>
                    <li><a href="#home">home</a></li>
                    <li><a href="#services">services</a></li>
                    <li><a href="#gallery">gallery</a></li>
                    <li><a href="#testimonials">testimonials</a></li>
                    <li><a href="#footer">footer</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;