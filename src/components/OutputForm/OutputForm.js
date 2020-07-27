import React from "react";

const OutputForm = (props) => {
    const {output} = props;
    return (
        <div>
            {
                output.h !== 'error' ? <>
                    <div>H: {output.h}</div>
                    <div>K: {output.k}</div>
                </> : <div>Error</div>
            }
        </div>
    )
}

export default OutputForm;
