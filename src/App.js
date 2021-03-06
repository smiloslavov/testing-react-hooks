import React from "react";
import Home from "./Home";
import Speakers from "./Speakers";

export const ConfigContext = React.createContext();

const pageToShow = pageName => {
  if (pageName === "Home") return <Home />;
  if (pageName === "Speakers") return <Speakers />;
  return <div>Not Found</div>;
};

const configValue = {
  showSpeakerSpeakingDays: true,
  showSignMeUp: true,
  loggedInUserEmail: 'test@test.com'
}

const App = ({ pageName }) => {
  return (
      <ConfigContext.Provider value={configValue}>
        <div>
          {pageToShow(pageName)}
        </div>
      </ConfigContext.Provider>
    );
};

export default App;
