function HomePage() {

    return (
    <div>
        <div className="flexbox-container">
            <div className="flexbox-item-nameinfo">
            <div className="fullname">Erik Ertmann</div>
            <div className="info-with-name">I'm a blablabla from Tartu, Estonia</div></div>
            <img className="flexbox-item-image" src="https://www.upload.ee/image/14743660/319643355_523223803190947_5287792033886948790_n-removebg-preview.png" alt="Alternative Text"/>    
        </div>

        <div className="socials">
            <div>
                <a href= "https://www.linkedin.com/in/erik-ertmann-ab330322b/" rel="noreferrer" target="_blank">
                <img className="social" src={require("../images/linkedincolour.png")} alt=""></img></a>
            </div>
            <div>    
                <a href= "https://github.com/ErikErtmann" rel="noreferrer" target="_blank">
                <img className="social" src={require("../images/ajutinegithubcolour.png")} alt=""></img></a>
            </div>
            <div>
                <a href= "https://www.facebook.com/ErikErtmann/" rel="noreferrer" target="_blank">
                <img className="social" src={require("../images/facebookcolour.png")} alt=""></img></a>
            </div>
        </div>
        <div className="box"></div>
    </div>
    );
}

export default HomePage;