import React from 'react'
import './commentPage.css';

import { data } from '../../data/data.js';

const index = () => {

  var timeInfo = require('../../userData/login_and_account_creation/login_activity.json').account_history_login_history;

  var commentInfo = require('../../userData/comments/post_comments.json').comments_media_comments;
  let totalComment = commentInfo.length;

  return (
    <div className="page">
        <h1>Stories</h1>

        <div className="commentContainer">  
          <div>
              <h3>Information Collected by Instagram between...<br/>
                  {timeInfo[0].title} to {data.uploadDate}.</h3> 
              <p><span style={{fontWeight: 'bold'}}>Total Number of Comments: </span>{totalComment}</p>
          </div>

          <table className="commentTable">
              <tr>
                  <th colspan="2"> <h2 style={{marginTop: 50}}>Comment List</h2> </th>
              </tr>
              <tr >
                  <th style={{fontWeight: 'bold'}}>Poster</th>
                  <th style={{fontWeight: 'bold'}}>Your Comment</th>
              </tr>
              {commentInfo.map((comment) => {
                console.log(comment.title);
                  return (
                      <tr>
                          <th>{comment.title}</th>
                          <th>{comment.string_list_data.map((commentNext) => {
                            return <p style={{margin: 0}}>{commentNext.value}</p>
                          })}</th>
                      </tr>
                  )
              })}
          </table>
        </div>

    </div>
  )
}

export default index;