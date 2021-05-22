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

export default function DesignForm({customStyles, setColor}) {
  function changeProperty(e) {
    console.log(e.target.name, e.target.value);
    setColor({...customStyles, [e.target.name]: e.target.value })
  }

  return (
    <FormContainer>
      <h3>UBAH DESAIN</h3>
      <div>
        <label htmlFor="backgroundSideBack">Background Belakang</label>
        <input onChange={changeProperty} type="color" name="backgroundSideBack" value={customStyles.backgroundSideBack}/>
      </div>
      <div>
        <label htmlFor="backgroundSideFront">Background Depan</label>
        <input onChange={changeProperty} type="color" name="backgroundSideFront" value={customStyles.backgroundSideFront}/>
      </div>
      <div>
        <label htmlFor="borderColor">Warna Garis</label>
        <input onChange={changeProperty} type="color" name="borderColor" value={customStyles.borderColor}/>
      </div>
      <div>
        <label htmlFor="companyColor">Warna Perusahaan</label>
        <input onChange={changeProperty} type="color" name="companyColor" value={customStyles.companyColor}/>
      </div>
      <div>
        <label htmlFor="nameColor">Warna Nama</label>
        <input onChange={changeProperty} type="color" name="nameColor" value={customStyles.nameColor}/>
      </div>
      <div>
        <label htmlFor="positionColor">Warna Posisi</label>
        <input onChange={changeProperty} type="color" name="positionColor" value={customStyles.positionColor}/>
      </div>
      <div>
        <label htmlFor="contactColor">Warna Kontak</label>
        <input onChange={changeProperty} type="color" name="contactColor" value={customStyles.contactColor}/>
      </div>
    </FormContainer>
  )
}