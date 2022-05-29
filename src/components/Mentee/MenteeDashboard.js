import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Select from 'react-select'
import { Browse } from './Browse';
import "./Browse.scss"
const MenteeDashboard = () => {
  const options = [
    { value: 'IAS', label: 'IAS' },
    { value: 'JEE', label: 'JEE' },
    { value: 'NEET', label: 'NEET' },
    { value: 'Engineer', label: 'Engineer'},
    { value: 'M.tech', label: 'M.tech'}
  ]
  const sty = {
    width: "25em",
    marginLeft: "25em"
  }
  const [results, setresults] = useState(<div></div>);
  const onsele = async (e) => {
    const que  = e.value;
    const response = await fetch("http://localhost:5000/api/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: que,
      }),
    });
    const res = await response.json();
    console.log(res.finds);
    const f = res.finds;
    const r = f.map( (find) => 
    <div className="Browse" style={{margin: "1em 1.2em 1em 1em"}}>
    <div class="card-container">
	{/* <span class="pro">PRO</span> */}
	<img class="round" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
	<h3>{find.name}</h3>
	<h6>New York</h6>
	{/* <p>User interface designer and <br/> front-end developer</p> */}
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
			<li>{find.qualification}</li>
			{/* <li>HTML</li>
			<li>CSS</li>
			<li>JavaScript</li>
			<li>React</li>
			<li>Node</li> */}
		</ul>
	</div>
</div>       
    </div>
    );
    console.log(r);
    setresults(r);
  }
  return (
    <div>
        <Sidebar />
        <div style={sty}><Select options={options} onChange={onsele}/></div>
        <div style={{margin: "1em 0em 0em 10em", display: "flex", flexWrap: "wrap"}}>{results}</div>
        
    </div>
  )
};

export default MenteeDashboard;