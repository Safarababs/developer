function Footer(){
    return (
    <section id="footer">
        <div className="footer-container">
            <div className="follow">
                <h1>Develo<span>per</span></h1>
                <ul>
                    <li><a href="#" className="fab fa-facebook"></a></li>
                    <li><a href="#" className="fab fa-instagram-square"></a></li>
                    <li><a href="#" className="fab fa-twitter-square"></a></li>
                    <li><a href="#" className="fab fa-linkedin"></a></li>
                </ul>
            </div>

            <div className="info">
                <a href="#" className="fas fa-map-marker-alt" data-text="Bhera, Pakistan"></a>
                <a href="#" className="fas fa-envelope" data-text="xyz@gmail.com"></a>
                <a href="#" className="fas fa-phone" data-text="+923016005735"></a>
            </div>

            <div className="letter">
            <h1>newsletter</h1>
            <p style={{color: "#fff", fontSize:"1.5rem"}}>subscribe for lettest updates</p>
            <input type="email" placeholder="e-mail"></input>
            <input type="submit" value="submit"></input>          
        </div>
        </div>

        
        <h1>&copy; copyright @ {new Date().getFullYear()} by mr. safar abbas | all rights reserved</h1>
    </section>
)}

export default Footer;