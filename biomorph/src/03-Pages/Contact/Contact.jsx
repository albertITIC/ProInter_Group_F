import Header from "../../02-Components/Header/Header";
import backgroundImage from "../../../assets/sddefault.jpg";
import Footer from "../../02-Components/Footer/Footer";
const ContactUs = () => {
  return (
    <>
      <Header />
      <div
        className="contact-page"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="contact-container">
          <h1>CONTACT US</h1>

          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">NAME: *</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">EMAIL: *</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Email"
              />
            </div>

            <div className="form-group" id="comments">
              <label htmlFor="comments">COMMENTS: *</label>
              <textarea
                id="comments"
                name="comments"
                required
                rows="5"
                placeholder="Comments"
              ></textarea>
            </div>

            <button type="submit" id="submit" className="submit-button">
              Send
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
