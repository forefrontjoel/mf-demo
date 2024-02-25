import { Button } from "@mui/material";
import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Button onClick={() => setCount(count + 1)}>Increment</Button>
      App: {count}
    </div>
  );
};

export default App;
