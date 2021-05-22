import React from "react";
import styled from "styled-components";

const FormContainer = styled.form`
  width: 300px;
  display: inline-block;
  border: 1px solid #ccc;
  margin-right: 50px;
  margin-top: 20px;
  border-radius: 8px;
  padding: 10px;
  vertical-align: top;
  h3 { 
    margin: 0 0 20px;
    border-bottom: 1px solid #bbb;
    padding-bottom: 10px;  
  }
  label, input { display: inline-block }
  label { width: 150px; }
  > div {
    margin-bottom: 5px;
  }
`;

export default function DataForm({customData, setData}) {
  function changeProperty(e) {
    console.log(e.target.name, e.target.value);
    setData({...customData, [e.target.name]: e.target.value })
  }

  return (
    <FormContainer>
      <h3>UBAH Data</h3>
      <div>
        <label htmlFor="companyName">Nama Perusahaan</label>
        <input onChange={changeProperty} type="text" name="companyName" value={customData.companyName}/>
      </div>
      <div>
        <label htmlFor="name">Nama</label>
        <input onChange={changeProperty} type="text" name="name" value={customData.name}/>
      </div>
      <div>
        <label htmlFor="position">Jabatan</label>
        <input onChange={changeProperty} type="text" name="position" value={customData.position}/>
      </div>
      <div>
        <label htmlFor="phone">Nomor HP</label>
        <input onChange={changeProperty} type="text" name="phone" value={customData.phone}/>
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input onChange={changeProperty} type="text" name="email" value={customData.email}/>
      </div>
      <div>
        <label htmlFor="website">Website</label>
        <input onChange={changeProperty} type="text" name="website" value={customData.website}/>
      </div>
    </FormContainer>
  )
}