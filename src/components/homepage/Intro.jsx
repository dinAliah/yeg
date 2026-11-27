function Intro() {
  return (
    <div className="yeg-hero-scope yeg-home-landing">
      <section className="hero" aria-labelledby="yeg-home-title">
        <div className="hero-bg" aria-hidden="true" />
        <div className="hero-content">
          <p className="hero-eyebrow">YEG Academy · Education &amp; career pathways</p>
          <h1 id="yeg-home-title">
            Shaping Malaysia&apos;s next generation of <em>career-ready</em> talent.
          </h1>
          <p className="lead">
            YEG Academy connects students with the education pathways employers are actually
            hiring for — through partnerships built with Malaysia&apos;s leading institutions.
          </p>
          <div className="cta-row">
            <a href="#programs" className="btn btn-gold">Explore Programmes</a>
            <a href="/career" className="btn btn-team">Join Our Team</a>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <span className="hero-visual-ring" />
          <span className="hero-visual-mark">YEG</span>
        </div>
      </section>

      <div className="partner-strip" aria-label="YEG Academy education partners">
        <div className="wrap">
          <span className="partner-label">Our education partners</span>
          <span className="partner-item">Innovative University College</span>
          <span className="partner-item">MAHSA University</span>
          <span className="partner-item">MEATECH</span>
          <span className="partner-item">Pelita Akademi</span>
        </div>
      </div>

      <section className="home-feature-section" id="programs" aria-label="YEG Academy pathways">
        <div className="home-feature-grid">
          <a className="home-feature-card home-feature-card-primary" href="/kursusdiploma/dhumy">
            <span className="home-feature-number">01 / PROGRAMMES</span>
            <h2>Career-ready pathways</h2>
            <p>Explore diploma programmes shaped around current education and industry needs.</p>
            <span className="home-feature-link">Explore programmes <span aria-hidden="true">↗</span></span>
          </a>
          <a className="home-feature-card home-feature-card-accent" href="/kursusdiplomawbl/dhumywbl">
            <span className="home-feature-number">02 / WORK-BASED LEARNING</span>
            <h2>Learn through experience</h2>
            <p>Combine 12 months of theory with 18 months of paid industry training.</p>
            <span className="home-feature-link">Discover WBL <span aria-hidden="true">↗</span></span>
          </a>
          <a className="home-feature-card home-feature-card-light" href="/about-us">
            <span className="home-feature-number">03 / PARTNERSHIPS</span>
            <h2>Connected to industry</h2>
            <p>Study with professional institutions and learn from experienced industry practitioners.</p>
            <span className="home-feature-link">About YEG Academy <span aria-hidden="true">↗</span></span>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Intro;
