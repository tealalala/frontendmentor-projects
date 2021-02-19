import React from 'react';
import '../index.css';

const Content = () => {
    return(
      <div className="item item-3">
        <section className="content-body">
          <h1>
            All your files in one secure location, accessible anywhere.
          </h1>
          <p className="subheader">
            Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends, family and co-workers.
          </p>

          <div className="cta">
            <div className="cta-text">
              Sign up for early access
            </div>
            <div className="signup">
              <input type="text" name="cta-signup" className="cta-signup"/>
              <input type="submit" className="signup-button" value="Sign Up"/>
            </div>
          </div>
        </section>

        <footer className="footer">
          <a href="https://github.com">Privacy Policy</a>
        </footer>
      </div>
    );
};

export default Content;
