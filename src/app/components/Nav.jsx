import React from 'react'

const Nav = () => {
  return (
    <div className='container mx-auto'>
        <nav className='flex justify-between items-center m-4'>
                <a href=""><img className='w-24' src="./Logo.png" alt="Logo" /></a>
            <ul className='flex justify-end'>
                <li><a className='mx-8' href="#">Iniciar Sesión</a></li>
                <li><a className='mr-8' href="#">Crear Cuenta</a></li>
                <li><a className='icon__social' href="#"><i class="fa-brands fa-instagram mx-2"></i></a></li>
                <li><a className='icon__social' href="#"><i class="fa-brands fa-facebook-f mx-2"></i></a></li>
                <li><a className='icon__social' href="#"><i class="fa-solid fa-x mx-2"></i></a></li>
            </ul>
        </nav>
    </div>
  )
}
export default Nav