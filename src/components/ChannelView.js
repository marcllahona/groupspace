import React from 'react';
import PropTypes from "prop-types";
import {Redirect, Route, Switch} from 'react-router-dom';

function ChannelView({children}) {
    return (
        <div>
            {
                children
            }
        </div>
    );
}

ChannelView.propTypes = {

};

export default ChannelView;
