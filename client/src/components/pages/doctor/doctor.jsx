import React, {useState} from 'react';
import axios from 'axios';
// import "./doctor.css"
import Sidebar from "../../Sidebar/Sidebar";
import Header from "../home/navbar";
import { NavLink } from 'react-router-dom';
function Doctor() {
  const [Docname,setDocname] = useState('');
  const [docSpec,setSpec] = useState();
  const [docExper,setExper] = useState();
  const [Docemail,setDocemail] = useState(' ');
  const [Docno, setDocno] = useState();
  const [docentries, setDocEntries] = useState([]);
  const [city, setcity] = useState();

  const addItem = async() => {
    //  e.preventDefault();
    
     try {
       const res = await axios.post(`http://localhost:4000/Doc/doctor`,
       {
        doctorName: Docname,
       
        doctorSpecilization:docSpec,
        YearofExperienc:docExper,
        doctorEmail:Docemail,
        doctorNumber:Docno,
        place:city
      })
        console.log(res.data);
        console.log(Docname);
        setDocEntries((prev) => [...prev, res.data]);
        console.log(docentries);
        

     } catch (error) {
       console.error(error);
     }
   }
  
  return (
    <>
      <Sidebar/>
    <main class="form-signin ">
  <form action="/docForm" method="post">    
    <h1 class="h3 mb-3 mb-4 fw-normal">Doctor Form </h1>   

    <div class="form-floating">
      <input type="text" name="dname" class="form-control bottom" id="floatingInput1" placeholder="Patient Full name:" onChange={(e)=>{setDocname(e.target.value)}} required autoFocus/>
      <label for="floatingInput1">Doctor Full name:</label>
    </div>
    
    <div class="form-floating">
      <input type="text" name="spec" class="form-control bottom" id="floatingInput2" onChange={(e)=>{setSpec(e.target.value)}} placeholder="Speclization"required/>
      <label for="floatingInput2">Speclization</label>
    </div>
    <div class="form-floating">
        <input type="number"  min="5" name="year"class="form-control bottom" id="yaer"onChange={(e)=>{setExper(e.target.value)}} placeholder="Year_of_Experience"required/>
        <label for="year">Year of Experience</label>
    </div>
    <div class="form-floating">
      <input type="email" name="demail"class="form-control bottom" id="email" onChange={(e)=>{setDocemail(e.target.value)}}placeholder="Doctor Email id"required/>
      <label for="email">Doctor Email id</label>
  </div>
    <div class="form-floating">
      <input type="tel" name="dnumber"class="form-control bottom" id="tel" onChange={(e)=>{setDocno(e.target.value)}}placeholder="doctor_phone_number"required/>
      <label for="tel">Doctor Phone Number</label>
  </div>
    
    
    <div>
      <select name="state" id="state"  onChange={(e)=>{setcity(e.target.value)}}class="form-control bottom ">
        <option value="">State / UT *</option>
                                    <option value="Andaman">Andaman &amp; Nicobar Islands</option>
                                    <option value="Andhra_Pradesh">Andhra Pradesh</option>
                                    <option value="Arunachal_Pradesh">Arunachal Pradesh</option>
                                    <option value="Assam">Assam</option>
                                    <option value="Bihar">Bihar</option>
                                    <option value="Chandigarh">Chandigarh</option>
                                    <option value="Chattisgarh">Chattisgarh</option>
                                    <option value="Dadra_Nagar_Haveli">Dadra &amp; Nagar Haveli</option>
                                    <option value="Daman_Diu">Daman &amp; Diu</option>
                                    <option value="Goa">Goa</option>
                                    <option value="Gujarat">Gujarat</option>
                                    <option value="Haryana">Haryana</option>
                                    <option value="Himachal_Pradesh">Himachal Pradesh</option>
                                    <option value="Jammu_Kashmir">Jammu and Kashmir</option>
                                    <option value="Jharkhand">Jharkhand</option>
                                    <option value="Karnataka">Karnataka</option>
                                    <option value="Kerala">Kerala</option>
                                    <option value="Ladakh">Ladakh</option>
                                    <option value="Lakshadweep">Lakshadweep</option>
                                    <option value="Madhya_Pradesh">Madhya Pradesh</option>
                                    <option value="Maharashtra">Maharashtra</option>
                                    <option value="Manipur">Manipur</option>
                                    <option value="Meghalaya">Meghalaya</option>
                                    <option value="Mizoram">Mizoram</option>
                                    <option value="Nagaland">Nagaland</option>
                                    <option value="NCR">NCT OF Delhi</option>
                                    <option value="Odisha">Odisha</option>
                                    <option value="Puducherry">Puducherry</option>
                                    <option value="Punjab">Punjab</option>
                                    <option value="Rajasthan">Rajasthan</option>
                                    <option value="Sikkim">Sikkim</option>
                                    <option value="Tamil_Nadu">Tamil Nadu</option>
                                    <option value="Telangana">Telangana</option>
                                    <option value="Tripura">Tripura</option>
                                    <option value="Uttar_Pradesh">Uttar Pradesh</option>
                                    <option value="Uttarakhand">Uttarakhand</option>
                                    <option value="West_Bengal">West Bengal</option>
                            </select>
                            {console.log()}
    </div>


   
    <button class="w-100 btn btn-lg btn-primary" type="submit" onClick={e => {addItem(e.preventDefault())}}>Add as Doctor </button>
    <p class="mt-5 mb-3 text-muted">&copy; hostpital</p>
  </form>
</main>
      

    
    </>
  )
}

export default Doctor
