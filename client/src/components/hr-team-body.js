import React from "react";
import PropTypes from "prop-types";
import {
    Button,
    Icon,
    Divider
} from "semantic-ui-react";

export const HRTeamBody = (props) => {
    return (
        <div className='mt-4'>
            <div className='row pl-3'>
                <Button
                    basic
                    onClick={props.clickHandler}
                >
                    <Icon name='download' className="mr-3" />
                    Download All
                </Button>
            </div>
            <div className='mt-3'>
                <Divider />
            </div>
        </div>
    )
}

HRTeamBody.propTypes = {
    clickHandler: PropTypes.func.isRequired
}