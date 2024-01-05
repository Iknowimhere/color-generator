import { useState } from "react";
import ColorList from "./components/ColorList";
import FormComponent from "./components/FormComponent";
import Values from "values.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [colors, setColors] = useState(new Values("#f15203").all(10));
  const addColor = (color) => {
    try {
      const colors = new Values(color).all(10);
      setColors(colors);
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <main>
      <FormComponent addColor={addColor} />
      <ColorList colors={colors} />
      <ToastContainer position='top-center' />
    </main>
  );
};
export default App;
