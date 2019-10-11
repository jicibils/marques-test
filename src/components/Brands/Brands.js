import React from 'react';
import Grid from '@material-ui/core/Grid';
import CarouselComponent from '../Carousel/CarouselComponent';

export default function Brands(props) {
  return (
    <div className="brands-container">
      <Grid>
        <Grid container item xs={12} justify="center">
          <div className="title-subsections-container">
            <Grid container item xs={12} justify="center">
              <h1 className="title">Trabajamos Con Las Mejores Marcas</h1>
              <div className="title-underline"></div>
            </Grid>
          </div>
        </Grid>

        <Grid item xs={12}>
          <CarouselComponent></CarouselComponent>
        </Grid>
      </Grid>
    </div>
  );
}
