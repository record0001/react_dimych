import React from 'react';

import posts from './Posts.module.css';

import Post from './Post/Post';


const Posts = () => {

return (

<div className={posts.Block}>

Посты

<Post />
<Post />
<Post />
<Post />
<Post />

</div>

);

};

export default Posts;