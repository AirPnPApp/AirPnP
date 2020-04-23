import React, { Component } from 'react';
// import { Link, Redirect } from 'react-router-dom';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core'


class WeatherBar extends Component {
  constructor() {
    super()
  }
  
  componentDidMount() {
  
    // fetch(`http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=GA3xXGxYdGi76Ip4OecvxzUBxHGQRGiS&q=42.339904%2C-71.0898892`)
    fetch(`http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${"GA3xXGxYdGi76Ip4OecvxzUBxHGQRGiS"}&q=${this.props.location[0]}%2C${this.props.location[1]}`)
    .then(response => console.log(response))
  }


  //http://dataservice.accuweather.com/forecasts/v1/daily/5day/"location key without quotes"


  render() {
    return (
        <Card className="parkCard" raised>
          <CardActionArea>
              <CardContent className="cardContent">
                <Typography gutterBottom variant="h5" component="h4">Something</Typography>

              </CardContent>
          </CardActionArea>
        </Card >
    )
  }
}
export default WeatherBar;