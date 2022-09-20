import img from "./images/img.png";

function Home(){
    return (
        <section id="home">
            <div className="content">
                <h1>be creative among cratives</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                <a href="#services"><button className="color">get started</button></a>
            </div>
            <div className="image">
            <img src={img} alt="" />
            
            </div>

            <a href="#services"><div className="scroll-down"></div></a>
        </section>
    )
}

export default Home;