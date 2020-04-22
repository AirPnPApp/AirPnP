import React from 'react';


const Landing = (props) => {
  return(
    <div>
      hello
      <form onSubmit={props.setLocation}>
        <input type="text" />
        <button>Submit</button>
      </form>
    </div>
  )
}


export default Landing;