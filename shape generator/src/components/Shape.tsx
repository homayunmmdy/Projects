interface ShapeProps {
    width : string;
    height : string;
    shape : string
}
const Shape = ({ width, height, shape }: ShapeProps) => {
  let style = {};
  switch (shape) {
    case 'rectangle':
      style = {
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: 'blue',
      };
      break;
    case 'circle':
      style = {
        width: `${width}px`,
        height: `${height}px`,
        borderRadius: '50%',
        backgroundColor: 'red',
      };
      break;
    case 'triangle':
      style = {
        width: '0',
        height: '0',
        borderLeft: `${width}px solid transparent`,
        borderRight: `${width}px solid transparent`,
        borderBottom: `${height}px solid green`,
      };
      break;
    default:
      break;
  }

  return <div className="m-4" style={style}></div>;
};

export default Shape;