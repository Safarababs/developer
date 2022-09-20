import color from "./images/color.jpg"

function Switcher(){
    return (
        <>
            <div className="theme">
                <div className="color-panel">
                    <ul>
                        <li style={{background: "#343cff"}}></li>
                        <li style={{background: "#f3300f"}}></li>
                        <li style={{background: "#6600cc"}}></li>
                        <li style={{background: "#cc0066"}}></li>
                        <li style={{background: "#343cff"}}></li>
                    </ul>
                </div>

                <div className="theme-toggler">
                    <img src={color} alt="" className="color"/>
                </div>
            </div>
        </>
    )
}

export default Switcher;