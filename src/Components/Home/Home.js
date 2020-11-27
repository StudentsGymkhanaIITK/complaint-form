import React, { Component } from "react";
import { Button } from "react-bootstrap";
import FormInput from "./FormInput";
import { ReCaptcha } from "react-recaptcha-google";
import ReCAPTCHA from "react-google-recaptcha";
import Navbar from "../Navbar/Navbar";

class Home extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      name: "",
      email: "",
      message: "",
      position: "",
      subject: "",
      post: null,
      input: false,
      captchState: false,
    };

    this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
    this.setState({
      post: event.target.value,
    });
  }

  componentDidMount() {
    // loadReCaptcha();
    if (this.captchaDemo) {
      console.log("started, just a second...");
      this.captchaDemo.reset();
    }
  }

  onLoadRecaptcha() {
    if (this.captchaDemo) {
      this.captchaDemo.reset();
    }
  }

  verifyCallback(recaptchaToken) {
    // Here you will get the final recaptchaToken!!!
    // console.log(recaptchaToken, "<= your recaptcha token");
    this.setState({ captchState: true });
  }

  onChange = (e) =>
    this.setState({
      [e.target.name]: e.target.value,
    });
  render() {
    return (
      <div>
        <Navbar />
        <div className="col-sm-9 col-lg-6 m-auto">
          <div className="card card-body mt-4 mb-4 ">
            <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfdqLfhF5Z2-fvUpf_zkwk8b_p7ZvndJFEJ105rd1wk5-4aoA/formResponse">
              <div className="form-group mt-3">
                <label>Name *</label>
                <input
                  className="form-control"
                  type="text"
                  name="entry.386602193"
                  onChange={this.onChange}
                  required
                />
              </div>

              <div className="form-group mt-3">
                <label>Roll Number *</label>
                <input
                  className="form-control"
                  type="number"
                  name="entry.2071498520"
                  onChange={this.onChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>IITK Email ID *</label>
                <input
                  className="form-control"
                  type="email"
                  name="entry.1660967211"
                  onChange={this.onChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>What is the Domain of your Complaint? *</label>
                <div className="form-group">
                  <select
                    className="form-control"
                    name="entry.2119653361"
                    onChange={this.handleInputChange}
                  >
                    <option defaultValue>
                      What is the Domain of your Complaint? *
                    </option>
                    <option value="Academic Affairs for Undergraduate Students">
                      Academic Affairs for Undergraduate Students
                    </option>
                    <option value="Academic Affairs for Postgraduate Students">
                      Academic Affairs for Postgraduate Students
                    </option>
                    <option value="Campus Culture in General (e.g.: Gender sensitivity, Senior-Junior interaction, Security related, etc.)">
                      Campus Culture in General
                    </option>
                    <option value="Commercial Establishments (Food Outlets, Shops etc.)">
                      Commercial Establishments
                    </option>
                    <option value="Cells (Community Welfare, Entrepreneurship, Election Commission, Outreach, Vox Populi)">
                      Cells
                    </option>
                    <option value="Councils (Academics and Career Council, Games and Sports Council, Media and Cultural Council, Science and Technology Council)">
                      Councils
                    </option>
                    <option value="Festivals (Antaragni, Techkriti, Udghosh)">
                      Festivals
                    </option>
                    <option value="General Championship (Galaxy, Takneek, Inferno)">
                      General Championship
                    </option>
                    <option value="Grievance Redressal by the Institute Administration">
                      Grievance Redressal by the Institute Administration
                    </option>
                    <option value="Hostel Affairs">Hostel Affairs</option>
                    <option value="Old SAC/New SAC related affairs">
                      Old SAC/New SAC related affairs
                    </option>
                    <option value="Other infrastructures (Health Centre, Library, Visitors Hostel and allied facilities, etc)">
                      Other infrastructures
                    </option>
                    <option value="Placements">Placements</option>
                    <option value="Students' Senate">Students' Senate</option>
                    <option value="Other:">Other</option>
                  </select>
                </div>
              </div>

              {this.state.post == "Other:" ? (
                <FormInput />
              ) : (
                console.log("Failed")
              )}

              <div className="form-group mt-3">
                <label>Your Complaint *</label>
                <input
                  className="form-control"
                  type="text"
                  name="entry.1454249708"
                  onChange={this.onChange}
                  required
                />
              </div>

              <div className="form-group mt-3">
                <label>Suggestions (If Any)</label>
                <textarea
                  className="form-control"
                  type="text"
                  name="entry.228886821"
                  onChange={this.onChange}
                  rows="5"
                />
              </div>

              <ReCaptcha
                ref={(el) => {
                  this.captchaDemo = el;
                }}
                size="normal"
                data-theme="dark"
                render="explicit"
                sitekey="6Lep4-0ZAAAAAJFKZ-LKTv5tgz8dqQJjsylfJhnW"
                onloadCallback={this.onLoadRecaptcha}
                verifyCallback={this.verifyCallback}
              />
              <ReCAPTCHA
                hidden
                sitekey="6LcmsesZAAAAAEJ9b7FBvTj3-kztxDSlxKbCKHEG"
              />

              {this.state.captchState ? (
                <div className="form-group">
                  <Button
                    type="submit"
                    id="submit-btn"
                    className="btn btn-primary"
                  >
                    Submit
                  </Button>
                </div>
              ) : (
                <div className="form-group">
                  <Button
                    type="submit"
                    id="submit-btn"
                    disabled
                    className="btn btn-primary"
                  >
                    Submit
                  </Button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
