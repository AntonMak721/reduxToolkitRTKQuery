import React, { useState, useEffect} from 'react';
import { postsAPI } from '../services/PostsService';
import {PostItem} from './PostItem';
import {IPost} from '../models/IPost'

const PostsContainer = () => {
    const [limit, setLimit] = useState(50);
    const {data: posts, error ,isLoading,refetch } = postsAPI.useFetchAllPostsQuery(limit, { pollingInterval: 60000})
    const [ createPost, {}] = postsAPI.useCreatePostMutation()
    const [deletePost, {} ] = postsAPI.useDeletePostMutation()
    const [updatePost, {} ] = postsAPI.useUpdatePostMutation()
    
    useEffect(
        ()=>{
            // setTimeout( ()=>{
            //     setLimit(3)}, 
            //     2000
            // )
        }, []
    )

        const handleCreate = async() =>{
            const title = prompt()
            await createPost({title, body: title} as IPost)
        }
        const handleRemove = (post:IPost) => {
            deletePost(post)
        }
        const handleUpdate = (post:IPost) => {
            updatePost(post)
        }


    return (
        <div>
            <div className="post__list">
                {/* <button onClick={()=> refetch()}>refetch</button> */}
                <button onClick={handleCreate} className='button'>Add new post</button>
            {isLoading && <h1> Идет загрузка...</h1>}
            {error && <h1>Произошла ошибка!</h1>}
                {posts && posts.map(post=>
                    <PostItem remove={handleRemove} update={handleUpdate} post={post}/>
                    )}
            </div>
        </div>
    );
};

export default PostsContainer;