import React from 'react'
import {Query} from "react-apollo";
import Loader from "./Loader";
import GroupRow from "./GroupRow";
import GroupBar from "./GroupBar";
import MY_GROUPS_QUERY from "../graphql/query/myGroups";

function HomeSideBar(){
    return(
        <GroupBar>
            <Query query={MY_GROUPS_QUERY}>
                {({data, loading, error }) => {
                    if (loading) return <Loader/>;
                    if (error) return <p>error</p>;
                    const { myGroups } = data;
                    return(
                        <>
                            {
                                myGroups.map((group) => {
                                    return(
                                        <GroupRow key={group.id} group={group}/>
                                    )
                                })
                            }
                        </>
                    )
                }}
            </Query>
        </GroupBar>
    )
}

export default HomeSideBar
