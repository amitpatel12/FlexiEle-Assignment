import React from "react";
import pic from "../../image/profile.png";
import "./Post.css";
import '../Details/Details.css'

const Post = (props) => {
  let id = 1;
  const type = props.type
  const handleDrag = (e,index) => {
    e.dataTransfer.setData("index",index);
    e.dataTransfer.setData("type",type);
    
    console.log("dragging started...");
  };
  
  return (
    <div className="" >
      {props.data.map((item, index) => {
        return (
          <div className="post" key={index} draggable onDragStart={(e)=>handleDrag(e,index)}>
            <div className="image">
              <img src={item.img} alt="picture" />
            </div>
            <div className="post-details">
              <div className="name">
                Name: <span>{item.name}</span>
              </div>
              <div className="location">
                Loaction: <span>{item.location}</span>
              </div>
              <div className="applied_date">
                Date: <span> {item.date}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Post;
