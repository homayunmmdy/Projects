interface ShapeProps {
    width : string;
    height : string;
    shape : string;
    color : string;
}
const Shape = ({ width, height, shape , color}: ShapeProps) => {
  let style = {};
  switch (shape) {
    case 'rectangle':
      style = {
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: color,
      };
      break;
    case 'circle':
      style = {
        width: `${width}px`,
        height: `${height}px`,
        borderRadius: '50%',
        backgroundColor: color,
      };
      break;
    case 'triangle':
      style = {
        width: '0',
        height: '0',
        borderLeft: `${width}px solid transparent`,
        borderRight: `${width}px solid transparent`,
        borderBottom: `${height}px solid ${color}`,
      };
      break;
    case 'parallelogram':
      style = {
        width:`${width}px`,
        height: `${height}px`,
        transform: "skew(20deg)",
        background : color,
      };
      break;
    default:
      break;
  }

  return <div className="m-4" style={style}></div>;
};

export default Shape;