import FeaturedProjects from "@/components/FeaturedProjects";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import WhyChooseMe from "@/components/WhyChooseMe";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Roshan Kumar Jha - Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Roshan Kumar Jha showcasing skills, projects, and experiences."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="Roshan Kumar Jha, portfolio, web developer, projects, skills"
        />
        <meta property="og:title" content="Roshan Kumar Jha - Portfolio" />
        <meta
          property="og:description"
          content="Portfolio of Roshan Kumar Jha showcasing skills, projects, and experiences."
        />
        <meta property="og:image" content="/my-pic.jpeg" />
        <meta property="og:url" content="https://your-portfolio-url.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.2]">
        <header className="header-container text-center py-16">
          <div className="flex items-center justify-center from text-white py-4  mt-5 px-6 rounded-lg shadow-lg space-x-6">
            <div className="w-32 h-32">
              <img
                src="/my-pic.jpeg"
                alt="Roshan Kumar Jha's profile picture"
                className="w-full h-full object-cover rounded-full shadow-md"
              />
            </div>
            <h1 className="text-4xl font-bold">Roshan Kumar Jha</h1>
          </div>
        </header>
        <section className="section-container">
          <HeroSection />
          <WhyChooseMe />
          <FeaturedProjects />
          <Footer/>
        </section>
      </main>
    </>
  );
}
