import React, { useState, useEffect, useCallback, type JSX } from "react";
import {
  Menu,
  X,
  ArrowRight,
  Star,
  Users,
  Zap,
  Globe,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  Instagram,
  Linkedin,
  Twitter,
  ChevronDown,
  Sun,
} from "lucide-react";
import ReactDOM from "react-dom/client";
import "./index.css";

// --- Assets & Data ---

// Use the uploaded image file for the logo
const LOGO_IMAGE_PATH: string = "/Bepro_Logo-Black.png";

// --- Theme Type Definition ---
type Theme = "dark" | "light";

// --- Interfaces for Data Structures ---

interface Service {
  title: string;
  description: string;
  icon: JSX.Element;
}

interface PortfolioItem {
  id: number;
  client: string;
  type: string;
  image: string;
  size: string;
}

interface Stat {
  number: string;
  label: string;
}

interface ClientLogo {
  name: string;
  image: string;
}

const services: Service[] = [
  {
    title: "Experiential Marketing",
    description:
      "We don't just tell stories; we let your audience live them. Immersive brand activations that leave a lasting imprint.",
    icon: <Zap className="w-8 h-8" />,
  },
  {
    title: "MICE & Corporate",
    description:
      "From large-scale conferences in Dubai to incentive trips in Bali. Seamless logistics, flawless execution.",
    icon: <Globe className="w-8 h-8" />,
  },
  {
    title: "Large Format Events",
    description:
      "Concerts, award nights, and festivals. We handle the grandeur, the lights, and the roaring crowds.",
    icon: <Users className="w-8 h-8" />,
  },
  {
    title: "Digital Integration",
    description:
      "Hybrid events that bridge the physical and digital worlds. Live streaming, AR/VR booths, and tech-driven engagement.",
    icon: <Star className="w-8 h-8" />,
  },
];

const portfolio: PortfolioItem[] = [
  {
    id: 1,
    client: "TechSummit 2024",
    type: "Conference",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1000",
    size: "col-span-1 md:col-span-2",
  },
  {
    id: 2,
    client: "Neon Launch",
    type: "Product Reveal",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1000",
    size: "col-span-1",
  },
  {
    id: 3,
    client: "Auto Expo",
    type: "Exhibition",
    image:
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&q=80&w=1000",
    size: "col-span-1",
  },
  {
    id: 4,
    client: "Gala Night",
    type: "Award Show",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1000",
    size: "col-span-1 md:col-span-2",
  },
];

const stats: Stat[] = [
  { number: "500+", label: "Events Executed" },
  { number: "50+", label: "Global Brands" },
  { number: "10", label: "Years Experience" },
  { number: "100%", label: "Client Retention" },
];

const clientLogos: ClientLogo[] = [
  {
    name: "Bisleri",
    image:
      "https://images.unsplash.com/photo-1546484396-fb32524a1b6a?auto=format&fit=crop&q=80&w=300",
  },
  {
    name: "Samsung",
    image:
      "https://images.unsplash.com/photo-1577749454178-57155e82b793?auto=format&fit=crop&q=80&w=300",
  },
  {
    name: "RedBull",
    image:
      "https://images.unsplash.com/photo-1555554311-6454a8607142?auto=format&fit=crop&q=80&w=300",
  },
  {
    name: "Puma",
    image:
      "https://images.unsplash.com/photo-1563297007-062e08e68407?auto=format&fit=crop&q=80&w=300",
  },
  {
    name: "Nestle",
    image:
      "https://images.unsplash.com/photo-1549419193-f111e1f5e8f4?auto=format&fit=crop&q=80&w=300",
  },
  {
    name: "Tesla",
    image:
      "https://images.unsplash.com/photo-1620608552697-3f30327f1c1f?auto=format&fit=crop&q=80&w=300",
  },
  {
    name: "SpaceX",
    image:
      "https://images.unsplash.com/photo-1517976150201-90a6125be7d4?auto=format&fit=crop&q=80&w=300",
  },
  {
    name: "Google",
    image:
      "https://images.unsplash.com/photo-1534665482329-a1b6441b9e1d?auto=format&fit=crop&q=80&w=300",
  },
  {
    name: "Audi",
    image:
      "https://images.unsplash.com/photo-1601923057143-42e58c8a14b0?auto=format&fit=crop&q=80&w=300",
  },
  {
    name: "Amazon",
    image:
      "https://images.unsplash.com/photo-1518175402120-0080327e2a96?auto=format&fit=crop&q=80&w=300",
  },
];

