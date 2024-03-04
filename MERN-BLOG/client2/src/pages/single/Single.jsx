import "./single.css";
import Sidebar from "../../components/sidebar/Sidebar";
import SinglePost from "../../components/Singlepost/SinglePost";

export default function Single() {
  return (
    <div className="single">
      <Sidebar /> 
      <SinglePost/>
    </div>
  );
}
