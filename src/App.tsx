import { Blockquote, Button, Group, Stack, Text } from "@mantine/core";
import { useStore } from "./store/store";
import ImageSearch from "./components/ImageSearch";
import Chatbox from "./components/Chatbox";

function App() {
  const store = useStore();
  return (
    <main style={{ height: "100%" }}>
      <Chatbox />
      <ImageSearch />
      <Stack>
        <Text>{store.example.counter}</Text>
        <Group>
          <Button onClick={() => store.example.increase(1)}>Increase</Button>
          <Button onClick={() => store.example.increase(-1)}>Decrease</Button>
        </Group>
      </Stack>
      <Stack>
        <Blockquote cite={`-- ${store.example.msg.author}`}>
          {store.example.msg.quote}
        </Blockquote>

        <Button onClick={() => store.example.getMsg()}>Get Message</Button>
      </Stack>
      <Stack>
        <Text>{store.other.counter}</Text>
        <Group>
          <Button onClick={() => store.other.increase(1)}>Increase</Button>
          <Button onClick={() => store.other.increase(-1)}>Decrease</Button>
        </Group>
      </Stack>
      <Stack>
        <Text>{store.other.msg}</Text>

        <Button onClick={() => store.other.newMsg()}>New Message</Button>
      </Stack>
    </main>
  );
}

export default App;
