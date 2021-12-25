import SinglePost from "../../components/singlePost/SinglePost";
import "./single.css";
import SideBar from "../../components/sidebar/SideBar";
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

export default function Single() {
    const location = useLocation();
    const pathName = location.pathname.split("/")[2];
    const [post, setPost] = useState({});
    useEffect(() => {
        const getPost = async () => {
            const res = await  axios.get("/posts/" + pathName);
            setPost(res.data);
        }
        getPost();
    }, [pathName])
    return (
        <div className="single">
            <SinglePost post={post} />
            <SideBar />
        </div>
    );
}