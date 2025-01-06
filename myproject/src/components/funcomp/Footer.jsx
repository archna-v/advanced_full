import "../../assets/css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="form-section">
        <h3>Contact Us</h3>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter your name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>
          <button type="submit">Submit</button>
        </form>
      </section>
    </footer>
  );
};

export default Footer;
