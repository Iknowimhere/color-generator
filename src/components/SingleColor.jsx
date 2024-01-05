import { toast } from "react-toastify";

export const SingleColor = ({ color, index }) => {
  const { hex, weight } = color;
  const copyToClipBoard = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success("Color copied to Clipboard");
      } else {
        toast.error("Failed to copy to clipboard");
      }
    } catch (error) {}
  };
  return (
    <article
      className={index > 10 ? "color color-light" : "color"}
      style={{ backgroundColor: `#${hex}` }}
      onClick={copyToClipBoard}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>#{hex}</p>
    </article>
  );
};
