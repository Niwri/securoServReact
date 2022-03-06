import React from 'react'
import './devicePage.css';
import { data } from '../../data/data.js';


const index = () => {

    var timeInfo = require('../../userData/login_and_account_creation/login_activity.json').account_history_login_history;

    var deviceInfo = require('../../userData/device_information/devices.json').devices_devices;
    let deviceCount = deviceInfo.length;

  return (
    <div className="page">
        <h1>Devices</h1>

        <h3>Information Collected by Instagram between...<br/>
            {timeInfo[timeInfo.length-1].title} to {data.uploadDate}.</h3> 
        <p><span style={{fontWeight: 'bold'}}>Total Number of Registered Devices: </span>{deviceCount}</p>

        <table className="deviceTable">
            <tr>
                <th colspan="3" style={{fontWeight: 'bold', fontSize: 25}}>List of Registered Devices</th>
            </tr>
            <tr>
                <th style={{fontWeight: 'bold'}}>Device ID</th>
                <th style={{fontWeight: 'bold'}}>Company</th>
                <th style={{fontWeight: 'bold'}}>Model</th>
            </tr>
            {deviceInfo.map((device) => {
                let regEx = /[\S]+;/g;
                let sections = device.string_map_data['User Agent'].value.match(regEx);
                let company = sections[3].substring(0, sections[3].length-1);
                let model = sections[4].substring(0, sections[4].length-1);

                return (
                    <tr>
                        <th>{device.string_map_data['Device ID'].value}</th>
                        <th>{company}</th>
                        <th>{model}</th>
                    </tr>
                )
            })}
        </table>

    </div>
  )
}

export default index