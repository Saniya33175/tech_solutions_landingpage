"use client"

export default function AboutUs() {
  return (
    <section id="about" className="min-h-screen bg-slate-800 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            ABOUT <span className="text-lime-400">TECH SOLUTIONS</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Leading the digital transformation with innovative IT solutions since 2010
          </p>
        </div>

        {/* Company Story */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Our Story</h3>
            <p className="text-slate-300 mb-4 leading-relaxed">
              Founded in 2010, TECH SOLUTIONS has been at the forefront of digital innovation and IT excellence. What
              started as a small consulting firm has grown into a trusted partner for hundreds of enterprises worldwide.
            </p>
            <p className="text-slate-300 mb-4 leading-relaxed">
              Our commitment to delivering cutting-edge solutions and exceptional service has earned us recognition as
              one of the industry's most reliable technology partners.
            </p>
            <p className="text-slate-300 leading-relaxed">
              We believe in empowering businesses through technology, driving growth, and creating lasting partnerships
              with our clients.
            </p>
          </div>

          <div className="bg-gradient-to-br from-lime-400/10 to-slate-700 rounded-lg p-8 border border-lime-400/30">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-lime-400 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-slate-900" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">500+ Happy Clients</h4>
                  <p className="text-slate-300">Trusted by leading enterprises globally</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-lime-400 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-slate-900" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm8 0c1.66 0 2.99-1.34 2.99-3S25.66 5 24 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">150+ Expert Team</h4>
                  <p className="text-slate-300">Certified professionals dedicated to excellence</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-lime-400 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-slate-900" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S15.33 8 14.5 8 13 8.67 13 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S8.33 8 7.5 8 6 8.67 6 9.5 6.67 11 7.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">14+ Years Experience</h4>
                  <p className="text-slate-300">Industry-leading expertise and innovation</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Our Core Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-700 rounded-lg p-6 border border-slate-600 hover:border-lime-400 transition-colors">
              <div className="w-12 h-12 bg-lime-400 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-slate-900" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <h4 className="text-white font-bold mb-2">Innovation</h4>
              <p className="text-slate-300">Constantly pushing boundaries to deliver next-generation solutions</p>
            </div>

            <div className="bg-slate-700 rounded-lg p-6 border border-slate-600 hover:border-lime-400 transition-colors">
              <div className="w-12 h-12 bg-lime-400 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-slate-900" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <h4 className="text-white font-bold mb-2">Excellence</h4>
              <p className="text-slate-300">Delivering superior quality in every project and partnership</p>
            </div>

            <div className="bg-slate-700 rounded-lg p-6 border border-slate-600 hover:border-lime-400 transition-colors">
              <div className="w-12 h-12 bg-lime-400 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-slate-900" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <h4 className="text-white font-bold mb-2">Partnership</h4>
              <p className="text-slate-300">Building long-term relationships based on trust and results</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-lime-400/10 to-slate-700 rounded-lg p-8 text-center border border-lime-400/30">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Partner With Us?</h3>
          <p className="text-slate-300 mb-6 max-w-xl mx-auto">
            Let's discuss how TECH SOLUTIONS can drive innovation and growth for your organization
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-lime-400 hover:bg-lime-300 text-slate-900 font-semibold px-8 py-3 rounded-lg shadow-lg shadow-lime-400/30 hover:shadow-lime-400/50 transition-all duration-300"
          >
            Get in Touch Today
          </a>
        </div>
      </div>
    </section>
  )
}
