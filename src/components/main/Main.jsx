import "./Main.scss";

function Main() {
  return (
    <>
      <section className="main-box" id="main">
        <div className="circul"></div>
        <div className="circul-border"></div>
        <div className="text-box">
          <div className="header-box">
            <div
            className="header-box-logo"
              style={{ display: "flex", width: "100%", alignItems: "center" }}
            >
            </div>
            <h1>Interview Pals</h1>
          </div>

          <div className="list-box">
            <div className="btns">
              <button>Download on iOS</button>
              <button>Download on Android</button>
            </div>
          </div>
        </div>
        <div className="phone-box">
          <div className="phone-body"></div>
          <div className="phone"></div>
        </div>
      </section>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#257AC8"
          fillOpacity="1"
          d="M0,128L48,133.3C96,139,192,149,288,144C384,139,480,117,576,90.7C672,64,768,32,864,53.3C960,75,1056,149,1152,176C1248,203,1344,181,1392,170.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
    </>
  );
}

export default Main;
