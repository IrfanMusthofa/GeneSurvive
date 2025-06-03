import type React from "react";

import heroImage from "@/pictures/pita.jpg";
import illustration from "@/pictures/about-illustration.png";
import clementPhoto from "@/pictures/clement.png";
import irfanPhoto from "@/pictures/irfan.png";
import farahPhoto from "@/pictures/farah.png";

import Model from "@/components/model";
export default function Home() {
  const teamMembers = [
    { name: "Clement N. Lim", id: "18222032", photo: clementPhoto },
    { name: "Irfan Musthofa", id: "18222056", photo: irfanPhoto },
    { name: "Farah Aulia", id: "18222096", photo: farahPhoto },
  ];

  return (
    <div className="font-sans">
      {/* Navbar */}
      <nav className="bg-pink-700 w-full text-white p-8 flex items-center justify-center">
        <h1 className="text-2xl font-bold">GeneSurvive</h1>
        <div className="space-x-4"></div>
      </nav>

      {/* Hero Section with Background and Gradient Overlay */}
      <div className="relative w-full">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
          style={{ backgroundImage: `url(${heroImage.src})` }}
        ></div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white/60 to-pink-100"></div>

        {/* Content */}
        <div className="relative z-10 p-16 items-center flex flex-col justify-center">
          <h2 className="text-5xl md:text-6xl font-bold text-pink-600 mb-4">
            GeneSurvive
          </h2>
          <p className="text-xl md:text-2xl text-gray-800 font-semibold mb-2">
            Predict Breast Cancer Survivability
          </p>
          <p className="text-xl font-semibold text-pink-500 mb-6">
            Based on Gene Expression
          </p>

          <Model />
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-12 bg-pink-50 text-center">
        <h3 className="text-3xl font-bold text-gray-800 uppercase tracking-wide">
          About Project
        </h3>
        <div className="w-16 h-1 bg-pink-500 mx-auto mt-2"></div>
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center">
          <img
            src={illustration.src || "/placeholder.svg"}
            alt="Illustration"
            className="w-64 mb-8 md:mb-0 md:mr-12"
          />
          <div className="text-left">
            <p className="text-gray-700 text-base leading-relaxed">
              GeneSurvive is a machine learning-based web application developed
              to predict the survivability of breast cancer patients using
              clinical data and gene expression profiles. Built on the METABRIC
              dataset, which contains 31 clinical features, 331 mRNA expression
              levels, and 175 gene mutation records, GeneSurvive helps estimate
              whether a patient is likely to survive, along with a confidence
              score. This tool aims to support research in personalized cancer
              prognosis and treatment strategies. While GeneSurvive provides
              valuable insights from data, it is intended for educational and
              research purposes only—not for clinical diagnosis.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section with Enhanced Background */}
      <section className="py-16 relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-rose-50 to-pink-200"></div>

        {/* Decorative Background Elements */}
        <div className="absolute inset-0">
          {/* DNA Helix Pattern */}
          <div className="absolute top-10 left-10 w-32 h-32 opacity-10">
            <svg viewBox="0 0 100 100" className="w-full h-full text-pink-400">
              <path
                d="M20 10 Q50 30 80 10 Q50 50 20 70 Q50 90 80 70"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M20 30 Q50 10 80 30 Q50 70 20 50 Q50 30 80 50"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>

          {/* Molecular Structure */}
          <div className="absolute top-20 right-16 w-24 h-24 opacity-15">
            <svg viewBox="0 0 100 100" className="w-full h-full text-pink-500">
              <circle cx="20" cy="20" r="8" fill="currentColor" />
              <circle cx="80" cy="20" r="8" fill="currentColor" />
              <circle cx="50" cy="50" r="8" fill="currentColor" />
              <circle cx="20" cy="80" r="8" fill="currentColor" />
              <circle cx="80" cy="80" r="8" fill="currentColor" />
              <line
                x1="20"
                y1="20"
                x2="50"
                y2="50"
                stroke="currentColor"
                strokeWidth="2"
              />
              <line
                x1="80"
                y1="20"
                x2="50"
                y2="50"
                stroke="currentColor"
                strokeWidth="2"
              />
              <line
                x1="50"
                y1="50"
                x2="20"
                y2="80"
                stroke="currentColor"
                strokeWidth="2"
              />
              <line
                x1="50"
                y1="50"
                x2="80"
                y2="80"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </div>

          {/* Medical Cross */}
          <div className="absolute bottom-16 left-20 w-16 h-16 opacity-10">
            <svg viewBox="0 0 100 100" className="w-full h-full text-pink-600">
              <rect
                x="40"
                y="10"
                width="20"
                height="80"
                fill="currentColor"
                rx="4"
              />
              <rect
                x="10"
                y="40"
                width="80"
                height="20"
                fill="currentColor"
                rx="4"
              />
            </svg>
          </div>

          {/* Floating Circles */}
          <div className="absolute top-32 right-32 w-4 h-4 bg-pink-300 rounded-full opacity-20"></div>
          <div className="absolute bottom-32 right-20 w-6 h-6 bg-rose-300 rounded-full opacity-15"></div>
          <div className="absolute top-40 left-1/3 w-3 h-3 bg-pink-400 rounded-full opacity-25"></div>
          <div className="absolute bottom-20 left-1/2 w-5 h-5 bg-rose-400 rounded-full opacity-20"></div>

          {/* Geometric Shapes */}
          <div className="absolute top-16 right-1/4 w-8 h-8 border-2 border-pink-300 opacity-20 rotate-45"></div>
          <div className="absolute bottom-24 left-1/4 w-6 h-6 border-2 border-rose-300 opacity-15 rotate-12"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 uppercase tracking-wide">
            Our Team
            <div className="w-16 h-1 bg-pink-500 mx-auto mt-2"></div>
          </h3>
          <div className="flex justify-center flex-wrap gap-12 max-w-4xl mx-auto">
            {teamMembers.map((member) => (
              <div key={member.id} className="flex flex-col items-center group">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4 bg-gradient-to-br from-pink-400 to-rose-500 p-1 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={member.photo.src || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <h4 className="font-bold text-black text-lg">{member.name}</h4>
                <p className="text-gray-600">{member.id}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-pink-700 text-white text-center py-4">
        <h1 className="font-semibold text-2xl p-4">@2025 GeneSurvive</h1>
      </footer>
    </div>
  );
}
