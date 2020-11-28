import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { isAuth } from "../../helper/auth";
import Navbar from "../Navbar/Navbar";
import Post from "../Post/Post";

import "./PostPage.css";

const url = "http://localhost:5000";

const PostPage = () => {
  const [post, postSet] = useState([]);

  useEffect(() => {
    async function fetchPost() {
      const fullResponse = await fetch(`${url}/api/ques`);
      const responseJson = await fullResponse.json();
      postSet(responseJson);
    }
    fetchPost();
  }, []);

  return (
    <>
      <Navbar />
      <div class="container">
        {isAuth() ? <Post /> : null}
        {post.map((post) => (
          <div className="row">
            <div className="col-lg-8 mb-4">
              <div className="card mt-2">
                <div className="card-body">
                  <h4 className="card-title">Title: {post.title}</h4>
                  <p className="card-text">Description: {post.description}</p>
                  <p>Tags: 
                    <small> {post.tags}</small>
                  </p>
                  <p className="card-text2"></p>
                  <a href="" className="btn btn-outline-success btn-sm mr-2">
                    Answer
                  </a>
                  <button
                    onClick={(post.uproveCount += 1)}
                    className="btn btn-outline-primary btn-sm"
                  >
                    <i className="fa fa-heart"></i>
                    {post.uproveCount}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
     
    </>
  );
};

export default PostPage;
