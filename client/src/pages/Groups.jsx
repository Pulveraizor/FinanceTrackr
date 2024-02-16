import React, { useState, useEffect } from 'react';
import { api_path } from '../index';

export function BackBtn({destination}) {
    return (
        <div className="container px-0 mb-3">
            <a href={destination} className="btn btn-main-dark-blue"> ← Back</a>
        </div>
    )
}
function CreateNewGroup() {
    return (
        <div className="container pb-5 px-0">
            <form className="" action={api_path + '/api/groups/create'} method="post">
                <div className="list-group-item d-flex flex-column px-0">
                    <label htmlFor="new_group_name" className="text-light form-label text-nowrap">New group:</label>
                    <div className="input-group d-flex">
                        <input type="text" id="new_group_name" name="new_group_name" className="form-control" required placeholder="Enter group name"></input>
                        <button className="btn text-light btn-main-dark-blue" type="submit">Create</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

function SingleGroup({ single_group_data, delete_btn_id }) {

    return (
        <form className="list-group-item d-flex align-items-center" action={api_path + '/api/groups/delete'} method="post">
            <div className="ms-2 me-auto">
                <div className="fw-bold">{single_group_data.name}</div>
            </div>
            <div>
                <input type="hidden" name="id" value={delete_btn_id} />
                <button type="submit" className="btn text-light btn-main-dark-blue">Delete</button>
            </div>
        </form>

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
        <div className="container bg-transparent px-0">
            <ul className="list-group">
            {groups.map((group) => (
                <SingleGroup
                key={group.id}
                single_group_data={group}
                delete_btn_id={group.id}
                />
            ))}
            </ul>
        </div>
    );
}

function GroupsManager() {
    return (
        <div className="cointainer h-100">
            <div className="h-100 d-flex flex-column justify-content-center ">
                <BackBtn destination={"/tracker"}/>
                <CreateNewGroup />
                <GroupsList />
            </div>
        </div>
    );
}

export default GroupsManager;