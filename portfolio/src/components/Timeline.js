import React, { useState } from 'react';
import './Timeline.css';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Collapse,
} from '@mui/material';

const Timeline = () => {
  const [expanded, setExpanded] = useState({});

  const handleExpandClick = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div
      id="parcours"
      className="text-grey-dark bg-grey-white relative font-lato-light font-normal h-full trans-all-fast p-8 smp:p-8 sml:p-8 md:p-12 lg:p-14 xl:p-14 xxl:p-14"
    >
      <div className="mb-11">
        <h3 className="text-base smp:text-base sml:text-base md:text-2xl lg:text-4xl xl:text-5xl xxl:text-5xl uppercase font-semibold">
          My Journey
        </h3>
        <h4 className="text-base smp:text-base sml:text-base md:text-lg lg:text-2xl xl:text-3xl xxl:text-3xl uppercase mt-2">
          Educational and Professional
        </h4>
      </div>
      <ul className="timeline overflow-hidden">
        <li className="timeline-inverted">
          <div id="gfi" className="timeline-badge trans-all cursor-pointer">
            <img
              className="w-20px h-20px"
              src="img/tie.svg"
              alt="Expérience professionnelle"
            />
          </div>
          <div className="timeline-panel">
            <Card className="md-accent right" sx={{ backgroundColor: '#3D9970', color: 'white' }}>
                <CardHeader
                  title="Machine Learning Engineer"
                  subheader="Deepsync Technologies"
                  subheaderTypographyProps={{
                    sx: {
                      color: 'white', // Set subheader text color to white
                    },
                  }}
                />
                <CardHeader subheader="July 1, 2021 - Present" />

              <CardContent>
                <div className="content">
                  Researching and developing new algorithms and techniques via
                  Deep Learning in the field of audio processing and audio
                  generation using State of the Art techniques.
                </div>
              </CardContent>
              <CardActions disableSpacing>
                <Button
                  onClick={() => handleExpandClick('exp1')}
                  aria-expanded={expanded['exp1']}
                  aria-label="show more"
                  sx={{color: 'white'}}
                >
                  MORE
                </Button>
              </CardActions>
              <Collapse in={expanded['exp1']} timeout="auto" unmountOnExit>
                <CardContent>
                  <strong>Objectives</strong>
                  <br />
                  <div className="content">
                    <ul style={{ listStyleType: 'disc' }}>
                      <li>
                        Implementing latest research papers into the sustainable
                        system and complying with dataset.
                      </li>
                      <li>
                        Perform new research and get better techniques in
                        various fields like multi-lingual processing and
                        multi-tonal attributes.
                      </li>
                      <li>
                        Build tools for better automation and preprocessing
                        pipeline using various tools.
                      </li>
                      <li>
                        Build training and testing pipelines with better control
                        over model deployment and serving.
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Collapse>
            </Card>
          </div>
        </li>
        <li>
          <div
            id="lastudio"
            className="timeline-badge trans-all cursor-pointer"
          >
            <img
              className="w-20px h-20px"
              src="img/tie.svg"
              alt="Expérience professionnelle"
            />
          </div>
          <div className="timeline-panel">
            <Card className="md-accent left" sx={{ backgroundColor: '#001f3f', color: '#66ffcc' }}>
                <CardHeader
                  title="Software Engineer"
                  subheader="Backprop Technologies"
                  subheaderTypographyProps={{
                    sx: {
                      color: '#66ffcc', // Set subheader text color to white
                    },
                  }}
                />
                <CardHeader subheader="October 2020 - June 2021" />
              <CardContent>
                <div className="content">
                  Building solutions for optimization problem the field of
                  Machine Learning, especially geared towards the use of
                  Reinforcement Learning and creating solutions, along with
                  scripting and internal tools building.
                </div>
              </CardContent>
              <CardActions disableSpacing>
                <Button
                  onClick={() => handleExpandClick('exp2')}
                  aria-expanded={expanded['exp2']}
                  aria-label="show more"
                  sx={{color: '#66ffcc'}}
                >
                  MORE
                </Button>
              </CardActions>
              <Collapse in={expanded['exp2']} timeout="auto" unmountOnExit>
                <CardContent>
                  <strong>Objectives</strong>
                  <br />
                  <div className="content">
                    <ul style={{ listStyleType: 'disc' }}>
                      <li>
                        Create synthetic data via Simulation to generate dataset
                        for training and testing dataset which can be used for
                        analysis and model building.
                      </li>
                      <li>
                        Build a Reinforcement Learning system and finding a way
                        to incorporate it with the existing system.
                      </li>
                      <li>
                        Use Python to build internal tools for automation and API
                        manipulation and scripting.
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Collapse>
            </Card>
          </div>
        </li>
        <li className="timeline-inverted">
          <div id="gfi" className="timeline-badge trans-all cursor-pointer">
            <img
              className="w-20px h-20px"
              src="img/cap-black.svg"
              alt="Expérience professionnelle"
            />
          </div>
          <div className="timeline-panel">
            <Card className="md-accent right" sx={{ backgroundColor: '#3D9970', color: 'white' }}>
                <CardHeader
                  title="Data-Driven Astronomy"
                  subheader="Coursera, University of Sydney"
                  subheaderTypographyProps={{
                    sx: {
                      color: 'white',
                    },
                  }}
                />
                <CardHeader subheader="June 21, 2020 - August 3, 2020" />
              <CardContent>
                <div className="content">
                  Analysis of huge data from telescopes to investigate the
                  challenges of working with large datasets: how to implement
                  algorithms that work; how to use databases to manage your
                  data; and how to learn from your data with machine learning
                  tools.
                </div>
              </CardContent>
              <CardActions disableSpacing>
                <Button
                  onClick={() => handleExpandClick('exp3')}
                  aria-expanded={expanded['exp3']}
                  aria-label="show more"
                  sx={{color: 'white'}}
                >
                  MORE
                </Button>
              </CardActions>
              <Collapse in={expanded['exp3']} timeout="auto" unmountOnExit>
                <CardContent>
                  <strong>Objectives</strong>
                  <br />
                  <div className="content">
                    <ul style={{ listStyleType: 'disc' }}>
                      <li>Discovering pulsars in radio images</li>
                      <li>
                        Exploring the black holes at the centres of massive
                        galaxies
                      </li>
                      <li>
                        Investigating exoplanets in other solar systems using SQL
                      </li>
                      <li>
                        Exploring the lifecycle of stars in our Galaxy by setting
                        Database
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
                </CardContent>
              </Collapse>
            </Card>
          </div>
        </li>
        <li>
          <div
            id="lastudio"
            className="timeline-badge trans-all cursor-pointer"
          >
            <img
              className="w-20px h-20px"
              src="img/cap-black.svg"
              alt="Expérience professionnelle"
            />
          </div>
          <div className="timeline-panel">
            <Card className="md-accent left" sx={{ backgroundColor: '#001f3f', color: '#66ffcc' }}>
                <CardHeader
                  title="Reinforcement Learning Specialization"
                  subheader="Coursera, University of Alberta"
                  subheaderTypographyProps={{
                    sx: {
                      color: '#66ffcc', // Set subheader text color to white
                    },
                  }}
                />
                <CardHeader subheader="May 25, 2020 - Present" />
              <CardContent>
                <div className="content">
                  Harnessing the full potential of artificial intelligence
                  requires adaptive learning systems. Reinforcement Learning
                  (RL) solutions help solve real-world problems through
                  trial-and-error interaction by implementing a complete RL
                  solution from beginning to end.
                </div>
              </CardContent>
              <CardActions disableSpacing>
                <Button
                  onClick={() => handleExpandClick('exp4')}
                  aria-expanded={expanded['exp4']}
                  aria-label="show more"
                  sx={{color: '#66ffcc'}}
                >
                  MORE
                </Button>
              </CardActions>
              <Collapse in={expanded['exp4']} timeout="auto" unmountOnExit>
                <CardContent>
                  <strong>Objectives</strong>
                  <br />
                  <div className="content">
                    <ul style={{ listStyleType: 'disc' }}>
                      <li>
                        Build a Reinforcement Learning system for sequential
                        decision making.
                      </li>
                      <li>
                        Understand how to formalize your task as a Reinforcement
                        Learning problem, and how to begin implementing a
                        solution.
                      </li>
                      <li>
                        Understand the space of RL algorithms
                        (Temporal-Difference learning, Monte Carlo, Sarsa,
                        Q-learning, Policy Gradients, Dyna, and more).
                      </li>
                      <li>
                        Understand how RL fits under the broader umbrella of
                        machine learning, and how it complements deep learning,
                        supervised and unsupervised learning.
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Collapse>
            </Card>
          </div>
        </li>
        <li className="timeline-inverted">
          <div id="bp" className="timeline-badge trans-all cursor-pointer">
            <img
              className="w-20px h-20px"
              src="img/tie.svg"
              alt="Expérience professionnelle"
            />
          </div>
          <div className="timeline-panel">
            <Card className="md-accent right" sx={{ backgroundColor: '#3D9970', color: 'white' }}>
                <CardHeader
                  title="CoronaWhy"
                  subheader="Data Science Volunteer"
                  subheaderTypographyProps={{
                    sx: {
                      color: 'white', // Set subheader text color to white
                    },
                  }}
                />
                <CardHeader subheader="Feb 26, 2020 - Present" />
              <CardContent>
                <div className="content">
                  CoronaWhy is an international group whose mission is to
                  improve global coordination and analysis of all available data
                  pertinent to the COVID-19 outbreak and ensure all findings
                  reach those who need them.
                </div>
              </CardContent>
              <CardActions disableSpacing>
                <Button
                  onClick={() => handleExpandClick('exp5')}
                  aria-expanded={expanded['exp5']}
                  aria-label="show more"
                  sx={{color: 'white'}}
                >
                  MORE
                </Button>
              </CardActions>
              <Collapse in={expanded['exp5']} timeout="auto" unmountOnExit>
                <CardContent>
                  <strong>Associated Teams and Responsibilities</strong>
                  <br />
                  <div className="content">
                    <ul style={{ listStyleType: 'disc' }}>
                      <li>
                        <b>Team Risk Factors - </b>To identify the various
                        extrinsic and intrinsic risk factors associated with
                        COVID-19.
                      </li>
                      <li>
                        <b>Team Time Series - </b>To forecast the various aspects
                        of COVID-19 outbreak in various counties using Transfer
                        Learning. Our abstract got accepted in ICML 2020
                        workshop.
                      </li>
                      <li>
                        <b>Team Infrastructure - </b>To set up the heavy
                        infrastructural needs of all the teams and maintain
                        them.
                      </li>
                      <li>
                        <b>Team Social Media - </b>To identify the social media
                        and historical trends in epidemics..
                      </li>
                      <li>
                        <b>Team Literature Review - </b>To build tool for the aid
                        of Medical researchers to obtain information from
                        research papers faster.
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Collapse>
            </Card>
          </div>
        </li>
        <li>
          <div id="dbs" className="timeline-badge trans-all cursor-pointer">
            <img
              className="w-20px h-20px"
              src="img/tie.svg"
              alt="Expérience scolaire"
            />
          </div>
          <div className="timeline-panel">
            <Card className="md-accent left" sx={{ backgroundColor: '#001f3f', color: '#66ffcc' }}>
                <CardHeader
                  title="Finalists - Smart India Hackathon 2020"
                  subheader="Government of India"
                  subheaderTypographyProps={{
                    sx: {
                      color: '#66ffcc',
                    },
                  }}
                />
              <CardContent>
                <div className="content">
                  Finalists of the Smart of India Hackathon conducted by
                  Government of India. Finals are to be conducted on August
                  2020.
                </div>
              </CardContent>
              <CardActions disableSpacing>
                <Button
                  onClick={() => handleExpandClick('exp6')}
                  aria-expanded={expanded['exp6']}
                  aria-label="show more"
                  sx={{color: '#66ffcc'}}
                >
                  MORE
                </Button>
              </CardActions>
              <Collapse in={expanded['exp6']} timeout="auto" unmountOnExit>
                <CardContent>
                  <strong>Idea</strong>
                  <br />
                  <div className="content">
                    <p>
                      Proposed a solution to counter cyber-bulling and sexual
                      harrasment in private chats of social media using Machine
                      Learning techniques, without invading privacy of the user
                      in any manner.
                    </p>
                    <p>
                      Various classical NLP techniques and Deep Learning
                      techniques were used to find appropriate solution.
                    </p>
                  </div>
                </CardContent>
              </Collapse>
            </Card>
          </div>
        </li>
        <li className="timeline-inverted">
          <div id="bsb" className="timeline-badge trans-all cursor-pointer">
            <img
              className="w-20px h-20px"
              src="img/tie.svg"
              alt="Expérience scolaire"
            />
          </div>
          <div className="timeline-panel">
            <Card className="md-accent right" sx={{ backgroundColor: '#3D9970', color: 'white' }}>
                <CardHeader
                  title="Kaissa Global Business Systems"
                  subheader="ML Engineer, Hybrid Application Developer"
                  subheaderTypographyProps={{
                    sx: {
                      color: 'white',
                    },
                  }}
                />
                <CardHeader subheader="September 2019 - Present" />
              <CardContent>
                <div className="content">
                  Kaissa Global Business Systems Pvt Ltd is a software company
                  which proposes a unique solution to optimise and make life of
                  people, a little at a time with their application, Millenials.
                </div>
              </CardContent>
              <CardActions disableSpacing>
                <Button
                  onClick={() => handleExpandClick('exp7')}
                  aria-expanded={expanded['exp7']}
                  aria-label="show more"
                  sx={{color: 'white'}}
                >
                  MORE
                </Button>
              </CardActions>
              <Collapse in={expanded['exp7']} timeout="auto" unmountOnExit>
                <CardContent>
                  <strong>Roles and Responsibilities</strong>
                  <br />
                  <div className="content">
                    <ul style={{ listStyleType: 'disc' }}>
                      <li>Build Hybrid Application using Vue.js and Cordova.</li>
                      <li>
                        Built a Web Conferencing tool from scratch -
                        <a href="webrtc.kaissa.io">webrtc.kaissa.io</a>
                      </li>
                      <li>
                        Incorporate NoSQL database using IBM Cloudant built over
                        CouchDB.
                      </li>
                      <li>
                        Built a ML model to optimise daily tasks based on reward
                        systems.
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Collapse>
            </Card>
          </div>
        </li>
        <li>
          <div id="dbs" className="timeline-badge trans-all cursor-pointer">
            <img
              className="w-20px h-20px"
              src="img/cap-black.svg"
              alt="Expérience scolaire"
            />
          </div>
          <div className="timeline-panel">
            <Card className="md-accent left" sx={{ backgroundColor: '#001f3f', color: '#66ffcc' }}>
                <CardHeader
                  title="Deep Learning Specialization"
                  subheader="Coursera, Deeplearning.ai"
                  subheaderTypographyProps={{
                    sx: {
                      color: '#66ffcc', // Set subheader text color to white
                    },
                  }}
                />
                <CardHeader subheader="May 2019 - August 2019" />
              <CardContent>
                <div className="content">
                  Deep Learning Specialization is a catalogue course, taught by
                  esteemed Prof. Andrew Ng, University of Toronto and founder of
                  Deeplearning.ai, which includes various theoretical and
                  practical knowledge of Deep Learning.
                </div>
              </CardContent>
              <CardActions disableSpacing>
                <Button
                  onClick={() => handleExpandClick('exp8')}
                  aria-expanded={expanded['exp8']}
                  aria-label="show more"
                  sx={{color: '#66ffcc'}}
                >
                  MORE
                </Button>
              </CardActions>
              <Collapse in={expanded['exp8']} timeout="auto" unmountOnExit>
                <CardContent>
                  <strong>Courses in Specialization</strong>
                  <br />
                  <div className="content">
                    <ul style={{ listStyleType: 'disc' }}>
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
                </CardContent>
              </Collapse>
            </Card>
          </div>
        </li>
        <li className="timeline-inverted">
          <div id="bsb" className="timeline-badge trans-all cursor-pointer">
            <img
              className="w-20px h-20px"
              src="img/tie.svg"
              alt="Expérience scolaire"
            />
          </div>
          <div className="timeline-panel">
            <Card className="md-accent right" sx={{ backgroundColor: '#3D9970', color: 'white' }}>
                <CardHeader
                  title="Stock Market Analysis"
                  subheader="Machine Learning Internship"
                  subheaderTypographyProps={{
                    sx: {
                      color: 'white', // Set subheader text color to white
                    },
                  }}
                />
                <CardHeader subheader="July 2019 - August 2019" />
              <CardContent>
                <div className="content">
                  Understand the various aspects of Stock Market including
                  finding trends and building optimised portfolio using
                  statistical machine learning techniques.
                </div>
              </CardContent>
              <CardActions disableSpacing>
                <Button
                  onClick={() => handleExpandClick('exp9')}
                  aria-expanded={expanded['exp9']}
                  aria-label="show more"
                  sx={{color: 'white'}}
                >
                  MORE
                </Button>
              </CardActions>
              <Collapse in={expanded['exp9']} timeout="auto" unmountOnExit>
                <CardContent>
                  <strong>Tasks and Techniques</strong>
                  <br />
                  <div className="content">
                    <ul style={{ listStyleType: 'disc' }}>
                      <li>Data analysis and Data Cleaning</li>
                      <li>Data Visualisation and Technical Analysis</li>
                      <li>Fundamental Analysis using Regression</li>
                      <li>Trade Call Prediction using Classification</li>
                      <li>Applying Modern Portfolio Theory for Stocks</li>
                      <li>Clustering for Diversification Analysis</li>
                    </ul>
                  </div>
                </CardContent>
              </Collapse>
            </Card>
          </div>
        </li>
        <li>
          <div id="dbs" className="timeline-badge trans-all cursor-pointer">
            <img
              className="w-20px h-20px"
              src="img/cap-black.svg"
              alt="Expérience scolaire"
            />
          </div>
          <div className="timeline-panel">
            <Card className="md-accent left" sx={{ backgroundColor: '#001f3f', color: '#66ffcc' }}>
                <CardHeader
                  title="Fundamentals Of Digital Marketing"
                  subheader="Google"
                  subheaderTypographyProps={{
                    sx: {
                      color: '#66ffcc', // Set subheader text color to white
                    },
                  }}
                />
                <CardHeader subheader="February 2019" />
              <CardContent>
                <div className="content">
                  Fundamentals of Digital Marketing is a course by Google
                  Digital Unlocked, which included various aspects of Digital
                  Marketing techniques and tools.
                </div>
              </CardContent>
              <CardActions disableSpacing>
                <Button
                  onClick={() => handleExpandClick('exp10')}
                  aria-expanded={expanded['exp10']}
                  aria-label="show more"
                  sx={{color: '#66ffcc'}}
                >
                  MORE
                </Button>
              </CardActions>
              <Collapse in={expanded['exp10']} timeout="auto" unmountOnExit>
                <CardContent>
                  <strong>Techniques and Tools</strong>
                  <br />
                  <div className="content">
                    <ul style={{ listStyleType: 'disc' }}>
                      <li>Building Web presence</li>
                      <li>Planning online business strategy</li>
                      <li>Search Engine Optimisation</li>
                      <li>Social Media Marketing</li>
                      <li>Online Advertising and Campaigns</li>
                      <li>Discovering Trends and Analytics</li>
                    </ul>
                  </div>
                </CardContent>
              </Collapse>
            </Card>
          </div>
        </li>
        <li className="timeline-inverted">
          <div id="bsb" className="timeline-badge trans-all cursor-pointer">
            <img
              className="w-20px h-20px"
              src="img/cap-black.svg"
              alt="Expérience scolaire"
            />
          </div>
          <div className="timeline-panel">
            <Card className="md-accent right" sx={{ backgroundColor: '#3D9970', color: 'white' }}>
                <CardHeader
                  title="Bachelors of Engineering, Computer Science and Engineering"
                  subheader="Bhilai Institute of Technology, Durg"
                  subheaderTypographyProps={{
                    sx: {
                      color: 'white', // Set subheader text color to white
                    },
                  }}
                />
                <CardHeader subheader="August 2017 - Present" />
              <CardContent>
                <div className="content">
                  CSE Undergraduate in Bachelors of Engineering from BIT Durg.
                  It is a 4 year program, affiliated with AICTE.
                </div>
              </CardContent>
              <CardActions disableSpacing>
                <Button
                  onClick={() => handleExpandClick('exp11')}
                  aria-expanded={expanded['exp11']}
                  aria-label="show more"
                  sx={{color: 'white'}}
                >
                  MORE
                </Button>
              </CardActions>
              <Collapse in={expanded['exp11']} timeout="auto" unmountOnExit>
                <CardContent>
                  <strong>Achievements</strong>
                  <br />
                  <div className="content">
                    <ul style={{ listStyleType: 'disc' }}>
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
                        Elite Certificate in NPTEL's course of Programming in C++
                        and Problem Solving Through Programming in C
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Collapse>
            </Card>
          </div>
        </li>
        <li>
          <div id="dbs" className="timeline-badge trans-all cursor-pointer">
            <img
              className="w-20px h-20px"
              src="img/cap-black.svg"
              alt="Expérience scolaire"
            />
          </div>
          <div className="timeline-panel">
            <Card className="md-accent left" sx={{ backgroundColor: '#001f3f', color: '#66ffcc' }}>
                <CardHeader
                  title="Tabla"
                  subheader="Indira Kala Sangeet Vishwavidyalaya"
                  subheaderTypographyProps={{
                    sx: {
                      color: '#66ffcc', // Set subheader text color to white
                    },
                  }}
                />
              <CardContent>
                <div className="content">
                  A certified Tabla player from Indira Kala Sangeet
                  Vishwavidyalay, Khairagarh. Passed with distinction in
                  Madhyama Pratham, and completed four out of six year courses
                  including Prathama Pratham, Prathama Antim and Madhyama Antim.
                </div>
              </CardContent>
            </Card>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Timeline;