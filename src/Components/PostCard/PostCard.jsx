import { useState, useEffect, useContext } from 'react'

import SinglePostCard from './SinglePostCard'

import PostContext from '../../context/PostContext'

export default function PostCard() {
    const { PostListApiUrl, baseApiUrl } = useContext(PostContext)
    const [blogDataApi, setBlogDataApi] = useState({})

    function fetchData() {
        fetch(PostListApiUrl)
            .then(resp => resp.json())
            .then(data => {
                console.log(data);

                setBlogDataApi(data)
            }
            )
    }
    useEffect(fetchData, [])


    function handleRemoveTitle(titleToRemove) {



        console.log(titleToRemove);


        fetch(`${PostListApiUrl}${titleToRemove}`, {
            method: 'DELETE',
            headers: {
                'content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
                setBlogDataApi(prevData => ({
                    ...prevData,
                    data: prevData.data.filter(post => post.id !== titleToRemove),
                }));
            })

    }



    return (
        <div className="row">
            {blogDataApi.data ? (
                blogDataApi.data.map((post, index) => (
                    <SinglePostCard post={post} key={index} url={baseApiUrl} handleRemoveTitle={() => handleRemoveTitle(post.id)} />

                ))
            ) : (
                <p>Nessuna ricetta trovata.</p>
            )}
        </div>

    )

}