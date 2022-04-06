import React, {useEffect, useState} from 'react';
import { getNewsFeed } from '../../api/newsFeed';
import './newsFeed.css';


const NewsFeeds = () => {

  const [newsFeed, setNewsFeed] = useState([]);


  useEffect(() => {
    getAllNewsFeed();
  },[])


  const getAllNewsFeed = async () => {

    const response = await getNewsFeed();
    console.log(response.data.articles);
    setNewsFeed(response.data.articles);

  }

  return (
    <div className='newsFeed__container'>
      {
        newsFeed.map((news) => (
          <a href={news.url}>
            <div className='newsFeed__container-news'>
        <img src={news.urlToImage} alt={news.author} />
        <p className='headline'>{news.description}</p>
      </div>
          </a>
          
        ))
      }
      
    </div>
  )
}

export default NewsFeeds