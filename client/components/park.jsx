import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core'

let park = "/park"

class Park extends Component {
  constructor() {
    super()
  }

  // handleClick(e){
  //   console.log(e)
  //   e.preventDefault();
  // }

  render() {
    return (
      <Link to={park}>
        <Card className="parkCard">
          <CardActionArea>
            <CardMedia className="parkCardImage" image={this.props.images[0].url} title="park" component="img">

            </CardMedia>
              <CardContent className="cardContent">
                <Typography gutterBottom variant="h5" component="h4">{this.props.fullName}</Typography>
                <Typography variant="body2" color="textSecondary" component="p">{this.props.description}</Typography>
              </CardContent>
          </CardActionArea>
        </Card >
      </Link>
    )
  }
}
export default Park;


          // <ul>
          //   <h2>{this.props.fullName}, {this.props.states}</h2>
          //   <img id="image" src={this.props.images[0].url} width={200} height={200}></img>
          // </ul>