import heroImage from "../../assets/cut-outs2.png";
const Welcome = () => {
    return (
        <>
        <div className="wrapper">
        <div className="container-hero">
          <div className="intro">
            <h3 className="title">Welcome to Our</h3>
            <h1
            className="h1-hero">DESIGN & ARCHITECTURE STUDIO</h1>
            <div className="btn-wrapper">
              <button className="btn-round-pink">GET IN TOUCH</button>
            </div>
          </div>
          <div className="image-hero">
            <img src={heroImage} alt="Hero Image" />
          </div>
        </div>
      </div>
        </>
    );
    }

export default Welcome;