// --- Components ---

interface NavbarProps {
  scrolled: boolean;
  isVisible: boolean;
  theme: Theme;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  scrolled,
  isVisible,
  theme,
  toggleTheme,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Conditional classes
  const textColor: string = theme === "dark" ? "text-white" : "text-black";
  const mobileLinkColor: string =
    theme === "dark"
      ? "text-white hover:text-gray-400"
      : "text-black hover:text-gray-600";
  const mobileBg: string =
    theme === "dark"
      ? "bg-black border-b border-white/10"
      : "bg-gray-50 border-b border-gray-200";

  const scrolledBg: string =
    theme === "dark"
      ? "bg-black/90 backdrop-blur-md border-b border-white/10"
      : "bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200";
  const baseBg: string = scrolled ? scrolledBg : "bg-transparent";

  const buttonClasses: string =
    theme === "dark"
      ? "bg-white text-black hover:bg-gray-200"
      : "bg-black text-white hover:bg-gray-800";

  const visibilityClass: string = isVisible
    ? "translate-y-0"
    : "-translate-y-full";

  // Toggle button styling
  const toggleClasses: string =
    theme === "dark"
      ? "bg-zinc-800 text-yellow-400 hover:bg-zinc-700"
      : "bg-gray-200 text-black hover:bg-gray-300";

  const menuLinkClasses = (currentTheme: Theme): string =>
    currentTheme === "dark"
      ? "text-gray-300 hover:text-white"
      : "text-gray-600 hover:text-black";

  // Image filter for the logo to ensure visibility on both dark and light backgrounds
  const logoFilter: string = theme === "dark" ? "filter invert brightness-150" : "";

