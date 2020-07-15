import React, { Component } from "react";
import "./Resume.css";

class Resume extends Component {
  state = {};
  render() {
    return (
      <div className="p-4">
        <div className="row">
          <div className="col-sm-12 col-lg-4 leftPanel text-center p-2">
            <img
              src="https://i.ytimg.com/vi/hbL9Pq-5mhI/maxresdefault.jpg"
              alt="profile image"
              width="300px"
              height="300px"
            />
            <h5>Name: Vangalapudi Jahnavi</h5>
            <h5>Mobile: 9090909090</h5>
            <h5>Email: resume.res@gmailcom</h5>
            <h5>Addres: Vizag</h5>
          </div>
          <div className="col-sm-12 col-lg-8 rightPanel p-2">
            <div className="row">
              <h5 className="col-12">Career objective:</h5>
              <p className="col-12">
                To secure a challenging position in a reputable organization to
                expand my learnings, knowledge, and skill.{" "}
              </p>
            </div>
            <div className="row">
              <h5 className="col-12"> Educational Details</h5>
              <div class="mx-auto">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name of the institute</th>
                      <th scope="col">Percentage</th>
                      <th scope="col">Year of passing</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Vignan's Institute of Information Technology</td>
                      <td>90.0</td>
                      <td>2022</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>sri chaitanya jr college</td>
                      <td>96.5%</td>
                      <td>2018</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Loyola em school</td>
                      <td>9.8</td>
                      <td>2016</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="row">
              <h5 className="col-12">Technical skills</h5>
              <ul type="square">
                <li>C Programing</li>
                <li>Python</li>
                <li>HTML</li>
                <li>Java</li>
              </ul>
            </div>
            <div className="row">
              <h5 className="col-12">Certificates</h5>
              <ul>
                <li> Introduction to networks- ICSI</li>
                <li>Digital marketing - Google digital garage</li>
                <li>
                  NPTEL certification on The Joy Of Computing Using Python
                </li>
                <li>Introduction To cyber security - Coursera</li>
                <li>Introduction to artifical intelligence - Coursera</li>
                <li>Communication skills by TCS Ion</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
