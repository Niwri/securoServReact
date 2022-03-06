import React from 'react'
import { data } from '../../data/data.js';
import './advertiserPage.css';

const index = () => {
    var timeInfo = require('../../userData/login_and_account_creation/login_activity.json').account_history_login_history;

    var advertiserInfo = require('../../userData/ads_and_businesses/advertisers_using_your_activity_or_information.json').ig_custom_audiences_all_types;

    let advertiserCount = advertiserInfo.length;

  return (
    <div className="page">
        <h1>Advertisers</h1>

        <h3>Information Collected by Instagram between...<br/>
            {timeInfo[timeInfo.length-1].title} to {data.uploadDate}.</h3> 
        <p><span style={{fontWeight: 'bold'}}>Total Number of Advertisers Using Your Information: </span>{advertiserCount}</p>

        <p style={{fontWeight: 'bold', marginBottom: 0}}>List of Advertisers Using Your Activity/Information</p>
        <ul className="listAdvertiser">
            {advertiserInfo.map((advertiser) => {
                return (
                <li>{advertiser.advertiser_name}</li>
                )
            })}
        </ul>
    </div>
  )
}

export default index