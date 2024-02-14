import React, { useState, useEffect } from 'react';
import { api_path } from '../index';

function CreateNewGroup() {
    return (
        <form action={api_path + '/api/groups/create'} method="post">
            <div className="list-group-item d-flex align-items-center px-0">
                <label htmlFor="new_group_name" className="text-light form-label text-nowrap">New group:</label>
                <input type="text" id="new_group_name" name="new_group_name" className="form-control" required placeholder="Enter group name"></input>
                <button className="btn text-light btn-main-dark-blue" type="submit">Create</button>
            </div>
        </form>
    )
}

function SingleGroup({ single_group_data }) {

    return (
        <li class="list-group-item d-flex align-items-center">
            <div class="ms-2 me-auto">
                <div class="fw-bold">{single_group_data.name}</div>
            </div>
            <span class="btn text-light btn-main-dark-blue">Delete</span>
        </li>
    );
}
function GroupsList() {

   const [groups, setGroups] = useState([]);

    useEffect(() => {
        fetch(api_path + '/api/groups/all')
            .then(res => res.json())
            .then(data => {
                setGroups(data);
            })
    }, []);

    return (
        <div className="card">
            <ul class="list-group">
            {groups.map((group) => (
                <SingleGroup
                key={group.id}
                single_group_data={group}/>
            ))}
            </ul>
        </div>
    );
}

function GroupsManager() {
    return (
        <div className="container">
            <CreateNewGroup />
            <GroupsList />
        </div>
    );
}

export default GroupsManager;