  return (
    <nav
      className={`fixed w-full justify-between z-50 transition-all duration-300 ${baseBg} py-4 ${visibilityClass}`}
    >
      <div className="container mx-auto flex justify-between  px-6">
        <div className="flex items-center justify-between">
          {/* Logo updated to use the image file */}
          <img
            src={LOGO_IMAGE_PATH}
            alt="Bepro Logo"
            className={`h-10 md:h-12 w-auto transition-filter duration-500 ${logoFilter}`}
          />
        </div>

        {/* Desktop Menu and Toggle */}
        <div className="hidden md:flex space-x-8 items-center">

          {["Home", "Services", "Work", "About", "Contact"].map(
            (item: string) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-sm font-medium ${menuLinkClasses(
                  theme
                )} uppercase tracking-widest transition-colors`}
              >
                {item}
              </a>
            )
          )}

          {/* Theme Toggle Switch */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors ${toggleClasses}`}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? (
              <Zap className="w-5 h-5" />
            ) : (
              <Sun className="w-5 h-5" />
            )}
          </button>

          <button
            className={`px-6 py-2 text-sm font-bold uppercase tracking-wider transition-colors ${buttonClasses}`}
          >
            Get Quote
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden ${textColor}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`md:hidden absolute top-full left-0 w-full p-6 flex flex-col space-y-4 ${mobileBg}`}
        >
          {["Home", "Services", "Work", "About", "Contact"].map(
            (item: string) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-serif ${mobileLinkColor}`}
              >
                {item}
              </a>
            )
          )}
          {/* Toggle Switch in mobile menu */}
          <div className="pt-2">
            <button
              onClick={toggleTheme}
              className={`flex items-center gap-2 p-3 rounded-lg font-bold text-sm uppercase tracking-widest transition-colors ${toggleClasses}`}
              aria-label={`Switch to ${
                theme === "dark" ? "light" : "dark"
              } mode`}
            >
              {theme === "dark" ? (
                <Zap className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

interface HeroProps {
  theme: Theme;
}

const Hero: React.FC<HeroProps> = ({ theme }) => {
  // Conditional colors
  const subtextColor: string =
    theme === "dark" ? "text-gray-400" : "text-gray-600";
  const mainTextColor: string = theme === "dark" ? "text-white" : "text-black";
  const italicTextColor: string =
    theme === "dark" ? "text-gray-200" : "text-gray-700";
  const primaryBtn: string =
    theme === "dark"
      ? "bg-white text-black hover:bg-gray-200"
      : "bg-black text-white hover:bg-gray-800";
  const secondaryBtn: string =
    theme === "dark"
      ? "border-white text-white hover:bg-white hover:text-black"
      : "border-black text-black hover:bg-black hover:text-white";
  const bgColors: string = theme === "dark" ? "bg-black" : "bg-gray-50";

  return (
    // Defining custom keyframes using a style tag, essential for custom animations in a single React file
    <>
      <style>{`
        @keyframes floatSlow {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        .animate-float-slow {
          animation: floatSlow 20s ease-in-out infinite;
        }
        /* Custom keyframes for fade-in-up animation */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation-name: fadeInUp;
        }
        .fill-mode-forwards {
          animation-fill-mode: forwards;
        }
      `}</style>
      <header
        id="home"
        className={`relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20 transition-colors duration-500 ${bgColors}`}
      >
        {/* Abstract Background Motion Elements - adjusted opacity/color for light mode */}
        <div
          className={`absolute inset-0 z-0 opacity-40 transition-opacity duration-500 ${
            theme === "dark" ? "opacity-40" : "opacity-10"
          }`}
        >
          <div
            className={`absolute top-[-20%] left-[-10%] w-[50%] h-[50%] ${
              theme === "dark" ? "bg-white/5" : "bg-black/5"
            } rounded-full blur-[120px] animate-float-slow`}
          ></div>
          <div
            className={`absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] ${
              theme === "dark" ? "bg-white/10" : "bg-black/10"
            } rounded-full blur-[100px] animate-float-slow delay-[10s] duration-[22s]`}
          ></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2
            className={`text-sm md:text-base uppercase tracking-[0.3em] mb-6 opacity-0 animate-fade-in-up duration-700 ease-out fill-mode-forwards ${subtextColor}`}
          >
            The Event Architects
          </h2>

          <h1
            className={`flex flex-col items-center font-serif font-bold mb-10 ${mainTextColor}`}
          >
            <span className="text-5xl md:text-6xl lg:text-8xl leading-none tracking-tight inline-block opacity-0 animate-fade-in-up duration-1000 ease-out delay-[300ms] fill-mode-forwards">
              BE BOLD.
            </span>
            <span
              className={`text-3xl md:text-5xl lg:text-7xl italic font-light my-4 md:my-6 leading-tight inline-block opacity-0 animate-fade-in-up duration-1000 ease-out delay-[500ms] fill-mode-forwards ${italicTextColor}`}
            >
              BE PROFESSIONAL.
            </span>
            <span className="text-5xl md:text-6xl lg:text-8xl leading-none tracking-tight inline-block opacity-0 animate-fade-in-up duration-1000 ease-out delay-[700ms] fill-mode-forwards">
              BEPRO.
            </span>
          </h1>

          <p
            className={`max-w-xl mx-auto mb-10 text-lg leading-relaxed opacity-0 animate-fade-in-up duration-700 ease-out delay-[900ms] fill-mode-forwards ${subtextColor}`}
          >
            We craft award-winning live experiences and brand activations that
            captivate audiences and define industries.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center opacity-0 animate-fade-in-up duration-700 ease-out delay-[1100ms] fill-mode-forwards">
            <a
              href="#work"
              className={`px-8 py-4 font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 group ${primaryBtn}`}
            >
              View Portfolio{" "}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className={`px-8 py-4 border font-bold uppercase tracking-widest transition-all ${secondaryBtn}`}
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce p-2 rounded-full border ${
            theme === "dark"
              ? "border-white/20 text-white/90"
              : "border-black/20 text-black/90"
          }`}
        >
          <ChevronDown className="w-6 h-6" />
        </div>
      </header>
    </>
  );
};

interface ClientLogosProps {
  theme: Theme;
}

