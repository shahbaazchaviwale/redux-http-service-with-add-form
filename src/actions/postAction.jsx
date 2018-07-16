import axios from "axios";

//=======================================
    // created each dispatch functions
//=======================================

//=======================================
    // " fetchPost " called at POST.JSX page
//=======================================

export const fetchPost = () => dispatch =>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((posts) => {          
             
            dispatch({
                type: 'FETCH_POST', payload: posts.data 
            });
        }).catch((error) => {
            console.log('Error => ', error);
        });
}
//=======================================
    // " createPost " called at POSTFORM.JSX page
//=======================================
export const createPost = (postData) => dispatch =>{
    axios.post("https://jsonplaceholder.typicode.com/posts", { postData })
      .then(post => {    
          let combined_2_objects = Object.assign({ id: post.data.id }, post.data.postData);
          dispatch({ 
              type: "NEW_POST", payload: combined_2_objects
             });
        }).catch((error) => {
            console.log('Error => ', error);
        });
}