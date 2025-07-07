import React from 'react'

export default function Alert(props) {

    const capitalize=(word)=>{
        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);
    }
  return (
      props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert"> 
      {/* in this syntax before and part is evaluated first or terminate if not true if true then only second get evaluated*/}
            <strong>{capitalize(props.alert.type)}</strong>:{props.alert.msg}
            
     </div>
    )
}
