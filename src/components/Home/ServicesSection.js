import React from 'react'

export const ServicesSection = () => {
  return (
    <div>
        <section class="services" id="services">
        <div class="max-width">
            <h2 class="title">Our Services</h2>
            <div class="serv-content">
                <div class="card">
                    <div class="box">
                        <i class="fas fa-paint-brush"></i>
                        <div class="text">Be a Mentor</div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quia sunt, quasi quo illo enim.
                        </p>
                    </div>
                </div>
                <div class="card">
                    <div class="box">
                        <i class="fas fa-chart-line"></i>
                        <div class="text">Get Mentorship</div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quia sunt, quasi quo illo enim.
                        </p>
                    </div>
                </div>
                 {/* <div class="card">
                    <div class="box">
                        <i class="fas fa-code"></i>
                        <div class="text">Admin</div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quia sunt, quasi quo illo enim.
                        </p>
                    </div>
                </div> */}
            </div>
        </div>
    </section>
    </div>
  )
}
