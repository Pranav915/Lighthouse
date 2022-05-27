import React from 'react'
import { AboutSection } from './AboutSection'
import { HomeNavbar } from './HomeNavbar'
import { HomeSection } from './HomeSection'
import "./Home.css";
import { ServicesSection } from './ServicesSection';
import { ContactSection } from './ContactSection';
import { FooterSection } from './FooterSection';

export const Home = () => {
  return (
    <div>
        <HomeNavbar/>
        <HomeSection/>
        <AboutSection/>
        <ServicesSection/>
        <ContactSection/>
        <FooterSection/>
    </div>
  )
}
