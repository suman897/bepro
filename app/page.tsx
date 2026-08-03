import BackgroundBlobs from "@/components/BackgroundBlobs";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandsMarquee from "@/components/BrandsMarquee";
import ImageGalleryMarquee from "@/components/ImageGalleryMarquee";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import ProcessTimeline from "@/components/ProcessTimeline";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <BackgroundBlobs />
      <Navbar />
      <Hero />
      <BrandsMarquee />
      <ImageGalleryMarquee />
      <Services />
      <TechStack />
      <ProcessTimeline />
      <ContactForm />
      <Footer />
    </main>
  );
}
