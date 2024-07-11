function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Me</h2>
          <p className="mb-4">
            I am Roshan Jha, a dedicated software engineer. I thrive on creating
            innovative solutions and nurturing talent from the ground up. I also
            love watching Rom-com and anime.
          </p>
          <p>Founder: Roshan Jha</p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li className="mb-2">
              <a
                href="/"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li className="mb-2">
              <a
                href="/about"
                className="hover:text-white transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li className="mb-2">
              <a
                href="/projects"
                className="hover:text-white transition-colors duration-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Me</h2>
          <ul>
            <li className="mb-2">
              <a
                href="https://github.com/roshan-jha-23"
                className="hover:text-white transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            <li className="mb-2">
              <a
                href="https://x.com/lonely_sheperd_"
                className="hover:text-white transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/roshan-jha-20m10/"
                className="hover:text-white transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Me</h2>
          <p className="mb-2">
            Email:{" "}
            <a
              href="mailto:roshan.jha.201099@gmail.com"
              className="hover:text-white transition-colors duration-300"
            >
              roshan.jha.201099@gmail.com
            </a>
          </p>
          <p>Phone: +91 7439389068</p>
        </div>
      </div>
      <p className="text-center text-xs pt-8">
        © 2024 Roshan Jha. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
