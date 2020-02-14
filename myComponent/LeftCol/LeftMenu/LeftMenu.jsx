import React from 'react';

import left_menu from './LeftMenu.module.css';

const LeftMenu = () => {

return (

<div className={left_menu.LeftMenu}>

<div><a href="/#">Главная</a></div>
<div><a href="/#">Игры</a></div>
<div><a href="/#">Фото</a></div>
<div><a href="/#">Фильмы</a></div>
<div><a href="/#">Развлечения</a></div>

</div>

);

};

export default LeftMenu;