const ClientLogos: React.FC<ClientLogosProps> = ({ theme }) => {
  const allLogos: ClientLogo[] = [...clientLogos, ...clientLogos];
  const sectionBg: string =
    theme === "dark"
      ? "bg-zinc-950 border-white/5"
      : "bg-gray-100 border-gray-200";

  return (
    <>
      <style>{`
        @keyframes slide {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .logo-slide-container {
          display: flex;
          width: 200%;
          animation: slide 30s linear infinite;
          animation-play-state: running; 
        }
        .logo-slide-container:hover {
            animation-play-state: paused;
        }
        .logo-item {
          width: calc(100% / 10); 
          flex-shrink: 0;
        }
      `}</style>
      <section
        className={`py-12 overflow-hidden border-b transition-colors duration-500 ${sectionBg}`}
      >
        <div className="text-center mb-8">
          <h3
            className={`text-sm font-bold uppercase tracking-widest ${
              theme === "dark" ? "text-gray-700" : "text-gray-400"
            }`}
          >
            Trusted by Global Leaders
          </h3>
        </div>
        <div className="relative w-full overflow-hidden whitespace-nowrap">
          <div className="logo-slide-container">
            {allLogos.map((client: ClientLogo, index: number) => (
              <div
                key={index}
                className="logo-item flex justify-center items-center h-20 px-4 opacity-70 hover:opacity-100 transition-opacity duration-300"
                aria-label={client.name}
              >
                <img
                  src={client.image}
                  alt={`${client.name} Logo`}
                  // Conditional filters for high contrast in both modes
                  className={`h-10 w-auto max-w-full object-contain transition-all duration-500 ${
                    theme === "dark"
                      ? "grayscale brightness-150"
                      : "grayscale opacity-70"
                  }`}
                  onError={(
                    e: React.SyntheticEvent<HTMLImageElement, Event>
                  ) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = `https://placehold.co/100x40/${
                      theme === "dark" ? "000000" : "FFFFFF"
                    }/${theme === "dark" ? "FFFFFF" : "000000"}/png?text=${
                      client.name
                    }`;
                    target.className = "h-10 w-auto object-contain";
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

interface AboutProps {
  theme: Theme;
}

const About: React.FC<AboutProps> = ({ theme }) => {
  const sectionBg: string = theme === "dark" ? "bg-zinc-950" : "bg-white";
  const headingColor: string = theme === "dark" ? "text-white" : "text-black";
  const subtextColor: string =
    theme === "dark" ? "text-gray-500" : "text-gray-500";
  const bodyTextColor: string =
    theme === "dark" ? "text-gray-400" : "text-gray-700";
  const borderColor: string =
    theme === "dark" ? "border-white/20" : "border-gray-300";
  const imageFilter: string =
    theme === "dark"
      ? "grayscale hover:grayscale-0"
      : "grayscale-0 opacity-90 hover:opacity-100";

  return (
    <section
      id="about"
      className={`py-24 transition-colors duration-500 ${sectionBg} ${headingColor}`}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div
              className={`absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 ${borderColor}`}
            ></div>
            <img
              src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800"
              alt="Event Planning"
              className={`w-full h-[500px] object-cover transition-all duration-700 ${imageFilter}`}
            />
            <div
              className={`absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 ${borderColor}`}
            ></div>
          </div>
          <div>
            <h3
              className={`text-sm font-bold uppercase tracking-widest mb-2 ${subtextColor}`}
            >
              Who We Are
            </h3>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              Designing the <br />
              Unforgettable.
            </h2>
            <p className={`mb-6 leading-relaxed ${bodyTextColor}`}>
              At Bepro, we believe that an event is not just a gathering—it's a
              statement. Founded on the principles of precision and creativity,
              we have established ourselves as a formidable force in the
              experiential marketing industry.
            </p>
            <p className={`mb-8 leading-relaxed ${bodyTextColor}`}>
              Unlike our competitors who focus on volume, we focus on value.
              Every light fixture, every sound cue, and every guest interaction
              is meticulously curated to align with your brand's voice.
            </p>

            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat: Stat, idx: number) => (
                <div key={idx} className={`border-l pl-4 ${borderColor}`}>
                  <div
                    className={`text-3xl font-serif font-bold mb-1 ${headingColor}`}
                  >
                    {stat.number}
                  </div>
                  <div
                    className={`text-xs uppercase tracking-wider ${subtextColor}`}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ServicesProps {
  theme: Theme;
}

const Services: React.FC<ServicesProps> = ({ theme }) => {
  const sectionBg: string = theme === "dark" ? "bg-black" : "bg-gray-50";
  const headingColor: string = theme === "dark" ? "text-white" : "text-black";
  const dividerBg: string = theme === "dark" ? "bg-white" : "bg-black";
  const cardBorder: string =
    theme === "dark"
      ? "border-white/10 hover:border-white hover:bg-white/5"
      : "border-gray-200 hover:border-black hover:bg-gray-100";
  const bodyTextColor: string =
    theme === "dark" ? "text-gray-400" : "text-gray-700";

  return (
    <section
      id="services"
      className={`py-24 relative transition-colors duration-500 ${sectionBg} ${headingColor}`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">
            Our Expertise
          </h2>
          <div className={`w-24 h-1 mx-auto ${dividerBg}`}></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service: Service, index: number) => (
            <div
              key={index}
              className={`group p-8 border transition-all duration-300 ${cardBorder}`}
            >
              <div className={`mb-6 transition-colors ${headingColor}`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 font-serif">
                {service.title}
              </h3>
              <p
                className={`text-sm leading-relaxed mb-6 ${bodyTextColor} group-hover:text-gray-300`}
              >
                {service.description}
              </p>
              <a
                href="#contact"
                className={`inline-flex items-center text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0 ${headingColor}`}
              >
                Learn More <ChevronRight className="w-3 h-3 ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface WorkProps {
  theme: Theme;
}

const Work: React.FC<WorkProps> = ({ theme }) => {
  const sectionBg: string = theme === "dark" ? "bg-zinc-950" : "bg-white";
  const headingColor: string = theme === "dark" ? "text-white" : "text-black";
  const subtextColor: string =
    theme === "dark" ? "text-gray-400" : "text-gray-700";
  const linkColor: string =
    theme === "dark"
      ? "text-white hover:text-gray-400"
      : "text-black hover:text-gray-700";

  return (
    <section
      id="work"
      className={`py-24 transition-colors duration-500 ${sectionBg}`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2
              className={`text-4xl md:text-5xl font-serif mb-2 ${headingColor}`}
            >
              Featured Work
            </h2>
            <p className={subtextColor}>Highlights from our journey.</p>
          </div>
          <a
            href="#"
            className={`hidden md:flex items-center text-sm font-bold uppercase tracking-widest transition-colors ${linkColor}`}
          >
            View All Projects <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px]">
          {portfolio.map((item: PortfolioItem) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden ${
                theme === "dark" ? "bg-gray-900" : "bg-gray-200"
              } ${item.size}`}
            >
              <img
                src={item.image}
                alt={item.client}
                className={`w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ${
                  theme === "dark"
                    ? "opacity-70 group-hover:opacity-100"
                    : "opacity-90 group-hover:opacity-100"
                }`}
              />
              <div
                className={`absolute inset-0 opacity-90 ${
                  theme === "dark"
                    ? "bg-gradient-to-t from-black via-black/20 to-transparent"
                    : "bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                }`}
              ></div>
              <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                  {item.type}
                </p>
                <h3 className="text-2xl font-serif text-white">
                  {item.client}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface ContactProps {
  theme: Theme;
}

const Contact: React.FC<ContactProps> = ({ theme }) => {
  const sectionBg: string = theme === "dark" ? "bg-black" : "bg-gray-50";
  const formBg: string = theme === "dark" ? "bg-zinc-900" : "bg-gray-100";
  const inputBg: string =
    theme === "dark"
      ? "bg-black border-white/10 text-white focus:border-white"
      : "bg-white border-gray-300 text-black focus:border-black";
  const headingColor: string = theme === "dark" ? "text-white" : "text-black";
  const subtextColor: string =
    theme === "dark" ? "text-gray-400" : "text-gray-700";
  const primaryBtn: string =
    theme === "dark"
      ? "bg-white text-black hover:bg-gray-200"
      : "bg-black text-white hover:bg-gray-800";
  const labelColor: string =
    theme === "dark" ? "text-gray-500" : "text-gray-600";

  return (
    <section
      id="contact"
      className={`py-24 transition-colors duration-500 ${sectionBg} ${headingColor}`}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              Let's Create
              <br />
              Something Iconic.
            </h2>
            <p className={`mb-12 text-lg ${subtextColor}`}>
              Ready to elevate your brand experience? Reach out to us for a
              consultation.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className={`w-6 h-6 mt-1 ${labelColor}`} />
                <div>
                  <h4 className="font-bold mb-1">Headquarters</h4>
                  <p className={subtextColor}>
                    102, Innovation Tower, Business Bay
                    <br />
                    Mumbai, India 400053
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className={`w-6 h-6 mt-1 ${labelColor}`} />
                <div>
                  <h4 className="font-bold mb-1">Email Us</h4>
                  <p className={subtextColor}>hello@beproevents.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className={`w-6 h-6 mt-1 ${labelColor}`} />
                <div>
                  <h4 className="font-bold mb-1">Call Us</h4>
                  <p className={subtextColor}>+91 98765 43210</p>
                </div>
              </div>
            </div>
          </div>

          <form
            className={`p-8 md:p-12 transition-colors duration-500 ${formBg}`}
          >
            <div className="space-y-6">
              <div>
                <label
                  className={`block text-xs font-bold uppercase tracking-widest mb-2 ${labelColor}`}
                >
                  Name
                </label>
                <input
                  type="text"
                  className={`w-full border p-4 focus:outline-none transition-colors ${inputBg}`}
                  placeholder="Shubham Chacha"
                />
              </div>
              <div>
                <label
                  className={`block text-xs font-bold uppercase tracking-widest mb-2 ${labelColor}`}
                >
                  Email
                </label>
                <input
                  type="email"
                  className={`w-full border p-4 focus:outline-none transition-colors ${inputBg}`}
                  placeholder="chacha@company.com"
                />
              </div>
              <div>
                <label
                  className={`block text-xs font-bold uppercase tracking-widest mb-2 ${labelColor}`}
                >
                  Project Details
                </label>
                <textarea
                  rows={4}
                  className={`w-full border p-4 focus:outline-none transition-colors ${inputBg}`}
                  placeholder="Tell us about your event..."
                ></textarea>
              </div>
              <button
                className={`w-full font-bold uppercase tracking-widest py-4 transition-colors ${primaryBtn}`}
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

interface FooterProps {
  theme: Theme;
}

const Footer: React.FC<FooterProps> = ({ theme }) => {
  const footerBg: string =
    theme === "dark"
      ? "bg-black border-white/10"
      : "bg-gray-100 border-gray-200";
  const subtextColor: string =
    theme === "dark" ? "text-gray-600" : "text-gray-500";
  const iconColor: string =
    theme === "dark"
      ? "text-gray-400 hover:text-white"
      : "text-gray-600 hover:text-black";

  // Image filter for the logo to ensure visibility on both dark and light backgrounds
  const logoFilter: string = theme === "dark" ? "invert" : "";

  return (
    <footer
      className={`py-12 border-t transition-colors duration-500 ${footerBg}`}
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-4">
          {/* Logo updated to use the image file */}
          <img
            src={LOGO_IMAGE_PATH}
            alt="Bepro Logo"
            className={`h-8 w-auto transition-filter duration-500 ${logoFilter}`}
          />
          <span className={`text-xs ${subtextColor}`}>
            © 2025 Bepro Events. All Rights Reserved.
          </span>
        </div>

        <div className="flex gap-6">
          <a href="#" className={`transition-colors ${iconColor}`}>
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" className={`transition-colors ${iconColor}`}>
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" className={`transition-colors ${iconColor}`}>
            <Twitter className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  // Theme state initialization: check local storage first
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      // We use a type assertion (as Theme) because we control what we store
      const localTheme = localStorage.getItem("theme") as Theme | null;
      return localTheme || "dark";
    }
    return "dark";
  });

  // Effect to save theme preference
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = useCallback((): void => {
    setTheme((currentTheme: Theme) =>
      currentTheme === "dark" ? "light" : "dark"
    );
  }, []);

  useEffect(() => {
    const handleScroll = (): void => {
      const currentScrollY: number = window.scrollY;

      setScrolled(currentScrollY > 50);

      if (typeof window !== "undefined") {
        if (currentScrollY > 200) {
          // Scrolling down
          if (currentScrollY > lastScrollY) {
            setIsVisible(false);
          }
          // Scrolling up
          else {
            setIsVisible(true);
          }
        } else {
          // Near the top, always show
          setIsVisible(true);
        }

        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Global body classes based on theme
  const globalBgClass: string =
    theme === "dark" ? "bg-black text-white" : "bg-white text-black";
  const globalSelectionClass: string =
    theme === "dark"
      ? "selection:bg-white selection:text-black"
      : "selection:bg-black selection:text-white";

  return (
    <div
      className={`font-sans antialiased min-h-screen transition-colors duration-500 ${globalBgClass} ${globalSelectionClass}`}
    >
      <Navbar
        scrolled={scrolled}
        isVisible={isVisible}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <Hero theme={theme} />
      <ClientLogos theme={theme} />
      <About theme={theme} />
      <Services theme={theme} />
      <Work theme={theme} />
      <Contact theme={theme} />
      <Footer theme={theme} />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
