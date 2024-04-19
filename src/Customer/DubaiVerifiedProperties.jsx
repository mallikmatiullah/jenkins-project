import Footer from "../Footer/Footer";
import NavBar from "../NavBar/Navbar";
import comingsoon from "../assets/coming-soon.jpg";

function DubaiVerifiedProperties() {
    return (
        <>
            <NavBar />
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "7%" }}>
                <img
                    src={comingsoon}
                    alt="image 1"
                    style={{
                        maxHeight: "60%",
                        width: "50%",
                    }}
                />
            </div>
            <Footer />
        </>
    )
}

export default DubaiVerifiedProperties