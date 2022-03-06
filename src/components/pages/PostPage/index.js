import React from 'react';
import './postPage.css';

import { data } from '../../data/data.js';
import weeklyPostGraph from './images/weeklyPostGraph.png';

const index = () => {

  var timeInfo = require('../../userData/login_and_account_creation/login_activity.json').account_history_login_history;

  var postViewInfo = require('../../userData/ads_and_content/posts_viewed.json').impressions_history_posts_seen;
  let totalPost = postViewInfo.length;

  var videoViewInfo = require('../../userData/ads_and_content/videos_watched.json').impressions_history_videos_watched;
  let totalVideo = videoViewInfo.length;
  let postCount = 0;
  try {
    var postInfo = require('../../userData/past_instagram_insights/posts.json');
    postCount = postInfo.length;
  } catch (err) {
    postCount = 0;
  }

  return (
    <div className="page">
        <h1>Posts</h1>
        <div className="postPageContainer">
            <div>
                
                <h3>Information Collected by Instagram between...<br/>
                    {timeInfo[timeInfo.length-1].title} to {data.uploadDate}.</h3> 
                <p><span style={{fontWeight: 'bold'}}>Total Number of Viewed Posts: </span>{totalPost}</p>
                <p><span style={{fontWeight: 'bold'}}>Total Number of Posted Posts: </span>{postCount}</p>

                <p><span style={{fontWeight: 'bold'}}>Total Number of Viewed Videos: </span>{totalVideo}</p>
            </div>
            <img src={weeklyPostGraph} alt=""/>
        </div>
    </div>
  )
}

export default index