import React from 'react';
import { postsAPI } from '../services/PostsService';
import {PostItem} from './PostItem';

const PostsContainer2 = () => {
    const {data: posts, error ,isLoading } = postsAPI.useFetchAllPostsQuery(10)
    return (
        <div>
            {/* <div className="post__list">
            {isLoading && <h1> Идет загрузка...</h1>}
            {error && <h1>Произошла ошибка!</h1>}
                {posts && posts.map(post=>
                    <PostItem remove={handleRemove} update={handleUpdate} post={post}/>
                    )}
            </div> */}
        </div>
    );
};

export default PostsContainer2;