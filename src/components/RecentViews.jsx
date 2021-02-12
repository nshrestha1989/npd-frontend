import React from 'react';

function Home() {

  //Search Bar HTML

  return (
    <div>
      <section id="History"> <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
        <h1>Recently Viewed</h1>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <h2>Property 1</h2>
            <img class="property-image" src="https://plantationhomes.com.au/cms_uploads/images/15861_six-stages-of-building-a-home.jpg" alt="property-1" />
            <em>Walling,Syangja</em>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <h2>Property 2</h2>
            <img class="property-image" src="https://www.mcdonaldjoneshomes.com.au/sites/default/files/styles/blog_hero_banner/public/tulloch-25-halifax-facade-edited.jpg?itok=IgDG63EW" alt="property-2" />
            <em>Pokhara,Gandaki</em>
          </div>
          <div class="carousel-item">
            <h2>Property 3</h2>
            <img class="property-image" src="https://static.dezeen.com/uploads/2020/02/house-in-the-landscape-niko-arcjitect-architecture-residential-russia-houses-khurtin_dezeen_2364_hero-852x479.jpg" alt="property-3" />
            <em>Kathmandu,Nepal</em>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </a>
      </div>
      </section></div>);

}

export default Home;