import img from "./images/img.png";
import img2 from "./images/javascript.png";
import img3 from "./images/html.png";
import img4 from "./images/css.png";
import img5 from "./images/img4.png";
import img6 from "./images/img3.png";


function Gallery() {
    return (
        <section id="gallery">

            <h1>Gallery</h1>

            <div className="image-container">
                <div className="image">
                    <img src={img} alt="" />
                    <div className="search-icon color">
                        <a href="#" className="fas fa-search"></a>
                    </div>
                </div>

                <div className="image">
                    <img src={img2} alt="" />
                    <div className="search-icon color">
                        <a href="#" className="fas fa-search"></a>
                    </div>
                </div>

                <div className="image">
                    <img src={img3} alt="" />
                    <div className="search-icon color">
                        <a href="#" className="fas fa-search"></a>
                    </div>
                </div>

                <div className="image">
                    <img src={img4} alt="" />
                    <div className="search-icon color">
                        <a href="#" className="fas fa-search"></a>
                    </div>
                </div>

                <div className="image">
                    <img src={img5} alt="" />
                    <div className="search-icon color">
                        <a href="#" className="fas fa-search"></a>
                    </div>
                </div>

                <div className="image">
                    <img src={img6} alt="" />
                    <div className="search-icon color">
                        <a href="#" className="fas fa-search"></a>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Gallery;