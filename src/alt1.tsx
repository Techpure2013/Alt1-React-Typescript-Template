import { Button, MantineProvider } from "@mantine/core";
import App from "./App";
import { useState } from "react";

const getAlt1Href = () => {
  const repoName = window.location.host.includes("localhost:8080")
    ? ""
    : "RS3QuestBuddy/";
  const prodSuffix = window.location.host.includes("localhost") ? "" : ".prod";
  return `alt1://addapp/${window.location.protocol}//${window.location.host}/${repoName}appconfig${prodSuffix}.json`;
};

export const AltGuard = () => {
  const [override, setOverride] = useState(false);

  if (window.alt1 || override) {
    return (
      <MantineProvider>
        <App />
      </MantineProvider>
    );
  }

  return (
    <div className="App">
      <h1>ALT1 not found</h1>
      <p>
        Click <a href={getAlt1Href()}>here</a> to add this to alt1
      </p>
      <Button onClick={() => setOverride(true)}>View Website Anyway</Button>
    </div>
  );
};
