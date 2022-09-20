import img from "./images/img1.png";
import img2 from "./images/javascript.png";
import img3 from "./images/html.png";
import img4 from "./images/img1.png";
import img5 from "./images/img4.png";
import img6 from "./images/img3.png";

function Services(){
    return (
        <section id="services">
        <h1>services</h1>

        <div className="box-container">
            <div className="box color">
                <img src={img} alt="" />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </p>
            </div>
            <div className="box color">
                <img src={img2} alt="" />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </div>
            <div className="box color">
                <img src={img3} alt="" />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </div>
            <div className="box color">
                <img src={img4} alt="" />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </div>
            <div className="box color">
                <img src={img5} alt="" />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </div>
            <div className="box color">
                <img src={img6} alt="" />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </div>
        </div>

        </section>
    )
}

export default Services;