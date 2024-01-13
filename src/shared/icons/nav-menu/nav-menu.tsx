import style from './nav-menu.module.scss'

export const NavMenu = () => {
    return (
        <svg className={style.svg} width="30" height="20" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 2H20H2ZM2 8H20H2ZM2 14H20H2Z" fill="white"/>
        <path d="M2 2H20M2 8H20M2 14H20" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )
  }
  