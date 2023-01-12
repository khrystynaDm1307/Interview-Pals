import { useEffect, useRef, useState } from "react";
import content from "../../utills/text-content";
import "./Testemonials.scss";

function Testemonials() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === content.comments.length - 1 ? 0 : prevIndex + 1
        ),
      5000
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <section className="testimonial" id="testemonials">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-none d-lg-block">
            <ol className="carousel-indicators tabs">
              <li
                className={`tab${index === 0 ? " active" : ""}`}
                onClick={() => {
                  setIndex(0);
                }}
              >
                <figure>
                  {/* <img
                    src="https://livedemo00.template-help.com/wt_62267_v8/prod-20823-one-service/images/testimonials-01-179x179.png"
                    className="img-fluid"
                    alt=""
                  /> */}
                  <div className="figure-1"></div>
                </figure>
              </li>
              <li
                className={`tab${index === 1 ? " active" : ""}`}
                onClick={() => {
                  setIndex(1);
                }}
              >
                <figure>
                  {/* <img
                    src="https://livedemo00.template-help.com/wt_62267_v8/prod-20823-one-service/images/testimonials-02-306x306.png"
                    className="img-fluid"
                    alt=""
                  /> */}
                      <div className="figure-2"></div>
                </figure>
              </li>
              <li
                className={`tab${index === 2 ? " active" : ""}`}
                onClick={() => {
                  setIndex(2);
                }}
              >
                <figure>
                  {/* <img
                    src="https://livedemo00.template-help.com/wt_62267_v8/prod-20823-one-service/images/testimonials-03-179x179.png"
                    className="img-fluid"
                    alt=""
                  /> */}
                      <div className="figure-3"></div>
                </figure>
              </li>
            </ol>
          </div>
          <div className="col-lg-6 d-flex justify-content-center align-items-center">
            <div className="carousel slide">
              <h3>WHAT OUR CLIENTS SAY</h3>
              <h2>Testimonials</h2>
              <div className="carousel-inner">
                {content.comments.map((comment, i) => {
                  return (
                    <div
                      className={`carousel-item ${index === i ? "active" : ""}`}
                    >
                      <div className={"quote-wrapper"}>
                        <p>{comment.description}</p>
                        <h3>{comment.name}</h3>
                      </div>
                    </div>
                  );
                })}
              </div>

              <ol className="carousel-indicators indicators">
                {content.comments.map((indicator, idx) => (
                  <li
                    key={idx}
                    className={`${index === idx ? "active" : ""}`}
                    onClick={() => {
                      setIndex(idx);
                    }}
                  ></li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testemonials;
