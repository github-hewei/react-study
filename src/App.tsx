import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  let [alertVisible, setAlertVisible] = useState(false);

  return (
    <div>
      <Alert visible={alertVisible} onClose={() => setAlertVisible(false)}>
        <span>This is a Alret !!!</span>
      </Alert>

      <Button color="success" onClick={() => setAlertVisible(true)}>
        Show Alret
      </Button>
    </div>
  );
}

export default App;
