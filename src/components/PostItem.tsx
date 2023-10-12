import React,{FC} from 'react';
import { IPost } from '../models/IPost';

interface PostItemProps {
    post: IPost;
    remove: (post: IPost) => void;
    update: (post: IPost) => void;
}



export const PostItem:FC<PostItemProps> = ({post, remove, update}) => {

    const handleRemove= (event: React.MouseEvent) =>{
        event?.stopPropagation()
        remove(post);
    }
    const handleUpdate= (event: React.MouseEvent) =>{
        event?.stopPropagation()
        const title = prompt () || ''
        update ({...post,title})
    }

    return (
        <div  className='post' key={post.id}>
            {post.id}) {post.title}
            <div className="post__buttons">
                <button onClick={handleUpdate} className='button'>Update</button>
                <button onClick={handleRemove} className='button'>Delete</button>
            </div>
            
        </div>
    );
};

