import {Link} from "react-router-dom";
import "./singlePost.css";

export default function SinglePost({post}) {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                {
                    post.photo && (
                        <img
                            className="singlePostImg"
                            src={post.photo}
                            alt=""
                        />
                    )
                }
                <h1 className="singlePostTitle">
                    {post.title}
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"/>
                        <i className="singlePostIcon far fa-trash-alt"/>
                    </div>
                </h1>
                <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to={`/posts?user=${post.username}`}>
                  {post.username}
                </Link>
            </b>
          </span>
                    <span>{new Date(post.createdAt).toDateString()}</span>
                </div>
                <p className="singlePostDesc">
                    {post.desc}
                </p>
            </div>
        </div>
    )
}