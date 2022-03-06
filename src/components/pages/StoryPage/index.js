import React from 'react'
import { data } from '../../data/data.js';

const index = () => {

  var timeInfo = require('../../userData/login_and_account_creation/login_activity.json').account_history_login_history;

  var storyInfo = require('../../userData/content/stories.json').ig_stories;
  var storyCount = storyInfo.length;

  return (
    <div className="page">
        <h1>Stories</h1>

        <h3>Information Collected by Instagram between...<br/>
            {timeInfo[timeInfo.length-1].title} to {data.uploadDate}.</h3> 
        <p><span style={{fontWeight: 'bold'}}>Total Number of Stories: </span>{storyCount}</p>

    </div>
  )
}

export default index