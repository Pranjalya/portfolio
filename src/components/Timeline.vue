<template>
  <div
    id="parcours"
    class="text-grey-dark bg-grey-white relative font-lato-light font-normal h-full trans-all-fast p-8 smp:p-8 sml:p-8 md:p-12 lg:p-14 xl:p-14 xxl:p-14"
  >
    <div class="mb-11">
      <h3
        class="text-base smp:text-base sml:text-base md:text-2xl lg:text-4xl xl:text-5xl xxl:text-5xl uppercase font-semibold"
      >
        My Journey
      </h3>
      <h4
        class="text-base smp:text-base sml:text-base md:text-lg lg:text-2xl xl:text-3xl xxl:text-3xl uppercase mt-2"
      >
        Educational and Professional
      </h4>
    </div>
    <ul class="timeline overflow-hidden">
      <li class="timeline-inverted">
        <div
          id="gfi"
          class="timeline-badge trans-all cursor-pointer"
          @click="setBadge('gfi', 0)"
        >
          <img
            class="w-20px h-20px"
            src="../assets/img/cap-black.svg"
            alt="Expérience professionnelle"
          />
        </div>
        <div class="timeline-panel">
          <md-card class="md-accent right" md-with-hover>
            <md-ripple>
              <md-card-header>
                <div class="md-title">Data-Driven Astronomy</div>
                <div class="md-subhead">Coursera, University of Sydney</div>
                <div class="md-subhead">June 21, 2020 - Present</div>
              </md-card-header>

              <md-card-content>
                <div class="content">
                  Analysis of huge data from telescopes to investigate the
                  challenges of working with large datasets: how to implement
                  algorithms that work; how to use databases to manage your
                  data; and how to learn from your data with machine learning
                  tools.
                </div>
              </md-card-content>

              <md-card-expand>
                <md-card-actions md-alignment="right">
                  <md-card-expand-trigger>
                    <md-button>MORE</md-button>
                  </md-card-expand-trigger>
                </md-card-actions>

                <md-card-expand-content>
                  <md-card-content>
                    <strong>Objectives</strong>
                    <br />
                    <div class="content">
                      <ul style="list-style-type:disc">
                        <li>Discovering pulsars in radio images</li>
                        <li>
                          Exploring the black holes at the centres of massive
                          galaxies
                        </li>
                        <li>
                          Investigating exoplanets in other solar systems using
                          SQL
                        </li>
                        <li>
                          Exploring the lifecycle of stars in our Galaxy by
                          setting Database
                        </li>
                        <li>
                          Calculating the redshifts of distant galaxies using
                          Regression
                        </li>
                        <li>
                          Investigating different types of galaxies using
                          Classification
                        </li>
                      </ul>
                    </div>
                  </md-card-content>
                </md-card-expand-content>
              </md-card-expand>
            </md-ripple>
          </md-card>
        </div>
      </li>
      <li>
        <div
          id="lastudio"
          class="timeline-badge trans-all cursor-pointer"
          @click="setBadge('lastudio', 1)"
        >
          <img
            class="w-20px h-20px"
            src="../assets/img/tie.svg"
            alt="Expérience professionnelle"
          />
        </div>
        <div class="timeline-panel">
          <md-card class="md-accent left" md-with-hover>
            <md-ripple>
              <md-card-header>
                <div class="md-title">
                  Reinforcement Learning Specialization
                </div>
                <div class="md-subhead">Coursera, University of Alberta</div>
                <div class="md-subhead">May 25, 2020 - Present</div>
              </md-card-header>

              <md-card-content>
                <div class="content">
                  Harnessing the full potential of artificial intelligence
                  requires adaptive learning systems. Reinforcement Learning
                  (RL) solutions help solve real-world problems through
                  trial-and-error interaction by implementing a complete RL
                  solution from beginning to end.
                </div>
              </md-card-content>

              <md-card-expand>
                <md-card-actions md-alignment="right">
                  <md-card-expand-trigger>
                    <md-button>MORE</md-button>
                  </md-card-expand-trigger>
                </md-card-actions>

                <md-card-expand-content>
                  <md-card-content>
                    <strong>Objectives</strong>
                    <br />
                    <div class="content">
                      <ul style="list-style-type:disc">
                        <li>
                          Build a Reinforcement Learning system for sequential
                          decision making.
                        </li>
                        <li>
                          Understand how to formalize your task as a
                          Reinforcement Learning problem, and how to begin
                          implementing a solution.
                        </li>
                        <li>
                          Understand the space of RL algorithms (Temporal-
                          Difference learning, Monte Carlo, Sarsa, Q-learning,
                          Policy Gradients, Dyna, and more).
                        </li>
                        <li>
                          Understand how RL fits under the broader umbrella of
                          machine learning, and how it complements deep
                          learning, supervised and unsupervised learning.
                        </li>
                      </ul>
                    </div>
                  </md-card-content>
                </md-card-expand-content>
              </md-card-expand>
            </md-ripple>
          </md-card>
        </div>
      </li>
      <li class="timeline-inverted">
        <div
          id="bp"
          class="timeline-badge trans-all cursor-pointer"
          @click="setBadge('bp', 2)"
        >
          <img
            class="w-20px h-20px"
            src="../assets/img/tie.svg"
            alt="Expérience professionnelle"
          />
        </div>
        <div class="timeline-panel">
          <md-card class="md-accent right" md-with-hover>
            <md-ripple>
              <md-card-header>
                <div class="md-title">CoronaWhy</div>
                <div class="md-subhead">Data Science Volunteer</div>
                <div class="md-subhead">Feb 26, 2020 - Present</div>
              </md-card-header>

              <md-card-content>
                <div class="content">
                  CoronaWhy is an international group whose mission is to
                  improve global coordination and analysis of all available data
                  pertinent to the COVID-19 outbreak and ensure all findings
                  reach those who need them.
                </div>
              </md-card-content>

              <md-card-expand>
                <md-card-actions md-alignment="right">
                  <md-card-expand-trigger>
                    <md-button>MORE</md-button>
                  </md-card-expand-trigger>
                </md-card-actions>

                <md-card-expand-content>
                  <md-card-content>
                    <strong>Associated Teams and Responsibilities</strong>
                    <br />
                    <div class="content">
                      <ul style="list-style-type:disc">
                        <li>
                          <b>Team Risk Factors - </b>To identify the various
                          extrinsic and intrinsic risk factors associated with
                          COVID-19.
                        </li>
                        <li>
                          <b>Team Time Series - </b>To forecast the various
                          aspects of COVID-19 outbreak in various counties using
                          Transfer Learning. Our abstract got accepted in ICML
                          2020 workshop.
                        </li>
                        <li>
                          <b>Team Infrastructure - </b>To set up the heavy
                          infrastructural needs of all the teams and maintain
                          them.
                        </li>
                        <li>
                          <b>Team Social Media - </b>To identify the social
                          media and historical trends in epidemics..
                        </li>
                        <li>
                          <b>Team Literature Review - </b>To build tool for the
                          aid of Medical researchers to obtain information from
                          research papers faster.
                        </li>
                      </ul>
                    </div>
                  </md-card-content>
                </md-card-expand-content>
              </md-card-expand>
            </md-ripple>
          </md-card>
        </div>
      </li>
      <li>
        <div
          id="dbs"
          class="timeline-badge trans-all cursor-pointer"
          @click="setBadge('dbs', 3)"
        >
          <img
            class="w-20px h-20px"
            src="../assets/img/tie.svg"
            alt="Expérience scolaire"
          />
        </div>
        <div class="timeline-panel">
          <md-card class="md-accent left" md-with-hover>
            <md-ripple>
              <md-card-header>
                <div class="md-title">
                  Finalists - Smart India Hackathon 2020
                </div>
                <div class="md-subhead">Government of India</div>
              </md-card-header>

              <md-card-content>
                <div class="content">
                  Finalists of the Smart of India Hackathon conducted by
                  Government of India. Finals are to be conducted on August
                  2020.
                </div>
              </md-card-content>

              <md-card-expand>
                <md-card-actions md-alignment="right">
                  <md-card-expand-trigger>
                    <md-button>MORE</md-button>
                  </md-card-expand-trigger>
                </md-card-actions>

                <md-card-expand-content>
                  <md-card-content>
                    <strong>Idea</strong>
                    <br />
                    <div class="content">
                      <p>
                        Proposed a solution to counter cyber-bulling and sexual
                        harrasment in private chats of social media using
                        Machine Learning techniques, without invading privacy of
                        the user in any manner.
                      </p>
                      <p>
                        Various classical NLP techniques and Deep Learning
                        techniques were used to find appropriate solution.
                      </p>
                    </div>
                  </md-card-content>
                </md-card-expand-content>
              </md-card-expand>
            </md-ripple>
          </md-card>
        </div>
      </li>
      <li class="timeline-inverted">
        <div
          id="bsb"
          class="timeline-badge trans-all cursor-pointer"
          @click="setBadge('bsb', 4)"
        >
          <img
            class="w-20px h-20px"
            src="../assets/img/tie.svg"
            alt="Expérience scolaire"
          />
        </div>
        <div class="timeline-panel">
          <md-card class="md-accent right" md-with-hover>
            <md-ripple>
              <md-card-header>
                <div class="md-title">Kaissa Global Business Systems</div>
                <div class="md-subhead">
                  ML Engineer, Hybrid Application Developer
                </div>
                <div class="md-subhead">September 2020 - Present</div>
              </md-card-header>

              <md-card-content>
                <div class="content">
                  Kaissa Global Business Systems Pvt Ltd is a software company
                  which proposes a unique solution to optimise and make life of
                  people, a little at a time with their application, Millenials.
                </div>
              </md-card-content>

              <md-card-expand>
                <md-card-actions md-alignment="right">
                  <md-card-expand-trigger>
                    <md-button>MORE</md-button>
                  </md-card-expand-trigger>
                </md-card-actions>

                <md-card-expand-content>
                  <md-card-content>
                    <strong>Roles and Responsibilities</strong>
                    <br />
                    <div class="content">
                      <ul style="list-style-type:disc">
                        <li>
                          Build Hybrid Application using Vue.js and Cordova.
                        </li>
                        <li>
                          Built a Web Conferencing tool from scratch -
                          <a href="webrtc.kaissa.io">webrtc.kaissa.io</a>
                        </li>
                        <li>
                          Incorporate NoSQL database using IBM Cloudant built
                          over CouchDB.
                        </li>
                        <li>
                          Built a ML model to optimise daily tasks based on
                          reward systems.
                        </li>
                      </ul>
                    </div>
                  </md-card-content>
                </md-card-expand-content>
              </md-card-expand>
            </md-ripple>
          </md-card>
        </div>
      </li>
      <li>
        <div
          id="dbs"
          class="timeline-badge trans-all cursor-pointer"
          @click="setBadge('dbs', 3)"
        >
          <img
            class="w-20px h-20px"
            src="../assets/img/cap-black.svg"
            alt="Expérience scolaire"
          />
        </div>
        <div class="timeline-panel">
          <md-card class="md-accent left" md-with-hover>
            <md-ripple>
              <md-card-header>
                <div class="md-title">Deep Learning Specialization</div>
                <div class="md-subhead">Coursera, Deeplearning.ai</div>
                <div class="md-subhead">May 2020 - August 2020</div>
              </md-card-header>

              <md-card-content>
                <div class="content">
                  Deep Learning Specialization is a catalogue course, taught by
                  esteemed Prof. Andrew Ng, University of Toronto and founder of
                  Deeplearning.ai, which includes various theoretical and
                  practical knowledge of Deep Learning.
                </div>
              </md-card-content>

              <md-card-expand>
                <md-card-actions md-alignment="right">
                  <md-card-expand-trigger>
                    <md-button>MORE</md-button>
                  </md-card-expand-trigger>
                </md-card-actions>

                <md-card-expand-content>
                  <md-card-content>
                    <strong>Courses in Specialization</strong>
                    <br />
                    <div class="content">
                      <ul style="list-style-type:disc">
                        <li>Deep Learning And Neural Networks</li>
                        <li>
                          Improving Deep Neural Networks: Hyperparameter Tuning,
                          Regularization And Optimization
                        </li>
                        <li>Structuring Machine Learning Projects</li>
                        <li>Convolutional Neural Networks</li>
                        <li>Sequence Models</li>
                      </ul>
                    </div>
                  </md-card-content>
                </md-card-expand-content>
              </md-card-expand>
            </md-ripple>
          </md-card>
        </div>
      </li>
      <li class="timeline-inverted">
        <div
          id="bsb"
          class="timeline-badge trans-all cursor-pointer"
          @click="setBadge('bsb', 4)"
        >
          <img
            class="w-20px h-20px"
            src="../assets/img/tie.svg"
            alt="Expérience scolaire"
          />
        </div>
        <div class="timeline-panel">
          <md-card class="md-accent right" md-with-hover>
            <md-ripple>
              <md-card-header>
                <div class="md-title">Stock Market Analysis</div>
                <div class="md-subhead">Machine Learning Internship</div>
                <div class="md-subhead">July 2019 - August 2019</div>
              </md-card-header>

              <md-card-content>
                <div class="content">
                  Understand the various aspects of Stock Market including
                  finding trends and building optimised portfolio using
                  statistical machine learning techniques.
                </div>
              </md-card-content>

              <md-card-expand>
                <md-card-actions md-alignment="right">
                  <md-card-expand-trigger>
                    <md-button>MORE</md-button>
                  </md-card-expand-trigger>
                </md-card-actions>

                <md-card-expand-content>
                  <md-card-content>
                    <strong>Tasks and Techniques</strong>
                    <br />
                    <div class="content">
                      <ul style="list-style-type:disc">
                        <li>Data analysis and Data Cleaning</li>
                        <li>Data Visualisation and Technical Analysis</li>
                        <li>Fundamental Analysis using Regression</li>
                        <li>Trade Call Prediction using Classification</li>
                        <li>Applying Modern Portfolio Theory for Stocks</li>
                        <li>Clustering for Diversification Analysis</li>
                      </ul>
                    </div>
                  </md-card-content>
                </md-card-expand-content>
              </md-card-expand>
            </md-ripple>
          </md-card>
        </div>
      </li>
      <li>
        <div
          id="dbs"
          class="timeline-badge trans-all cursor-pointer"
          @click="setBadge('dbs', 3)"
        >
          <img
            class="w-20px h-20px"
            src="../assets/img/cap-black.svg"
            alt="Expérience scolaire"
          />
        </div>
        <div class="timeline-panel">
          <md-card class="md-accent left" md-with-hover>
            <md-ripple>
              <md-card-header>
                <div class="md-title">Fundamentals Of Digital Marketing</div>
                <div class="md-subhead">Google</div>
                <div class="md-subhead">February 2019</div>
              </md-card-header>

              <md-card-content>
                <div class="content">
                  Fundamentals of Digital Marketing is a course by Google
                  Digital Unlocked, which included various aspects of Digital
                  Marketing techniques and tools.
                </div>
              </md-card-content>

              <md-card-expand>
                <md-card-actions md-alignment="right">
                  <md-card-expand-trigger>
                    <md-button>MORE</md-button>
                  </md-card-expand-trigger>
                </md-card-actions>

                <md-card-expand-content>
                  <md-card-content>
                    <strong>Techniques and Tools</strong>
                    <br />
                    <div class="content">
                      <ul style="list-style-type:disc">
                        <li>Building Web presence</li>
                        <li>Planning online business strategy</li>
                        <li>Search Engine Optimisation</li>
                        <li>Social Media Marketing</li>
                        <li>Online Advertising and Campaigns</li>
                        <li>Discovering Trends and Analytics</li>
                      </ul>
                    </div>
                  </md-card-content>
                </md-card-expand-content>
              </md-card-expand>
            </md-ripple>
          </md-card>
        </div>
      </li>
      <li class="timeline-inverted">
        <div
          id="bsb"
          class="timeline-badge trans-all cursor-pointer"
          @click="setBadge('bsb', 4)"
        >
          <img
            class="w-20px h-20px"
            src="../assets/img/cap-black.svg"
            alt="Expérience scolaire"
          />
        </div>
        <div class="timeline-panel">
          <md-card class="md-accent right" md-with-hover>
            <md-ripple>
              <md-card-header>
                <div class="md-title">
                  Bachelors of Engineering, Computer Science and Engineering
                </div>
                <div class="md-subhead">
                  Bhilai Institute of Technology, Durg
                </div>
                <div class="md-subhead">August 2017 - Present</div>
              </md-card-header>

              <md-card-content>
                <div class="content">
                  CSE Undergraduate in Bachelors of Engineering from BIT Durg.
                  It is a 4 year program, affiliated with AICTE.
                </div>
              </md-card-content>

              <md-card-expand>
                <md-card-actions md-alignment="right">
                  <md-card-expand-trigger>
                    <md-button>MORE</md-button>
                  </md-card-expand-trigger>
                </md-card-actions>

                <md-card-expand-content>
                  <md-card-content>
                    <strong>Achievements</strong>
                    <br />
                    <div class="content">
                      <ul style="list-style-type:disc">
                        <li>Attaining 9.2 CPI as per now, till 5th Semester</li>
                        <li>Head Coordinator of Training and Placement Cell</li>
                        <li>
                          Secured 1st rank in BITSHINE : Software and Hardware
                          Expo
                        </li>
                        <li>Member of CSE Cricket Team</li>
                        <li>Content Writer in Snapshots, monthly newsletter</li>
                        <li>
                          Recipient of Tuition Fee Waiver Scheme on Merit basis
                        </li>
                        <li>
                          Elite Certificate in NPTEL's course of Programming in
                          C++ and Problem Solving Through Programming in C
                        </li>
                      </ul>
                    </div>
                  </md-card-content>
                </md-card-expand-content>
              </md-card-expand>
            </md-ripple>
          </md-card>
        </div>
      </li>
      <li>
        <div
          id="dbs"
          class="timeline-badge trans-all cursor-pointer"
          @click="setBadge('dbs', 3)"
        >
          <img
            class="w-20px h-20px"
            src="../assets/img/cap-black.svg"
            alt="Expérience scolaire"
          />
        </div>
        <div class="timeline-panel">
          <md-card class="md-accent left" md-with-hover>
            <md-ripple>
              <md-card-header>
                <div class="md-title">Tabla</div>
                <div class="md-subhead">Indira Kala Sangeet Vishwavidyalay</div>
              </md-card-header>

              <md-card-content>
                <div class="content">
                  A certified Tabla player from Indira Kala Sangeet
                  Vishwavidyalay, Khairagarh. Passed with distinction in
                  Madhyama Pratham, and completed four out of six year courses
                  including Prathama Pratham, Prathama Antim and Madhyama Antim.
                </div>
              </md-card-content>
            </md-ripple>
          </md-card>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import "vue-material/dist/vue-material.min.css";

