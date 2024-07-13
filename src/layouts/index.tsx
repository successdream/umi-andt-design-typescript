import { Link, Outlet } from 'umi';
import styles from './index.less';


export default function Layout() {
  return (
    <div className={styles.navs}>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/docs/docsfont">Docs</Link>
        </li>
        <li>
          <a href="https://github.com/umijs/umi">Github</a>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
