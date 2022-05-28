import React from 'react';
import about from '../images/about.png'


export const AboutSection = () => {
  return (
    <>
        <section class="about" id="about">
        <div class="max-width">
            <h2 class="title">About LightHouse</h2>
            <div class="about-content">
                <div class="column left">
                    <img src={about} alt=""/>
                </div>
                <div class="column right">
                    <div class="text"><span>MentorShip Like never Before</span></div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ut voluptatum eveniet doloremque
                        autem excepturi eaque, sit laboriosam voluptatem nisi delectus. Facere explicabo hic minus
                        accusamus alias fuga nihil dolorum quae. Explicabo illo unde, odio consequatur ipsam possimus
                        veritatis, placeat, ab molestiae velit inventore exercitationem consequuntur blanditiis omnis
                        beatae. Dolor iste excepturi ratione soluta quas culpa voluptatum repudiandae harum non.</p>
                    <a href="/aboutpage">View More</a>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
