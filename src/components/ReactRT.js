import React, {useState} from "react"
import styled from 'styled-components'
import { useQuery } from '@apollo/react-hooks'
import { RTOPICS } from '../App'
import ChildRT from './ChildRT'

const Button = styled.button`
    background-color: black;
    border:none;
    border-radius: 3px;
    color: white;
    font-size: small;
    font-weight: 400;
    outline: none;
    padding: .5em;
    margin-bottom: .2em;
    text-transform: capitalize;
    width: 150px;
`
// To display all related topics of 'React' and respective stargazer count

const ReactRT = () => {
    const { loading, error, data } = useQuery(RTOPICS)

    // useState to send props to Child component
    const [relatedTopic, setRelatedTopic ] = useState([]);
    const [relatedTopicStars, setRelatedTopicStars] = useState([]);

    if (error) return <h1>{error.message}</h1>
    if (loading) return <h1>Loading...</h1>

    const reactRelatedTopics = data.react.relatedTopics;    

    // Clicking on each topic will get the nested queries and update the respective state
    const handleClick = (e) => {
        const value = e.target.dataset.id;
        const childRelated = data.react.relatedTopics[value].relatedTopics;
        let childRT = childRelated.map((topic) => topic.name )
        setRelatedTopic(childRT);
        let childStars = childRelated.map((topic) => topic.stargazers.totalCount )
        setRelatedTopicStars(childStars);       
    }   
    
    // Render React related topics in a list format
    return (
        <>        
        <ul>
            {(reactRelatedTopics.map( (topic, i)=>
            <li key={topic.id} > 
             <Button data-id={i} onClick={handleClick}>{topic.name}</Button>
             <span className='stars'>Stars:</span> {topic.stargazers.totalCount}
            </li>
            ))}
        </ul>       
        <ChildRT topicState={relatedTopic} starsState={relatedTopicStars}/>
        </>
    )
}

export default  ReactRT;