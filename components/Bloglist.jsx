// Bloglist.jsx
import React from "react";
import Blogitem from "./Blogitem";

const Bloglist = ({ blogs, onEdit, onDelete }) => {
    return (
        <ul>
            {blogs.map((blog) => (
                <Blogitem 
                    key={blog._id} 
                    blog={blog} 
                    onEdit={onEdit} 
                    onDelete={onDelete} 
                />
            ))}
        </ul>
    );
};

export default Bloglist;
