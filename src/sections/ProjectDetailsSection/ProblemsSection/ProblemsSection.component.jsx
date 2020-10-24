import React from "react";

import "./ProblemsSection.style.scss";

const ProblemsSection = () => {
  return (
    <section className="problems__container" id="problems">
      <div className="problems__header">Problems and their Solution</div>
      <div className="problems__subtitle__container">
        <div className="problems__subtitle">
          Funnily enough, Routing gave me a lot of trouble for this app. I’m
          hosting this project on GitHub-Pages and it apparently doesn’t like
          routing very much, at all.
          <br />
          My initial approach was that, when one of our SideBar elements was
          clicked, it would set a URL of ‘collection/element’, which our
          element’s page view would then reference to our firestore collection
          to grab our data from the backend. For instance, clicking ‘Card’ in
          the ‘Components’ collection would set the URL to ‘components/Card’.
          <br />
          Not a really bad approach, but in this case, it didn’t work out due to
          github-pages’ aforementioned dislike of deeper routing. (I solved the
          “/” error caused by GitHub-Pages appending our repository name to the
          end of our URL by adding a ‘baseName’ value to our BrowserRouter
          component by the way, check out src/index.js to see what I mean)
          <br />
          In order to allow our page to work correctly and populate with info, I
          had to redo that approach to where clicking the sidebar would simply
          set state that was once again referenced to our firestore collection.
          This got rid of us using a nested URL eg: “/components/CustomButton/”
          became “/components”.
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
