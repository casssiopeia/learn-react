import React, { useState, useEffect} from "react";
import { Post } from "./Post";

export const Child = () => {

    // const [, rerender] = useState({});
    // const [posts, setPosts] = useState([]);

    // const [counter, setCounter] = useState(0);

    // // Сработает только на mount - useEffect с пустым массивом

    // useEffect(() => {
    //     console.log("USE EFFECT!");

    //     const func = (event) => {
    //         console.log('KEY PRESSED');
    //     }

    //     window.addEventListener('keypress', func);

    //     // fetch('https://jsonplaceholder.typicode.com/posts')
    //     // .then((rawData) => rawData.json())
    //     // .then((data) => setPosts(data));

    //     return () => { // Сработает на Unmount 
    //         console.log('UNMOUNT');

    //         window.removeEventListener('keypress', func);
    //     };

    // }, []);

    // console.log("RENDER CHILD!!!");

    // return (
    // <div>
    //     <h2>Hi There</h2>
    //     <h3>Counter: {counter} </h3>
    //     <button onClick={() => setCounter(counter + 1)}>+</button>
    //     <button onClick={() => setCounter(counter - 1)}>-</button>
    //     <button onClick={() => rerender({})}>Rerender click</button>
    // </div>
    // );

    const [posts, setPosts] = useState([]);

    useEffect(() => {
    
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then((rawPosts) => rawPosts.json())
            .then((posts) => setPosts(posts));
    
    }, []);

        return (
            <div>
                { posts.map((post) => <Post {...post} key = {post.id} />)}
            </div>
        );
};