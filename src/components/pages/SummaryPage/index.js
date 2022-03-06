import React from 'react'
import './summaryPage.css';

const index = () => {


    var postViewInfo = require('../../userData/ads_and_content/posts_viewed.json').impressions_history_posts_seen;
    let totalPost = postViewInfo.length;

    var storyInfo = require('../../userData/content/stories.json').ig_stories;
    var storyCount = storyInfo.length;

    var contactInfo = require('../../userData/contacts/synced_contacts.json').contacts_contact_info;
    var contactCount = contactInfo.length;

    var commentInfo = require('../../userData/comments/post_comments.json').comments_media_comments;
    let totalComment = commentInfo.length;

    var advertiserInfo = require('../../userData/ads_and_businesses/advertisers_using_your_activity_or_information.json').ig_custom_audiences_all_types;
    let advertiserCount = advertiserInfo.length;

    var deviceInfo = require('../../userData/device_information/devices.json').devices_devices;
    let deviceCount = deviceInfo.length;

  return (
    <div className="page">
        <h1>Summary</h1>
        <p><span style={{fontWeight: 'bold'}}>Number of Posted Posts: </span>{totalPost}</p>
        <p><span style={{fontWeight: 'bold'}}>Number of Posted Stories: </span>{storyCount}</p>
        <p><span style={{fontWeight: 'bold'}}>Number of Registered Contacts: </span>{contactCount}</p>
        <p><span style={{fontWeight: 'bold'}}>Number of Comments: </span>{totalComment}</p>
        <p><span style={{fontWeight: 'bold'}}>Number of Advertisers Using Activity: </span>{advertiserCount}</p>
        <p><span style={{fontWeight: 'bold'}}>Number of Identified Devices: </span>{deviceCount}</p>

    </div>
  )
}

export default index