export default {
  name: "Timeline",
  data() {
    return {
      badgeClicked: null,
      labelDetail: [
        "Plus",
        "Plus",
        "Plus",
        "Plus",
        "Plus",
        "Plus",
        "Plus",
        "Plus",
        "Plus"
      ]
    };
  },
  methods: {
    scaleBadge: function(name) {
      var list = document.getElementsByClassName("timeline-badge");
      for (let item of list) {
        item.classList.remove("timeline-badge-hover");
      }
      document.getElementById(name).classList.add("timeline-badge-hover");
    },
    reduceBadge: function(name) {
      if (this.badgeClicked == null) {
        document.getElementById(name).classList.remove("timeline-badge-hover");
      }
    },
    setBadge: function(name, index) {
      if (this.badgeClicked == name) {
        this.badgeClicked = null;
        this.labelDetail.forEach((value, index) => {
          this.labelDetail[index] = "Plus";
        });
        this.labelDetail[index] = "Plus";
        this.reduceBadge(name);
        return;
      }
      this.badgeClicked = name;
      this.labelDetail.forEach((value, index) => {
        this.labelDetail[index] = "Plus";
      });
      this.labelDetail[index] = "Moins";
      this.scaleBadge(name);
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/styles/_index.scss";
@import "@/styles/variables.scss";

.content {
  text-align: left;
  padding-left: 6%;
}

.right {
  background-color: $olive;
  color: white;
}

.left {
  background-color: $navy;
  color: #66ffcc;
}

.position {
  position: relative;
}

.md-button {
  background-color: $grey-light;
  color: black;
}

.resume-icon {
  margin-bottom: 25px;

  i {
    font-size: 4rem;
    color: map-get($colors, secondary);
  }
}

.resume-item {
  margin-bottom: 25px;

  p {
    font-size: 1.5rem;
    margin-top: 0;
  }

  .resume-description {
    font-size: 1.7rem;
  }

  .year {
    font-weight: 600;
    margin-bottom: 5px;
  }
}

.group-name {
  color: map-get($colors, secondary);
}
</style>
