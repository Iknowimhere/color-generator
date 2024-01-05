import { useState } from "react";

const FormComponent = ({ addColor }) => {
  const [color, setColor] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(color);
  };
  return (
    <section className='container'>
      <form className='color-form' onSubmit={handleSubmit}>
        <h4>Color generator</h4>
        <input
          type='color'
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type='text'
          id='color'
          value={color}
          placeholder='#f21314'
          onChange={(e) => setColor(e.target.value)}
        />
        <button
          type='submit'
          className='btn'
          style={{ backgroundColor: color }}
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default FormComponent;
