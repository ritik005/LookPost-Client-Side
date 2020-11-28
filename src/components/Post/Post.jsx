import React, {useState} from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from 'axios';
import { getCookie } from "../../helper/auth";
const url = "http://localhost:5000";

export default function Post() {
  const token = getCookie('token');
 const [formfield, setformfield] = useState({
  title: "",
  description: "",
  tags: "",
 });
 const {title, description, tags} = formfield;
 const handleChange = (text) => (e) => {
  setformfield({ ...formfield, [text]: e.target.value })
 };
  const handleSubmit = (e) => {
   e.preventDefault();
   if (title && tags && description) {
     axios
       .post(`${url}/api/ques`,{
         title,
         description,
         tags,
       },  { headers: { 'Content-Type': 'application/json','x-auth-token': token } })
       .then((res) => {
         toast.success("Post created successfully!");
         setformfield({
           ...formfield,
           title: "",
           description: "",
           tags: "",
         });
       })
       .catch((err) => {
         toast.error("Please again sign In");
       });
   } else {
     toast.error("Please enter all details");
   }
 };
  return (
   <>
   <ToastContainer />
    <div className="row">
      <div className="col-md-3 login-form-1">
      
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Post Query</legend>
            <div class="form-group">
              <label for="exampleInputEmail1">Title</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={handleChange('title')}
                value={title}
             
              />
              <small id="emailHelp" class="form-text text-muted">
                Enter a short title for your query.
              </small>
            </div>
            <div class="form-group">
              <label for="exampleTextarea">Description</label>
              <textarea
                class="form-control"
                id="exampleTextarea"
                rows="3"
                onChange={handleChange('description')}
                value={description}
              ></textarea>
              <small id="emailHelp" class="form-text text-muted">
                Enter a brief description for the query{" "}
              </small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Tags</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputPassword1"
                onChange={handleChange('tags')}
                value={tags}
                
              />
              <small id="emailHelp" class="form-text text-muted">
                Mention the tags for your query.
              </small>
            </div>
            <div className="form-group">
                <input type="submit" className="btnSubmit" value="Post" />
              </div>
          </fieldset>
        </form>
      </div>
    </div>
    </>
  );
};
