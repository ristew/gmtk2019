import React, { useState } from 'react';

DIALOGUE_RESPONSES = ['yes', 'no', 'maybe', 'what'];

const Player = ({ progressDialogue, canTalk }) => {

    const { progressDialogue } = props;
    const [options, setOptions] = useState (['yes', 'no', 'maybe', 'what']);
    
    const reload = () => {
        setOptions(DIALOGUE_RESPONSES);
    };

    
    const reloadCheck = () => {
        if (!options.length) {
            reload();
        }
    };

    const submitDialogue = (option) => (e) => {
        progressDialogue(option);
        setOptions(options.filter(opt => opt !== option));
        reloadCheck()
    };

    const mappedChoices = options.map((option) => {
        switch(option) {
            case 'yes':
                return (
                    <div onClick={ submitDialogue('yes') } className='dialogue-option'>
                        <h2>Yes.</h2>;
                    </div>);
            case 'no':
                return (
                    <div onClickclassName='dialogue-option'>
                        <h2>No.</h2>
                    </div>);
            case 'maybe':
                return (
                    <div className='dialogue-option'>
                        <h2>...Maybe...</h2>;
                    </div>);
            case 'what':
                return (
                    <div className='dialogue=option'>
                        <h2>What?</h2>
                    </div>);
        };
    })
    if (!canTalk) return null;
    return (
        <div className='player Box'>
            { mappedChoices}
        </div>
    );
}

export default Player;
