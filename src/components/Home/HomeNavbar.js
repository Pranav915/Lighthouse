import React from 'react'

export const HomeNavbar = () => {
  return (
    <div>
        <nav class="navbar">
        <div class="max-width">
            <div class="logo"><a href="/">Med <span>Folio</span></a></div>
            <ul class="menu">
                <li><a href="#home" class="menu-btn">Home</a></li>
                <li><a href="#about" class="menu-btn">About</a></li>
                <li><a href="#services" class="menu-btn">Services</a></li>
                <li><a href="#contact" class="menu-btn">Contact</a></li>
                <li><a href="/login" class="menu-btn">Sign in</a></li>
                <li><a href="/signup" class="menu-btn">Sign up</a></li>
            </ul>
            <div class="menu-btn">
                <i class="fas fa-bars"></i>
            </div>
        </div>
    </nav>
    </div>
  )
}
