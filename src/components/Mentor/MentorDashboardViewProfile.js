import React from "react";
import './MentorDashboardViewProfile.scss';
import { Helmet } from "react-helmet";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { set } from "mongoose";

export const MentorDashboardViewProfile = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    name: "",
    age: "",
    gender: "",
    mobile: "",
    qualification: "",
    category: "",
    about: "",
  });
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [mobile, setMobile] = useState("");
  const [qualification, setQualification] = useState("");
  const [category, setCategory] = useState("");
  const [about, setAbout] = useState("");
  const [call1, setCall1] = useState(false);
  const [call2, setCall2] = useState(false);
  const [call3, setCall3] = useState(false);



  const onsele1 = async (event) => {
    const response = await fetch("http://localhost:5000/api/viewprofile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token")
        },
        body: JSON.stringify({

        }),
      });
      const res = await response.json();
      console.log(res.mentor);
      setName(res.mentor.name);
      setAge(res.mentor.age);
      setEmail(res.mentor.email);
      setGender(res.mentor.gender);
      setMobile(res.mentor.mobile);
      setQualification(res.mentor.qualification);
      setCategory(res.mentor.category);
      setAbout(res.mentor.about);
      setCall1(res.mentor.call1);
      setCall2(res.mentor.call2);
      setCall3(res.mentor.call3);
      console.log(name);
      console.log(age);
      console.log(gender);
      console.log(mobile);
      console.log(name);
      console.log(name);
      console.log(name);
   
  };
  

  const onsele = async (event) => {
    
    const response = await fetch("http://localhost:5000/api/updateprofile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // "auth-token": localStorage.getItem("token")
        },
        
        body: JSON.stringify({
          name: name,
          email: email,
          age: age,
          gender: gender,
          mobile: mobile,
          qualification: qualification,
          category: category,
          about: about,
          call1: call1,
          call2: call2,
          call3: call3,
        }),
        
      });
      console.log("update");
      console.log("update");
      const res = await response.json();
      console.log(res.mentor);
      setName(res.mentor.name);
      setAge(res.mentor.age);
      setEmail(res.mentor.email);
      setGender(res.mentor.gender);
      setMobile(res.mentor.mobile);
      setQualification(res.mentor.qualification);
      setCategory(res.mentor.category);
      setAbout(res.mentor.about);
      setCall1(res.mentor.call1);
      setCall2(res.mentor.call2);
      setCall3(res.mentor.call3);
      console.log(name);
      console.log(age);
      console.log(gender);
      console.log(mobile);
      console.log(name);
      console.log(name);
      console.log(name);
      // console.log(response.mentor);

    // const response = await fetch("http://localhost:5000/api/mentorDashboardviewProfile", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     // "auth-token": localStorage.getItem("token"),
    //   },
    //   body: JSON.stringify({
    //     name: profile.name,
    //     age: profile.age,
    //     gender: profile.gender,
    //     mobile: profile.mobile,
    //     qualification: profile.qualification,
    //     category: profile.category,
    //     about: profile.about,
    //   }),
    // });
    // setProfile({
    //   name: "",
    //   age: "",
    //   gender: "",
    //   mobile: "",
    //   qualification: "",
    //   category: "",
    //   about: "",
    // });
    // const res = await response.json();
    // if (res.success) {
    //   navigate("/viewprofile");
    // }
    // console.log(res);
  };

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setProfile((prevProf) => {
  //     return {
  //       ...prevProf,
  //       [name]: value,
  //     };
  //   });
  // };

  useEffect(() => {
    onsele1();
  }, [])

  const handleName = (event) => {
    const { name, value } = event.target;
    setName(value);
  };

  function func1(){
    setCall1(true); 
    setCall2(false); 
    setCall3(false)
  }

  function func2(){
    setCall1(false); 
    setCall2(true); 
    setCall3(false)
  }

  function func3(){
    setCall1(false); 
    setCall2(false); 
    setCall3(true)
  }

  return (
    <> 
<div className="MentorDashboardViewProfile">
<body>
<div className="container" style={{'minHeight':'100%','margin':'50px 0px'}}>
<div className="border-right" style={{'display':'flex'}}>
<div style={{'width':'50%'}}>
<h1 style={{'fontSize':'40px','margin':'50px 10px 10px 60px'}}>Profile Page</h1>
<hr style={{'height':'8px','marginLeft':'50px','background':'linear-gradient(-135deg, #71b7e6, #9b59b6)'}} />
</div>
    <div className="d-flex flex-column align-items-center text-center p-3 py-5" style={{'width':'50%','marginLeft':'0px','paddingLeft':'120px'}}>
        <img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/><span> </span>
      
    </div>
</div>
    
    <div className="content">
      <form action="#">
        <div className="user-details">
          <div className="input-box">
            <span className="details">Name</span>
            <input type="text" className="name" value={name} onChange={event=>setName(event.target.value)}/>
          </div>
          <div className="input-box">
            <span className="details">Age</span>
            <input type="number" min={0} value={age} onChange={event=>setAge(event.target.value)}/>
          </div>
          <div className="input-box">
            <span className="details">Qualification</span>
            <input type="text" value={qualification} onChange={event=>setQualification(event.target.value)}/>
          </div>
          <div className="input-box">
            <span className="details">Phone Number</span>
            <input type="phone" maxLength={10} value={mobile} onChange={event=>setMobile(event.target.value)} />
          </div>
          <div className="input-box">
            <label htmlFor="category" style={{'fontWeight':'500'}}>Category</label>
            <select name="category" id="category" value={category} onChange={event=>setCategory(event.target.value)} className="details" style={{'marginTop':'5px','width':'300px','height':'45px','borderRadius':'5px','borderWidth':'2px','borderColor':'#9b59b6'}}>
              <option value="Entrance">Entrance</option>
              <option value="Placements">Placements</option>
              <option value="HigherEducation">Higher Education</option>
            </select>
          </div>
          <div className="input-box">
            <span className="details">About</span>
            <input type="textarea" value={about} onChange={event=>setAbout(event.target.value)}/>
          </div>
        </div>
        <div className="gender-details">
          <input type="radio" name="gender" id="dot-1" checked={call1} onChange={func1} /> 
          <input type="radio" name="gender" id="dot-2" checked={call2} onChange={func2} />
          <input type="radio" name="gender" id="dot-3" checked={call3} onChange={func3} />
          <span className="gender-title">Gender</span>
          <div className="category">
            <label htmlFor="dot-1">
            <span className="dot one"></span>
            <span className="gender">Male</span>
          </label>
          <label htmlFor="dot-2">
            <span className="dot two"></span>
            <span className="gender">Female</span>
          </label>
          <label htmlFor="dot-3">
            <span className="dot three"></span>
            <span className="gender">Prefer not to say</span>
            </label>
          </div>
        </div>
        <div className="button">
          <input type="submit" value="Save Changes" onClick={onsele}/>
        </div>
      </form>
    </div>
  </div>

</body>
</div>
    </>
  );
};