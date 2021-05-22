import React from "react";
import {CardNameContainer} from "./CustomCard.styled";

export default function CardName({ styles, data }) {
  return (
    <CardNameContainer>
      <div style={{background: styles.backgroundSideBack}}>
        <hr style={{background: styles.borderColor}}/>
        <h2 style={{color: styles.companyColor}}>{data.companyName}</h2>
        <hr style={{background: styles.borderColor}}/>
      </div>
      <div style={{background: styles.backgroundSideFront}}>
        <div>
          <h4 style={{color: styles.nameColor}}>{data.name}</h4>
          <h5 style={{color: styles.positionColor}}>{data.position}</h5>
        </div>
        <div style={{color: styles.contactColor}}>
          <span>{data.phone}</span>
          <span>{data.email}</span>
          <span>{data.website}</span>
        </div>
      </div>
    </CardNameContainer>
  )
}