import "../components/css/HomeP.css";

function HomePage() {
    return (
    <div className="home" id="home">
        <div className="flexbox-container">
            <div className="flexbox-item-nameinfo">
                <div className="fullname">Erik Ertmann</div>
                <div className="info-with-name">I'm a blablabla from Tartu, Estonia</div>
                <div className="socials">
                    <a href= "https://www.linkedin.com/in/erik-ertmann-ab330322b/" rel="noreferrer" target="_blank">
                    <img className="social" src={require("../images/linkedincolour.png")} alt=""/>
                    </a>
                    <a href= "https://github.com/ErikErtmann" rel="noreferrer" target="_blank">
                    <img className="social" src={require("../images/ajutinegithubcolour.png")} alt=""/>
                    </a>
                    <a href= "https://www.facebook.com/ErikErtmann/" rel="noreferrer" target="_blank">
                    <img className="social" src={require("../images/facebookcolour.png")} alt=""/>
                    </a>
                </div>
                <div className="box"></div>   
            </div> 
            <img className="flexbox-item-image" src="https://www.upload.ee/image/14747181/319172197_886314719228597_8227624229910881166_n-removebg-preview.png" alt="ERROR"/>
        </div>
    </div> 
    );
}

export default HomePage;