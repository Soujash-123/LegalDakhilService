import { Check, Scale, Shield, Users, Zap } from "lucide-react";
import React from "react";
import { Button, Counter } from "./ui";

export default function AboutSection({ ref }) {
  const stats = [
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      number: "5,000",
      label: "Happy Clients",
    },
    {
      icon: <Shield className="h-8 w-8 text-orange-500" />,
      number: "3,500",
      label: "Cases Won",
    },
    {
      icon: <Check className="h-8 w-8 text-green-500" />,
      number: "12",
      label: "Years Experience",
    },
    {
      icon: <Zap className="h-8 w-8 text-purple-600" />,
      number: "25",
      label: "Branch Offices",
    },
  ];

  const values = [
    {
      icon: <Shield className="h-6 w-6 text-white" />,
      title: "Integrity",
      description: "Upholding the highest ethical standards",
    },
    {
      icon: <Zap className="h-6 w-6 text-white" />,
      title: "Excellence",
      description: "Delivering exceptional service quality",
    },
    {
      icon: <Users className="h-6 w-6 text-white" />,
      title: "Client-Focused",
      description: "Prioritizing client needs and success",
    },
  ];

  return (
    <section ref={ref} className="py-16 bg-white text-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            About <span className="text-purple-800">Dakhil Now</span> Services
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Providing trusted legal consultancy and services across India with a
            commitment to excellence, integrity, and client satisfaction.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 w-[90%] justify-center mx-auto mb-12">
          {/* Left Column - Mission Card */}
          <div className="bg-purple-800 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-700 rounded-full transform translate-x-32 -translate-y-32 opacity-50" />

            <div className="relative z-10">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-purple-700 rounded-full flex items-center justify-center mb-6">
                  <Scale size={50} />
                </div>
                <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
              </div>

              <p className="text-purple-100 mb-8">
                To provide accessible, high-quality legal services that empower
                individuals and businesses to navigate the complex legal
                landscape with confidence and success.
              </p>

              <div className="space-y-6">
                {values.map((value, index) => (
                  <div className="space-y-4" key={index}>
                    <div key={index} className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-purple-700 rounded-full flex items-center justify-center">
                        {value.icon}
                      </div>
                      <div>
                        <div className="font-extrabold">{value.title}</div>
                        <p className="text-purple-200 text-sm">
                          {value.description}
                        </p>
                      </div>
                    </div>
                    {index < values.length - 1 && (
                      <div className="w-full h-[1px] bg-[#a939ff] mt-5"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Right Column - Company Info */}
          <div className="space-y-6 shadow-md p-8 md:p-12 bg-white rounded-2xl ">
            <h3 className="text-2xl font-bold text-gray-900">
              Your Trusted Legal Partner
            </h3>

            <p className="text-gray-600">
              Dakhil Now Services was established with a vision to make
              quality legal services accessible to individuals and businesses
              across India. Our team of experienced legal professionals is
              dedicated to providing practical, cost-effective solutions to
              complex legal challenges.
            </p>

            <p className="text-gray-600">
              We take pride in our client-centered approach, ensuring that each
              client receives personalized attention and tailored legal
              strategies. Our extensive experience across various legal domains
              enables us to offer comprehensive services under one roof.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center">
                  <Check className="h-4 w-4 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Professional Excellence
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Our team comprises seasoned legal professionals with
                    expertise across various legal specialties.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Client-Centered Approach
                  </h4>
                  <p className="text-gray-600 text-sm">
                    We prioritize understanding your unique needs to deliver
                    tailored legal solutions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center">
                  <Check className="h-4 w-4 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Ethical Practice
                  </h4>
                  <p className="text-gray-600 text-sm">
                    We uphold the highest standards of integrity,
                    confidentiality, and professional ethics in all our
                    dealings.
                  </p>
                </div>
              </div>
            </div>

            <Button className="bg-purple-800 hover:bg-purple-900 text-white">
              Schedule a Consultation
            </Button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 mx-auto bg-gray-50 rounded-full flex items-center justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">
                <Counter end={parseInt(stat.number.replace(",", ""))} duration={5}/>
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
