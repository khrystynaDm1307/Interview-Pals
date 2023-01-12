import "./Process.scss";

function Proccess() {
  return (
    <section className="proccess-box" id="proccess">
      <h2>The process</h2>
      <h3>We've made it super simple for you! Check out these steps below?</h3>
      <div className="steps-box">
        <div className="left-steps">
          <div className="step">
            <p className="step-header">Sign up</p>
            <p className="step-desc">
              Create an account and verify your details
            </p>
          </div>
          <div className="step"></div>
          <div className="step">
            <p className="step-header">Search the database</p>
            <p className="step-desc">
              Look through our database of experts and find the best match for
              you
            </p>
          </div>
          <div className="step"></div>
          <div className="step">
            <p className="step-header">Feedback</p>
            <p className="step-desc">
              Sit back, relax and wait your feedback to arrive. Play back the
              video to fine tune your future performance and get that job!
            </p>
          </div>
        </div>
        <div className="tree"></div>
        <div className="rigth-steps">
          <div className="step"></div>
          <div className="step">
            <p className="step-header">Create a career profile</p>
            <p className="step-desc">
              Fill in your career details and optionally upload your CV.
            </p>
            <p className="step-hint">
              The more information you provide, the better the interviewer will
              analyse you, leading to a more effective practice interview
              session
            </p>
          </div>
          <div className="step"></div>
          <div className="step">
            <p className="step-header">Schedule the interview</p>
            <p className="step-desc">
              Once you found a match and agreed the fee and duration with our
              interviewer, use your built in scheduler to schedule the video
              call
            </p>
          </div>
          <div className="step"></div>
        </div>
      </div>
      <div className="mobile-proccess">
      
        <div className="step">
        <div className="step-number">1</div>
          <p className="step-header">Sign up</p>
          <p className="step-desc">Create an account and verify your details</p>
        </div>
      
        <div className="step">
        <div className="step-number">2</div>
          <p className="step-header">Create a career profile</p>
          <p className="step-desc">
            Fill in your career details and optionally upload your CV.
          </p>
          <p className="step-hint">
            The more information you provide, the better the interviewer will
            analyse you, leading to a more effective practice interview session
          </p>
        </div>
    
        <div className="step">
        <div className="step-number">3</div>
          <p className="step-header">Search the database</p>
          <p className="step-desc">
            Look through our database of experts and find the best match for you
          </p>
        </div>
  
        <div className="step">
        <div className="step-number">4</div>
          <p className="step-header">Schedule the interview</p>
          <p className="step-desc">
            Once you found a match and agreed the fee and duration with our
            interviewer, use your built in scheduler to schedule the video call
          </p>
        </div>
     
        <div className="step">
        <div className="step-number">5</div>
          <p className="step-header">Feedback</p>
          <p className="step-desc">
            Sit back, relax and wait your feedback to arrive. Play back the
            video to fine tune your future performance and get that job!
          </p>
        </div>
      </div>
    </section>
  );
}

export default Proccess;
