import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core'


class Park extends Component {
  constructor() {
    super()
  }


  render() {
    return (
      <Link to={{
        pathname: '/park',
        stateLookup: this.props.stateLookup
      }}>
        <Card className="parkCard" raised>
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