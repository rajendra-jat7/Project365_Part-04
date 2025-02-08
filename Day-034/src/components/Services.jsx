import "./Services.css";

const Services = () => {
  return (
    <section id="services" className="services">
      <h2>Our Services</h2>
      <div className="service-boxes">
        <div className="service">
          <h3>Web Development 🌐</h3>
          <p>We build amazing websites that convert visitors into customers.</p>
        </div>
        <div className="service">
          <h3>Marketing 📢</h3>
          <p>Helping you reach the right audience and grow your brand.</p>
        </div>
        <div className="service">
          <h3>Branding 🎨</h3>
          <p>Creating stunning brand identities that stand out.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
