import banner from '../../assets/banner.png';

import './headerStyle.css';

const Header = () => {
  return (
    <header className="header container-fluid p-0">
      <img className='banner img-fluid' src={banner} alt="Banner" />
    </header>
  )
}

export default Header