import React, { useState } from 'react'
import logo from '../../images/logo.jpeg';
import chat from '../../images/chat.jpeg';
import user from '../../images/user.jpeg';
import menu from '../../images/menu.png';
import downArrow from '../../images/down-arrow.png';
import Dropdown from '../Dropdown';

const Header = ()  => {
const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(!isOpen)
  }

  const openDropdown = () => {
    setIsDropdownOpen((prev) => !prev)
  }

	return (
		<header className="bg-white sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3 shadow">
        <div className="flex items-center justify-between px-4 py-3 sm:p-0">
          <div className="sm:hidden px-2 pt-4 pb-4 sm:flex sm:p-0">
            <img className="h-6" src={user} alt="Workcation" />
          </div>
          <div>
            <img className="h-10 lg:h-12 sm:h-8" src={logo} alt="Workcation" />
          </div>
          <img className="h-8 block sm:hidden lg:hidden mt-1 block px-2 py-1 text-black rounded hover:bg-gray-100 sm:mt-0 sm:ml-2 " src={chat} alt="Workcation" />
          <div className="sm:hidden">
            <button onClick={openMenu} type="button" className="block text-gray-500 hover:text-black focus:text-white focus:outline-none">
              <img className="h-8 menu-open" src={menu} alt="menu"></img>
            </button>
          </div>
        </div>
        <nav className={isOpen ? 'items-center block px-2 pt-4 pb-4 sm:flex sm:p-0' : 'hidden px-2 pt-4 pb-4 sm:flex sm:p-0'}>
          <a href="/#" className="block px-8 py-1 text-black rounded hover:bg-gray-100">Zertificate</a>
          <a href="/#" className="mt-1 block px-8 py-1 text-black  rounded hover:bg-gray-100 sm:mt-0 sm:ml-2">Merkliste</a>
          <a href="/#" className="mt-1 block px-8 py-1 text-black rounded hover:bg-gray-100 sm:mt-0 sm:ml-2">Hilfe & FAQ</a>
          <div class="relative">
            <a href="/#" className="inline-block mt-1 block px-8 py-1 text-black rounded hover:bg-gray-100 sm:mt-0 sm:ml-2" onClick={openDropdown}>Profil<img className="h-1 inline px-1" alt="Workcation" src={downArrow} /></a>
            {isDropdownOpen && <Dropdown />}
          </div>
					<img className='hidden xl:block md:block lg:block sm:hidden xs:hidden mt-1 px-10 py-1 h-6 ' src={chat} alt="chat" />
		     </nav>
      </header>
	)
}

export default Header;
