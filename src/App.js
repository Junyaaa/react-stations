import React from 'react';
import './App.css';
import {Header} from './Header';
import {Description} from './Description';
import {DogListContainer} from './DogListContainer';

const App = () => {
return (
<div className="App">
<Header title="Dog Pictures"/>
<Description Description="画像を説明する文です。"/>
<DogListContainer />
</div>
);
}

export { App }