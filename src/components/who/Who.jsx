import "./Who.scss";

function Who() {
  return (
    <article className="who-box" id="who">
      <div className="circular"></div>
      <div className="small-orange-circ"></div>
      <div className="smaller-orange-circ"></div>
      <img src="successful-job-interview-2022-02-02-18-29-04-utc.jpg" class="img-who" alt="" />
      {/* <div className="image-box"></div> */}
      <div className="who-text-box">
        <h2>Who We Are</h2>
        <img src="successful-job-interview-2022-02-02-18-29-04-utc.jpg" class="img-who-2" alt="" />
        <h3>
          We are just like you. We have been in these situations before, tried
          and failed. We decided to do something about it and create an
          empowering community to ensure nobody has to go through the same
          motions as we did. To ensure people are armed with the correct tools,
          attitude and behaviour while setting in this very important journey of
          hunting for that all important dream job of excellent salary,
          benefits, position and location. And we will prevail
        </h3>
      </div>
    </article>
  );
}

export default Who;
