import "./Why.scss";
import content from "../../utills/text-content";

function Why() {
  return (
    <section className="box" id="what">
      <div className="circular-blue"></div>
      <div className="orange-border"></div>
      <div className="orange-border-second"></div>
      <div className="orange-circ"></div>
      <div className="why-header">
        <h2>Why Interview Pals</h2>
        <h3>i-Learning UI Kit works with Figma software</h3>
      </div>
      <div className="benefits-box">
        {content.benefits.map((benefit) => {
          return (
            <div className="benefit" key={benefit.NAME}>
              <div className={`benefit-icon ${benefit.NAME}`}></div>
              <p className="benefit-header">{benefit.HEADER}</p>
              <p className="benefit-desc">{benefit.DESCRIPTION}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Why;
