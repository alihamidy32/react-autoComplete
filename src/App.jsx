import { useEffect, useState } from "react";
import InputAuto from "./inputAuto";
import "./App.css";

function App() {
  const [comment, setComment] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    handleComment();
  }, []);

  async function handleComment() {
    try {
      setLoading(true);
      await fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => setComment(json.map((item) => item.title)));
    } catch (error) {
      setLoading(false);
      throw new Error("something went wrong!");
    } finally {
      setLoading(false);
    }
  }

  const getSelectedVal = (value) => {
    console.log(value);
  };

  const getChanges = (value) => {
    console.log(value);
  };

  return (
    <>
      <InputAuto
        label="languages"
        placeholder="Keyword..."
        data={comment}
        loading={loading}
        onSelected={getSelectedVal}
        onChange={getChanges}
      />
    </>
  );
}

export default App;
