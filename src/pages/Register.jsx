import "../styles/Register.css";

function Register() {
  return (
    <section className="register">
      <div className="register-container">

        <h1>Student Registration</h1>
        <p>
          Enroll your child at Bright Minds Pre-Learning Skill Centre.
          Please fill out the form below.
        </p>

        <form className="register-form">

          <div className="form-group">
            <label>Student Name *</label>
            <input type="text" placeholder="Enter Student Name" />
          </div>

          <div className="form-group">
            <label>Age *</label>
            <input type="number" placeholder="Enter Age" />
          </div>

          <div className="form-group">
            <label>Gender *</label>
            <select>
              <option>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>

          <div className="form-group">
            <label>Parent Name *</label>
            <input type="text" placeholder="Enter Parent Name" />
          </div>

          <div className="form-group">
            <label>Mobile Number *</label>
            <input type="tel" placeholder="Enter Mobile Number" />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="Enter Email" />
          </div>

          <div className="form-group">
            <label>Course *</label>
            <select>
              <option>Select Course</option>
              <option>Abacus</option>
              <option>Vedic Maths</option>
              <option>Phonics</option>
            </select>
          </div>

          <div className="form-group">
            <label>Preferred Batch</label>
            <select>
              <option>Select Batch</option>
              <option>Morning</option>
              <option>Evening</option>
              <option>Weekend</option>
            </select>
          </div>

          <div className="form-group">
            <label>School Name</label>
            <input type="text" placeholder="Enter School Name" />
          </div>

          <div className="form-group full-width">
            <label>Address</label>
            <textarea
              rows="3"
              placeholder="Enter Address"
            ></textarea>
          </div>

          <div className="form-group full-width">
            <label>Additional Message</label>
            <textarea
              rows="4"
              placeholder="Write your message"
            ></textarea>
          </div>

          <button type="submit" className="register-btn">
            Register Now
          </button>

        </form>

      </div>
    </section>
  );
}

export default Register;