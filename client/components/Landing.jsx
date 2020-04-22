import React from 'react';


const Landing = (props) => {
  // console.log(nps)
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