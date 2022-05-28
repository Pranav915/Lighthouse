import React from 'react'
import "./Browse.scss"

export const Browse = () => {
  return (
    <div className="Browse">
    <div class="card-container">
	{/* <span class="pro">PRO</span> */}
	<img class="round" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
	<h3>Ricky Park</h3>
	<h6>New York</h6>
	<p>User interface designer and <br/> front-end developer</p>
	<div class="buttons">
		<button class="primary">
			Book A Session
		</button>
		{/* <button class="primary ghost">
			Following
		</button> */}
	</div>
	<div class="skills">
		<h6>Mentorship In</h6>
		<ul>
			<li>JEE</li>
			<li>Placements</li>
			{/* <li>HTML</li>
			<li>CSS</li>
			<li>JavaScript</li>
			<li>React</li>
			<li>Node</li> */}
		</ul>
	</div>
</div>       
    </div>
  )
}
