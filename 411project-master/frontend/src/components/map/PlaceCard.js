import React from 'react';
import { Rate } from 'antd';

import Card from '@material-ui/core/Card';
import { CardContent, CardHeader } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';

const PlaceCard = (({ info }) => {
  const { name,  photos,  rating,  user_ratings_total, vicinity } = info;
  return (
    <Card>
      <CardMedia 
      image={photos[0].getUrl()}/>

      <CardHeader
      title={name}
      >
      </CardHeader>
      <CardContent>
      <Typography variant="body2" color="textSecondary" component="p">
          Rating: { rating } <br></br>
          Total Ratings: { user_ratings_total } <br></br>
          Town: { vicinity } <br></br>
        </Typography>
      </CardContent>
    </Card>
  );
});

export default PlaceCard;