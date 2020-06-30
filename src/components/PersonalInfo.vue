<template>
  <div>
    <h3>Personal Information</h3>
    <h3 class="personal-header">Pranjalya Tiwari</h3>
    <div class="formatting">
      <div class="info"><strong>E-mail:</strong></div>
      <div class="email innerformat">
        pranjalyatiwari10@gmail.com, pranjalya.tiwari@bitdurg.ac.in
      </div>
    </div>
    <br />
    <div class="formatting">
      <div class="info"><strong>Languages:</strong></div>
      <div class="innerformat">English, Hindi, Sanskrit, German (Novice)</div>
    </div>
    <br />
    <div class="formatting">
      <div class="info"><strong>Tools:</strong></div>
      <div class="innerformat">
        Tensorflow, Vue.js, ElasticSearch, Cloudant, MongoDB, MySQL, CouchDB,
        Docker, Scikit-Learn
      </div>
    </div>
    <br />
    <div class="formatting">
      <div class="info"><strong>Technologies:</strong></div>
      <div class="innerformat">
        Data Science, DevOps, Deep Learning, NoSQl, SQL, Full Stack Development,
        Linux
      </div>
    </div>
    <br />
    <div class="formatting">
      <div class="info"><strong>Programming Languages:</strong></div>
      <div class="innerformat">Python, C++, JavaScript, C, Go, Bash</div>
    </div>
    <br />
    <div class="formatting">
      <div class="info"><strong>Areas of Interest:</strong></div>
      <div class="innerformat">
        Astronomy, Cricket, Tabla, Astrophysics, Cinematoraphy, Cosmology,
        Poetry
      </div>
    </div>
    <br />
    <div class="info"><strong>Country:</strong> India 🇮🇳</div>
    <br />
    <Social />
  </div>
</template>

<script>
import Social from "./Social";

export default {
  name: "PersonalInfo",
  props: ["userName"],
  components: {
    Social
  }
};
</script>

<style scoped lang="scss">
@import "@/styles/variables.scss";

.info {
  margin-bottom: 10px;
}

.email {
  color: map-get($colors, primary);

  strong {
    color: lighten($text-color, 30%);
  }
}

.formatting > div {
  display: inline-block;
  vertical-align: top;
}

.innerformat {
  width: 60%;
  padding: 0px 5px;
}
</style>
