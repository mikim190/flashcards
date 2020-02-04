import React, { useState, useCallback } from 'react';
import ReactCardFlip from 'react-card-flip';

import Question from './question';
import Answer from './answer';

const Flashcard = ({ flashcard }) => {
    const [isFlipped, setIsFlipped] = useState( false);
    const handleFlip = useCallback((e) => {
        e.preventDefault();
        setIsFlipped(!isFlipped);
    }, [isFlipped, setIsFlipped]);

    return (
        <ReactCardFlip
            isFlipped={isFlipped}
            flipDirection="horizontal"
        >
         <Question question={flashcard.question} handleFlip={handleFlip} />
         <Answer answer={flashcard.answer} handleFlip={handleFlip} />
        </ReactCardFlip>
    );
};

export default Flashcard;
