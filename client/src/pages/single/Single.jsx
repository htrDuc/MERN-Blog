import SinglePost from "../../components/singlePost/SinglePost";
import "./single.css";
import SideBar from "../../components/sidebar/SideBar";

export default function Single() {
    return (
        <div className="single">
            <SinglePost />
            <SideBar />
        </div>
    );
}