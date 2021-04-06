import * as React from "react";

// Components
import { HomepageTitle } from "../Components/HomepageTitle";

// Semantic-UI
import { Segment } from "semantic-ui-react";

export const Home: React.FC = () => {
  return (
    <>
      <Segment vertical className="segment-fullheight">
        <HomepageTitle />
      </Segment>
    </>
  );
};

export default Home;
