import React from 'react';
import Joke from './Joke';

function JokeItem ({ joke, vote }) {
	return <Joke text={joke.joke} id={joke.id} votes={joke.votes} vote={vote} />;
}

export default JokeItem;
