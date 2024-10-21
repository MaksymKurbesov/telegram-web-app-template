import {AppShell, Avatar} from '@mantine/core';
import styles from './AppLayout.module.css';
import {Outlet} from 'react-router-dom';
import Menu from "../sharedUI/Menu/Menu";
import {Progress} from '@mantine/core';


const AppLayout = () => {
  return (
      <div className={styles['app-layout']}>
        <header className={styles['header']}>
          <div className={styles['user-info']}>
            <Avatar size={"sm"} src={null}/>
            <span className={styles['user-nickname']}>Pachka</span>
          </div>
          <div className={styles['progress']}>
            <p>Lvl 3 <span>3 / 10</span></p>
            <Progress size="sm" value={60} striped animated/>
          </div>

        </header>
        <div className={styles['content-wrapper']}>
          <Outlet/>
        </div>

        <footer>
          <Menu/>
        </footer>
      </div>
  );
};

export default AppLayout;