function ShareIcon() {
    return (
        <>
            <div className="share-icon color">
                <i className="fas fa-share color"></i>
                <ul className="color">
                    <li><a href="#" className="fab fa-facebook"></a></li>
                    <li><a href="#" className="fab fa-instagram-square"></a></li>
                    <li><a href="#" className="fab fa-twitter-square"></a></li>
                    <li><a href="#" className="fab fa-linkedin"></a></li>
                </ul>
            </div>

            <div className="scroll-icon">
                <a href="#home" className="fas fa-angle-up color"></a>
            </div>
        </>
    )
}

export default ShareIcon;