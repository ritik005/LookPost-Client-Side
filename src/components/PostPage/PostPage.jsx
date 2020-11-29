import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { isAuth } from "../../helper/auth";
import Navbar from "../Navbar/Navbar";
import Cards from "../Cards/Cards";
import Post from "../Post/Post";

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
      <Grid container spacing={16}>
        <Grid item sm={8} xs={12}>
          <Cards post= {post} />
        </Grid>
        <Grid item sm={4} xs={12}>
        
        </Grid>
        
      </Grid>
    </>
  );
};

export default PostPage;
