import { FiPhone, FiMail } from 'react-icons/fi';

function Header() {
  return (
    <header className="header">
      <h1 className="header__name">Xingyu Yang</h1>
      <p className="header__role">Full-Stack Developer</p>
      <div className="header__contacts">
        <span className="header__contact-item">
          <FiPhone />
          +86 15757460183
        </span>
        <span className="header__contact-item">
          <FiMail />
          <a href="mailto:isyangxingyu@foxmail.com">isyangxingyu@foxmail.com</a>
        </span>
      </div>
    </header>
  );
}

export default Header;
