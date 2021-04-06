import * as React from "react";

// Components
import { HomepageTitle } from "../Components/HomepageTitle";

// Semantic-UI
import { Segment } from "semantic-ui-react";

// Theme changer
const hour = new Date().getHours();

if (hour >= 18 || hour <= 7) {
  document.documentElement.setAttribute("data-theme", "dark");
} else {
  document.documentElement.setAttribute("data-theme", "light");
}

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
