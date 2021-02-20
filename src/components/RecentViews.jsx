import React from 'react';
import {Carousel,Container} from "react-bootstrap";
import "../styles/RecentVisit.css"

function Home() {



  return (
    <Container className="image-container">
    <Carousel>
  <Carousel.Item interval={1000}>
    <img 
      className="d-block w-50  image-properties " 
      src="https://plantationhomes.com.au/cms_uploads/images/15861_six-stages-of-building-a-home.jpg" alt="property-1" 
       />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block  w-50  property-image image-properties" 
      src="https://www.mcdonaldjoneshomes.com.au/sites/default/files/styles/blog_hero_banner/public/tulloch-25-halifax-facade-edited.jpg?itok=IgDG63EW" alt="property-2"
 
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block  w-50  property-image image-properties"
      src="https://static.dezeen.com/uploads/2020/02/house-in-the-landscape-niko-arcjitect-architecture-residential-russia-houses-khurtin_dezeen_2364_hero-852x479.jpg" alt="property-3"
     
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</Container>
  );
   

}

export default Home;

