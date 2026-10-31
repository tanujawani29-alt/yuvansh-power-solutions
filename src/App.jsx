import { useState } from 'react';
import {
  Activity,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Cable,
  Check,
  CheckCircle2,
  CircuitBoard,
  ClipboardCheck,
  ExternalLink,
  Factory,
  FileText,
  HardHat,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  PlugZap,
  ShieldCheck,
  Wrench,
  X,
  Zap,
} from 'lucide-react';

const COMPANY = {
  name: 'Yuvansh Power Solutions',
  tagline: 'Safe Power for a Brighter Tomorrow',
  phone1: '+91 8766982905',
  phone1Name: 'Nayana Shende',
  phone2: '+91 9886636275',
  phone2Name: 'Sudarshan Shende',
  phone3: '+91 9483285511',
  phone3Name: 'Chandrakant Jadar',
  tel1: 'tel:+918766982905',
  tel2: 'tel:+919886636275',
  tel3: 'tel:+919483285511',
  whatsapp1: 'https://wa.me/918766982905',
  whatsapp2: 'https://wa.me/919886636275',
  whatsapp3: 'https://wa.me/919483285511',
  email: 'taratenayana6@gmail.com',
  email2: 'chandrujadar64@gmail.com',
  address: 'Mallikarjun Complex, Ground Floor, 2nd Cross, Bhagyanagar, Angol Road, Belagavi, Karnataka, India.',
};

const mapUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(COMPANY.address)}`;

const services = [
  {
    number: '01',
    icon: Cable,
    title: 'Electrical Installation & Wiring',
    description: 'Electrical installation and wiring for residential, commercial and industrial requirements.',
    tags: ['Residential', 'Commercial', 'Industrial'],
  },
  {
    number: '02',
    icon: Factory,
    title: 'Industrial & Commercial Electrical Works',
    description: 'Electrical contracting work for industrial facilities and commercial premises.',
    tags: ['Industrial', 'Commercial'],
  },
  {
    number: '03',
    icon: CircuitBoard,
    title: 'Electrical Panel Design & Wiring',
    description: 'Panel design, wiring and associated work for LT, MCC and PCC panels.',
    tags: ['LT Panel', 'MCC', 'PCC'],
  },
  {
    number: '04',
    icon: FileText,
    title: 'Electrical SLD & AutoCAD Drawings',
    description: 'Electrical single-line diagrams and AutoCAD drawings for planning and documentation.',
    tags: ['SLD', 'AutoCAD'],
  },
  {
    number: '05',
    icon: PlugZap,
    title: 'Earthing & Lightning Protection',
    description: 'Earthing and lightning protection solutions for electrical installations.',
    tags: ['Earthing', 'Protection'],
  },
  {
    number: '06',
    icon: Activity,
    title: 'Electrical Testing & Troubleshooting',
    description: 'Electrical testing and troubleshooting to help identify faults and system issues.',
    tags: ['Testing', 'Diagnostics'],
  },
  {
    number: '07',
    icon: Wrench,
    title: 'Repair, Maintenance & Modification Works',
    description: 'Electrical repair, routine maintenance and modification work for existing installations.',
    tags: ['Repair', 'Maintenance'],
  },
  {
    number: '08',
    icon: Zap,
    title: 'TC (Transformer Centre) Installation',
    description: 'Transformer Centre installation works for electrical distribution projects, planned around the site and applicable project requirements.',
    tags: ['TC Installation', 'Up to 33 kV'],
  },
];

const principles = [
  {
    icon: ShieldCheck,
    title: 'Safety first',
    description: 'Safety-focused planning and work practices for electrical installations.',
  },
  {
    icon: BadgeCheck,
    title: 'Quality workmanship',
    description: 'Attention to technical details, installation standards and project requirements.',
  },
  {
    icon: ClipboardCheck,
    title: 'Reliable service',
    description: 'A practical, organised and customer-focused approach to each requirement.',
  },
  {
    icon: HardHat,
    title: 'Technical solutions',
    description: 'Electrical work, panel services, drawings, testing and maintenance in one place.',
  },
];

function Brand({ inverse = false }) {
  return (
    <a className={`brand${inverse ? ' brand-inverse' : ''}`} href="#home" aria-label="Yuvansh Power Solutions home">
      <span className="brand-symbol" aria-hidden="true">
        <img src="/images/yuvansh-logo.jpg" alt="" width="48" height="48" />
      </span>
      <span className="brand-wordmark">
        <strong>YUVANSH</strong>
        <b>POWER SOLUTIONS</b>
        <small>DESIGN <i /> CONTRACT <i /> DELIVER</small>
      </span>
    </a>
  );
}

function ButtonLink({ href, children, variant = 'yellow', className = '', ...props }) {
  return (
    <a className={`button button-${variant}${className ? ` ${className}` : ''}`} href={href} {...props}>
      {children}
    </a>
  );
}

function SectionHeading({ kicker, title, highlight, description, centered = false, light = false }) {
  return (
    <div className={`section-heading${centered ? ' section-heading-centered' : ''}${light ? ' section-heading-light' : ''}`}>
      <div className="section-kicker"><span />{kicker}</div>
      <h2>{title} <em>{highlight}</em></h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    ['Home', '#home'],
    ['About Us', '#about'],
    ['Services', '#services'],
    ['Why Choose Us', '#why-us'],
    ['Contact', '#contact'],
  ];

  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Brand />
        <button
          type="button"
          className="mobile-menu-toggle"
          onClick={() => setOpen((current) => !current)}
          aria-expanded={open}
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
        <nav className={`nav-menu${open ? ' nav-menu-open' : ''}`} aria-label="Main navigation">
          {links.map(([label, href]) => (
            <a key={label} href={href} onClick={closeMenu}>{label}</a>
          ))}
          <ButtonLink href="#contact" className="nav-button" variant="navy" onClick={closeMenu}>
            Get in touch <ArrowUpRight size={16} />
          </ButtonLink>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-grid-glow" aria-hidden="true" />
      <div className="container hero-layout">
        <div className="hero-content">
          <div className="hero-eyebrow"><span className="live-dot" /> CLASS 1 ELECTRICAL CONTRACTOR</div>
          <h1>Powering progress.<br /><span>Built on trust.</span></h1>
          <p className="hero-tagline">{COMPANY.tagline}.</p>
          <p className="hero-description">
            Electrical contracting solutions for residential, commercial and industrial requirements — thoughtfully planned from design to delivery.
          </p>
          <div className="hero-ctas">
            <ButtonLink href="#contact">Discuss your project <ArrowUpRight size={17} /></ButtonLink>
            <ButtonLink href="#services" variant="outline">Explore our services <ArrowRight size={17} /></ButtonLink>
          </div>
          <div className="hero-assurance-list">
            <span><CheckCircle2 size={16} /> Safety-focused</span>
            <span><CheckCircle2 size={16} /> Quality workmanship</span>
            <span><CheckCircle2 size={16} /> Practical solutions</span>
          </div>
          <div className="hero-scroll-hint"><span /> Electrical solutions for real-world needs</div>
        </div>

        <div className="hero-visual" aria-label="Electrical control panels and technical work">
          <div className="hero-visual-backdrop" />
          <div className="hero-image-frame">
            <img src="/images/transformer-substation.webp" alt="Power transformer and electrical substation infrastructure" fetchPriority="high" />
            <div className="hero-image-shade" />
            <div className="hero-image-caption"><span>POWER DISTRIBUTION INFRASTRUCTURE</span><strong>Transformer &amp; substation works</strong></div>
          </div>
          <div className="hero-outline" />
          <div className="hero-floating-label">
            <span className="floating-icon"><Zap size={22} fill="currentColor" /></span>
            <span><strong>DESIGN</strong><b>CONTRACT</b><strong>DELIVER</strong></span>
          </div>
          <div className="hero-small-image">
            <img src="/images/electrical-technician.jpg" alt="Electrical equipment and control wiring" />
            <span><span className="small-image-dot" /> Electrical systems</span>
          </div>
          <div className="hero-index">01 <i /> 08</div>
        </div>
      </div>
      <div className="hero-bottom-accent" />
    </section>
  );
}

function CompanyStrip() {
  return (
    <div className="company-strip" aria-label="Company service principles">
      <div className="container strip-inner">
        <div><ShieldCheck size={22} /><span>Safety-minded approach</span></div>
        <span className="strip-separator" />
        <div><BadgeCheck size={22} /><span>Quality workmanship</span></div>
        <span className="strip-separator" />
        <div><CircuitBoard size={22} /><span>Technical solutions</span></div>
        <span className="strip-separator" />
        <div><Zap size={22} /><span>Design · Contract · Deliver</span></div>
      </div>
    </div>
  );
}

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container about-layout">
        <div className="about-visual">
          <div className="about-photo-main">
            <img src="/images/electrical-engineer.jpg" alt="Technician working near electrical equipment" loading="lazy" />
          </div>
          <div className="about-photo-secondary">
            <img src="/images/electrical-drawings.jpg" alt="Electrical technical drawings and planning" loading="lazy" />
            <span><FileText size={17} /> Planning & drawings</span>
          </div>
          <div className="about-yellow-square" />
          <div className="about-stamp"><Zap size={21} fill="currentColor" /><span>SAFE POWER<br />BRIGHTER TOMORROW</span></div>
        </div>
        <div className="about-copy">
          <SectionHeading kicker="ABOUT YUVANSH" title="Engineering power." highlight="Delivering confidence." />
          <p>
            Yuvansh Power Solutions is a Class 1 Electrical Contractor based in Belagavi, Karnataka, providing electrical contracting services for residential, commercial and industrial requirements.
          </p>
          <p>
            Our work includes electrical installation and wiring, panel design and wiring, electrical SLD and AutoCAD drawings, earthing and lightning protection, TC (Transformer Centre) installation, testing, troubleshooting, repairs and maintenance.
          </p>
          <p>
            We undertake electrical contracting work up to 33 kV. Every requirement receives a considered approach, with attention to safety, quality workmanship and practical technical solutions.
          </p>
          <div className="about-checks">
            <span><Check size={15} /> Residential, commercial & industrial</span>
            <span><Check size={15} /> Installation, panels & technical drawings</span>
            <span><Check size={15} /> Testing, troubleshooting & maintenance</span>
            <span><Check size={15} /> Electrical contracting work up to 33 kV</span>
          </div>
          <ButtonLink href="#services" variant="text">Discover our services <ArrowRight size={17} /></ButtonLink>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="section services-section" id="services">
      <div className="container">
        <SectionHeading
          kicker="WHAT WE DO"
          title="Electrical solutions"
          highlight="for every need."
          description="Explore our electrical contracting services, from wiring and TC installation to panel works, drawings, testing and maintenance."
          centered
        />
        <div className="services-grid">
          {services.map(({ number, icon: Icon, title, description, tags }) => (
            <article className="service-card" key={number}>
              <div className="service-topline"><span className="service-icon"><Icon size={24} strokeWidth={1.8} /></span><span className="service-number">{number}</span></div>
              <h3>{title}</h3>
              <p>{description}</p>
              <div className="service-tags">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <a className="service-enquire" href="#contact" aria-label={`Enquire about ${title}`}>Enquire about service <ArrowUpRight size={16} /></a>
            </article>
          ))}
        </div>
        <div className="services-bottom">
          <div><span className="services-bottom-line" /><p>Have a specific electrical requirement?</p></div>
          <ButtonLink href="#contact" variant="navy">Let’s discuss <ArrowRight size={17} /></ButtonLink>
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section className="section values-section" id="why-us">
      <div className="container values-layout">
        <div className="values-copy">
          <SectionHeading kicker="WHY YUVANSH" title="The right approach" highlight="to electrical work." />
          <p>Electrical projects need planning, technical understanding and attention to safety. We focus on practical solutions shaped around each customer’s requirements.</p>
          <ButtonLink href="#contact">Talk to our team <ArrowUpRight size={17} /></ButtonLink>
          <div className="values-note"><span className="values-note-icon"><ShieldCheck size={20} /></span><span><strong>Safety first. Always.</strong><small>A principle that guides how we approach electrical work.</small></span></div>
        </div>
        <div className="principles-grid">
          {principles.map(({ icon: Icon, title, description }, index) => (
            <article className="principle-card" key={title}>
              <span className="principle-number">0{index + 1}</span>
              <div className="principle-icon"><Icon size={23} strokeWidth={1.8} /></div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { number: '01', title: 'Understand', text: 'Discuss your site, application and electrical requirements.' },
    { number: '02', title: 'Plan', text: 'Consider the suitable scope of work and technical needs.' },
    { number: '03', title: 'Deliver', text: 'Move forward with a clear, safety-focused work approach.' },
  ];
  return (
    <section className="process-section">
      <div className="container process-layout">
        <div className="process-intro">
          <span className="process-overline">A CLEAR WAY FORWARD</span>
          <h2>From first conversation<br />to <em>the right solution.</em></h2>
        </div>
        <div className="process-steps">
          {steps.map((step) => (
            <article className="process-step" key={step.number}>
              <span className="process-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <SectionHeading
          kicker="GET IN TOUCH"
          title="Let’s talk"
          highlight="power solutions."
          description="Share your electrical requirements with Yuvansh Power Solutions. Choose a direct way to connect with us."
        />
        <div className="contact-layout">
          <div className="contact-details">
            <h3>Connect with our team</h3>
            <p className="contact-intro">For enquiries about electrical installation, TC installation, panels, drawings, testing, troubleshooting or maintenance, contact us directly.</p>
            <div className="contact-detail-row">
              <span className="contact-detail-icon"><Phone size={20} /></span>
              <div>
                <span className="contact-label">CALL US</span>
                <a href={COMPANY.tel1}>{COMPANY.phone1} — {COMPANY.phone1Name}</a>
                <a href={COMPANY.tel2}>{COMPANY.phone2} — {COMPANY.phone2Name}</a>
                <a href={COMPANY.tel3}>{COMPANY.phone3} — {COMPANY.phone3Name}</a>
              </div>
            </div>
            <div className="contact-detail-row">
              <span className="contact-detail-icon"><Mail size={20} /></span>
              <div>
                <span className="contact-label">EMAIL US</span>
                <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
                <a href={`mailto:${COMPANY.email2}`}>{COMPANY.email2} — {COMPANY.phone3Name}</a>
              </div>
            </div>
            <div className="contact-detail-row contact-address-row">
              <span className="contact-detail-icon"><MapPin size={20} /></span>
              <div><span className="contact-label">VISIT US</span><p>{COMPANY.address}</p><a className="directions-link" href={mapUrl} target="_blank" rel="noreferrer">Get Google Maps directions <ExternalLink size={14} /></a></div>
            </div>
          </div>

          <div className="contact-panel">
            <div className="contact-panel-heading">
              <span className="contact-panel-kicker">YUVANSH POWER SOLUTIONS</span>
              <h3>How can we help you?</h3>
              <p>Choose your preferred way to get in touch.</p>
              <div className="contact-panel-mark"><Zap size={74} fill="currentColor" /></div>
            </div>
            <div className="contact-actions">
              <a className="contact-action" href={COMPANY.whatsapp1} target="_blank" rel="noreferrer">
                <span className="contact-action-icon whatsapp"><MessageCircle size={20} /></span>
                <span className="contact-action-copy"><strong>{COMPANY.phone1Name}</strong><small>{COMPANY.phone1} · WhatsApp</small></span>
                <ArrowUpRight size={17} />
              </a>
              <a className="contact-action" href={COMPANY.whatsapp2} target="_blank" rel="noreferrer">
                <span className="contact-action-icon whatsapp"><MessageCircle size={20} /></span>
                <span className="contact-action-copy"><strong>{COMPANY.phone2Name}</strong><small>{COMPANY.phone2} · WhatsApp</small></span>
                <ArrowUpRight size={17} />
              </a>
              <a className="contact-action" href={COMPANY.whatsapp3} target="_blank" rel="noreferrer">
                <span className="contact-action-icon whatsapp"><MessageCircle size={20} /></span>
                <span className="contact-action-copy"><strong>{COMPANY.phone3Name}</strong><small>{COMPANY.phone3} · WhatsApp</small></span>
                <ArrowUpRight size={17} />
              </a>
              <a className="contact-action" href={`mailto:${COMPANY.email}`}>
                <span className="contact-action-icon"><Mail size={20} /></span>
                <span className="contact-action-copy"><strong>Business email</strong><small>{COMPANY.email}</small></span>
                <ArrowUpRight size={17} />
              </a>
              <a className="contact-action" href={`mailto:${COMPANY.email2}`}>
                <span className="contact-action-icon"><Mail size={20} /></span>
                <span className="contact-action-copy"><strong>Email · {COMPANY.phone3Name}</strong><small>{COMPANY.email2}</small></span>
                <ArrowUpRight size={17} />
              </a>
            </div>
            <div className="contact-panel-footer"><ShieldCheck size={16} /> Safe Power for a Brighter Tomorrow</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand-block">
            <Brand inverse />
            <p>Electrical contracting solutions up to 33 kV for residential, commercial and industrial requirements in Belagavi, Karnataka.</p>
            <span className="footer-tagline">{COMPANY.tagline}.</span>
          </div>
          <div className="footer-nav-block">
            <h3>QUICK LINKS</h3>
            <a href="#home">Home</a><a href="#about">About Us</a><a href="#services">Our Services</a><a href="#why-us">Why Choose Us</a><a href="#contact">Contact</a>
          </div>
          <div className="footer-contact-block">
            <h3>CONTACT DETAILS</h3>
            <a href={COMPANY.tel1}><Phone size={15} /> {COMPANY.phone1} — {COMPANY.phone1Name}</a>
            <a href={COMPANY.tel2}><Phone size={15} /> {COMPANY.phone2} — {COMPANY.phone2Name}</a>
            <a href={COMPANY.tel3}><Phone size={15} /> {COMPANY.phone3} — {COMPANY.phone3Name}</a>
            <a href={`mailto:${COMPANY.email}`}><Mail size={15} /> {COMPANY.email}</a>
            <a href={`mailto:${COMPANY.email2}`}><Mail size={15} /> {COMPANY.email2}</a>
            <p><MapPin size={16} /> {COMPANY.address}</p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Yuvansh Power Solutions. All rights reserved.</span>
          <span className="footer-motto">DESIGN <i /> CONTRACT <i /> DELIVER</span>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CompanyStrip />
        <About />
        <Services />
        <WhyChooseUs />
        <Process />
        <section className="cta-band">
          <div className="container cta-band-inner">
            <div className="cta-band-symbol"><Zap size={29} fill="currentColor" /></div>
            <div className="cta-band-copy"><span>LET’S POWER YOUR NEXT PROJECT</span><h2>Have an electrical project in mind?</h2><p>Connect with us to discuss your requirements.</p></div>
            <ButtonLink href="#contact">Contact us <ArrowUpRight size={17} /></ButtonLink>
            <Zap className="cta-band-watermark" size={150} />
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
      <a className="floating-whatsapp" href={COMPANY.whatsapp1} target="_blank" rel="noreferrer" aria-label="Contact Yuvansh Power Solutions on WhatsApp">
        <MessageCircle size={25} />
      </a>
      <a className="back-to-top" href="#home" aria-label="Back to top"><ArrowDownRight size={17} /></a>
    </>
  );
}

export default App;
