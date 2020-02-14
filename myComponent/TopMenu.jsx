import React from 'react';

import top_menu from './../myCss/TopMenu.module.css';
//import './../myCss/TopMenu.css';

const TopMenu = () => {

return (

    <div className={top_menu.TopMenu}>
        

            <div><a href="/#">TopMenu</a></div>
            <div><a href="/#">User ico</a></div>
            <div><a href="/#">User name</a></div>
            <div><a href="/#">User status</a></div>
            <div><a href="/#">Вход/Регистрация</a></div>
        


    </div>

);

};

export default TopMenu;