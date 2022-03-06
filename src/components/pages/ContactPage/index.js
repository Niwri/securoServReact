import React from 'react';
import './contactPage.css';
import { data } from '../../data/data.js';

function index() {

    var timeInfo = require('../../userData/login_and_account_creation/login_activity.json').account_history_login_history;
    
    var contactInfo = require('../../userData/contacts/synced_contacts.json').contacts_contact_info;
    var contactCount = contactInfo.length;
    
  return (
    <div className="page">
        <h1>Contacts</h1>
        <div className="contactContainer">
            <div>
                <h3>Information Collected by Instagram between...<br/>
                    {timeInfo[0].title} to {data.uploadDate}.</h3> 
                <p><span style={{fontWeight: 'bold'}}>Total Number of Registered Contacts: </span>{contactCount}</p>
            </div>

            <table className="contactTable">
                <tr>
                    <th colspan="2"> <h2 style={{marginTop: 50}}>Contact List</h2> </th>
                </tr>
                <tr >
                    <th style={{fontWeight: 'bold'}}>Name</th>
                    <th style={{fontWeight: 'bold'}}>Contact Info</th>
                </tr>
                {contactInfo.map((contact) => {
                    return (
                        <tr>
                            <th>{contact.string_map_data['First Name'].value + " " + contact.string_map_data['Last Name'].value}</th>
                            <th>{contact.string_map_data['Contact Information'].value}</th>
                        </tr>
                    )
                })}
            </table>
        </div>
    </div>
  )
}

export default index