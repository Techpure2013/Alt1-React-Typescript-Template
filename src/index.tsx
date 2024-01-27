import ReactDOM from "react-dom/client";
import { AltGuard } from "./alt1";
import { MantineProvider } from "@mantine/core";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <MantineProvider>
    <AltGuard />
  </MantineProvider>
);
