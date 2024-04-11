import React from 'react'

export default function NVD_FunctionDemo(props) {
  return (
    <div>
      <hr/>
      <h2>Function component Demo</h2>
      <h3>Sử dụng thuộc tính props</h3>
      <p>UserName: {props.userName}</p>
      <p>FullName: {props.fullName}</p>
      <p>Age: {props.age}</p>
    </div>
  )
}
