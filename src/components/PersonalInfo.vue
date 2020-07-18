<template>
  <div>
    <h3>Personal Information</h3>
    <h3 class="personal-header">Pranjalya Tiwari</h3>
    <div class="formatting">
      <div class="info">
        <strong>E-mail:</strong>
      </div>
      <div class="email innerformat">
        pranjalyatiwari10@gmail.com, pranjalya.tiwari@bitdurg.ac.in
      </div>
    </div>
    <br />
    <div class="formatting">
      <div class="info">
        <strong>Languages:</strong>
      </div>
      <div class="innerformat">English, Hindi, Sanskrit, German (Novice)</div>
    </div>
    <br />
    <div class="formatting">
      <div class="info">
        <strong>Tools:</strong>
      </div>
      <div class="innerformat">
        Tensorflow, Vue.js, ElasticSearch, Cloudant, MongoDB, MySQL, CouchDB,
        Docker, Scikit-Learn
      </div>
    </div>
    <br />
    <div class="formatting">
      <div class="info">
        <strong>Technologies:</strong>
      </div>
      <div class="innerformat">
        Data Science, DevOps, Deep Learning, NoSQl, SQL, Full Stack Development,
        Linux
      </div>
    </div>
    <br />
    <div class="formatting">
      <div class="info">
        <strong>Programming Languages:</strong>
      </div>
      <div class="innerformat">Python, C++, JavaScript, C, Go, Bash</div>
    </div>
    <br />
    <div class="formatting">
      <div class="info">
        <strong>Areas of Interest:</strong>
      </div>
      <div class="innerformat">
        Astronomy, Cricket, Tabla, Astrophysics, Cinematoraphy, Cosmology,
        Poetry, Open Source
      </div>
    </div>
    <br />
    <div class="info"><strong>Country:</strong> India 🇮🇳</div>
    <br />
    <Social />
    <br />
    <a
      class="bmc-button"
      target="_blank"
      href="https://www.buymeacoffee.com/pranjalyatiwari"
    >
      <img
        src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
        alt="Buy me a coffee"
      />
      <span style="margin-left:5px;font-size:28px !important;"
        >Buy me a coffee</span
      >
    </a>
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
.bmc-button img {
  height: 34px !important;
  width: 35px !important;
  margin-bottom: 1px !important;
  box-shadow: none !important;
  border: none !important;
  vertical-align: middle !important;
}
.bmc-button {
  padding: 7px 15px 7px 10px !important;
  line-height: 35px !important;
  height: 51px !important;
  text-decoration: none !important;
  display: inline-flex !important;
  color: #ffffff !important;
  background-color: #79d6b5 !important;
  border-radius: 5px !important;
  border: 1px solid transparent !important;
  padding: 7px 15px 7px 10px !important;
  font-size: 28px !important;
  letter-spacing: 0.6px !important;
  box-shadow: 0px 1px 2px rgba(190, 190, 190, 0.5) !important;
  -webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;
  margin: 0 auto !important;
  font-family: "Cookie", cursive !important;
  -webkit-box-sizing: border-box !important;
  box-sizing: border-box !important;
}
.bmc-button:hover,
.bmc-button:active,
.bmc-button:focus {
  -webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;
  text-decoration: none !important;
  box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;
  opacity: 0.85 !important;
  color: #ffffff !important;
}
</style>
