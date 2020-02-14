import React from 'react';

import LeftMenu from './LeftMenu/LeftMenu';

import leftcol from './LeftCol.module.css';

const LeftCol = () => {

return (

<div className={leftcol.LeftCol}>

<div className={leftcol.leftcoltemp}>
LeftCol
</div>

<LeftMenu />

</div>

);

};

export default LeftCol;