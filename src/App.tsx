import React, {useEffect} from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import { userSlice } from './store/reducers/UserSlice';
import { fetchUsers } from './store/reducers/ActionCreator';
import PostsContainer from './components/PostsContainer';
import PostsContainer2 from './components/PostsContainer2';



function App() {

  const {users, isLoading, error} = useAppSelector(state => state.userReducer)
  // const {increment, decrement} = userSlice.actions;
  const dispatch = useAppDispatch()

  useEffect ( ()=>{
    dispatch(fetchUsers())
  }, [])

  return (
    <div className="App">
      {/* {isLoading && <h1> Идет загрузка</h1>}
      {error && <h1>{error}</h1>}
       */}
      {/* {JSON.stringify(users, null, 2)} */}

      {/* {users.map(user => 
            <div key={user.id} > {user.id}) {user.name} {user.phone} {user.email}</div>
         )} */}

      {/* <h1>{count}</h1>
      <button onClick={()=>dispatch(increment(5))}>increment</button>
      <button onClick={()=>dispatch(decrement(5))}>decrement</button> */}
      <div className="container">
              <PostsContainer/>

      </div>
      {/* <div style={{display:'flex'}}>
      
      <PostsContainer2/>

      </div> */}
      
    </div>
  );
}

export default App;
