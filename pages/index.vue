<template>
  <div>
    <Navbar />
    <Hero />
    <who-we-are title="About Us" tagId="aboutus">
      <template v-slot:paragraph>
        <p>
          Betawave is a dynamic sports betting and casino operating platform
          comprising a highly skilled team whose primary concern is your
          success.
        </p>
        <p>
          We ensure your ultimate success by providing you exactly what you
          need: comprehensive solutions, advanced tools, high-quality sports
          betting, and casino products for the most complete business in today’s
          competitive market.
        </p>

        <p>
          Remaining focused on your needs and providing a genuine commitment to
          your business. We ultimately attain our primary goal – your success.
          Our watchword is Uniqueness leaving us to build a bespoke system that
          lets you focus on the business aspect and we in turn handle all the
          technical essentials of the system.
        </p>
      </template>

      <template v-slot:slider>
        <Slider />
      </template>

      <template v-slot:image>
        <img
          src="https://res.cloudinary.com/dvuogdjyq/image/upload/v1643205714/Betawave_io/section2-white_j6rucs.svg"
          alt=""
          class="s-edge edge-stdbill-bottom"
        />
      </template>
    </who-we-are>
    <Products />
    <WhyUs />
    <who-we-are title="Our Team" id="team">
      <template v-slot:paragraph>
        <p>
          Our team is spread over two offices, in Johannesburg, and Lagos -
          Nigeria. Both offer us advantages in recruiting top talent in the IT
          and business support fields. In fact, our teams are a true
          international amalgamation of talents United Kingdom, Nigeria &
          Johannesburg amongst others. The international feel of our team means
          we get a more global perspective as well as attracting top talent,
          meaning we can better serve our international clientele.
        </p>
        <p>
          Our teams comprise several specialists in various IT and software
          fields as well as business intelligence and analysis. We have teams
          focused on IT infrastructure, Database Systems, Backend and Platform
          Software Engineers and developers, a dedicated frontend team and SEO
          and marketing optimisation experts.
        </p>
        <p>
          When not busy creating and perfecting their next releases, the teams
          enjoy some downtime in a relaxing environment and some of our great
          team activities.
        </p>
      </template>
    </who-we-are>
    <Contact />
    <Footer />
  </div>
</template>

<script>
import WhoWeAre from "../components/WhoWeAre.vue";
export default {};
</script>

WhoWeAre
