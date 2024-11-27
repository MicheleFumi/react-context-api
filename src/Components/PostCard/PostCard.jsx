import { useState, useEffect, useContext } from 'react'
import PostContext from '../../context/PostContext'




const url = 'http://localhost:3000'
const endpoint = '/post/'

export default function PostCard() {

    const [blogDataApi, setBlogDataApi] = useState({})
    const { PostList } = useContext(PostContext)
    function fetchData() {
        fetch(`${url}${endpoint}`)
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


        fetch(`${url}${endpoint}${titleToRemove}`, {
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
        <PostList blogDataApi={blogDataApi} url={url} handleRemoveTitle={handleRemoveTitle} />

    )

}