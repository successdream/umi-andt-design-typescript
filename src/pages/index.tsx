import yayJpg from '../assets/yay.jpg';
import LoginOut from '@/components/LoginOut';
export default function HomePage() {
  return (
    <div>
      <div><LoginOut /></div>
      <h2>Yay! Welcome to umi!</h2>
      <div>我是pages下的index组件</div>
      <p>
        <img src={yayJpg} width="388" />
      </p>
      <p>
        To get started, edit <code>pages/index.tsx</code> and save to reload.
      </p>
    </div>
  );
}
