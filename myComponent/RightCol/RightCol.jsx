import React from 'react';

import rightcol from './RightCol.module.css';

import Posts from './Posts/Posts';

import Informer from './Informer/Informer';

const RightCol = () => {

return (

<div className={rightcol.RightCol}>



<Posts />

<Informer />




</div>

);

};

export default RightCol;