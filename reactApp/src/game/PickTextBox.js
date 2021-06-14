import React, { useState } from 'react';

function PickTextBox({ pick }) {
    return (
        <p className="choice">
            {pick ? `You picked ${pick}.` : `Pick your emoji!`}
        </p>
    );
}

export default PickTextBox;
