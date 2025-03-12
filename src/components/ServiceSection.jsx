import {
  Check,
  ArrowRight,
  Shield,
  Building,
  Landmark,
  FileText,
  DollarSign,
  Scale,
  Clock,
  Users,
  Percent,
  Phone,
} from "lucide-react";
import { Button } from "./ui";
import servicesData from "../data/services.json";
import { ServiceModal } from "../components";

const ServiceCard = ({ icon, color, title, items, data }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-md border-t-4"
      style={{ borderTopColor: color }}
    >
      <div className="p-6">
        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center mb-4`}
          style={{ backgroundColor: `${color}20` }}
        >
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-4 text-black">{title}</h3>
        <ul className="space-y-2 mb-4">
          {items.map((item, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-4 w-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
              <span className="text-gray-700 text-sm">{item}</span>
            </li>
          ))}
        </ul>
        <ServiceModal data={data} />
      </div>
    </div>
  );
};

const BenefitCard = ({ icon, title, description }) => {
  return (
    <div className="text-center shadow-md p-6 rounded-lg bg-white">
      <div className="w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4 bg-gray-100">
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-2 text-black">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default function ServicesSection({ refs, scrollToSection }) {
  const services = [
    {
      icon: <Building className="h-6 w-6 text-green-500" />,
      color: "#22C55E",
      title: "Startup & Business Compliance",
      items: [
        "Gst registration & filing",
        "Ip registration",
        "Tax compliance.",
        "Import/ export compliance (if applicable)",
      ],
    },
    {
      icon: <Shield className="h-6 w-6 text-orange-500" />,
      color: "#FFA500",
      title: "Insurance Claims & Settlement",
      items: [
        "Health Insurance Claim",
        "Vehicle Insurance Claim",
        "Life Insurance Claim",
        "Homeowner/Property Damage Insurance Claim",
      ],
    },
    {
      icon: <Landmark className="h-6 w-6 text-purple-500" />,
      color: "#A855F7",
      title: "Trademark & Copyrights",
      items: [
        "Trademark Registration",
        "Trademark Objection",
        "Copyright Registration",
        "Patent Registration",
      ],
    },
    {
      icon: <Scale className="h-6 w-6 text-purple-500" />,
      color: "#A855F7",
      title: "Agreements And Legal Documentation Review",
      items: [
        "Business Agreement",
        "Franchise Agreement.",
        "Property Transfer Agreement",
        "Marketing & Advertisement Agreement",
      ],
    },
    {
      icon: <FileText className="h-6 w-6 text-orange-500" />,
      color: "#FFA500",
      title: "GST Compliance Services",
      items: [
        "GST Return Filing by Accountant",
        "GST Annual Return Filing (GSTR-9)",
        "GST E-Invoicing Software",
        "GST Notice",
      ],
    },
    {
      icon: <DollarSign className="h-6 w-6 text-green-500" />,
      color: "#22C55E",
      title: "Income Tax Services",
      items: [
        "Business Tax Filing",
        "ITR-1 to ITR-7 Return Filing",
        "TDS Return Filing",
        "Income Tax Notice",
      ],
    },
  ];

  const benefits = [
    {
      icon: <Clock className="h-6 w-6 text-orange-500" />,
      title: "Timely Service",
      description:
        "We value your time and ensure prompt delivery of all our services",
    },
    {
      icon: <Users className="h-6 w-6 text-green-500" />,
      title: "Expert Professionals",
      description:
        "Our team consists of experienced legal professionals and consultants",
    },
    {
      icon: <Percent className="h-6 w-6 text-purple-500" />,
      title: "Affordable Rates",
      description:
        "Transparent pricing with no hidden costs for all our services",
    },
    {
      icon: <Phone className="h-6 w-6 text-amber-500" />,
      title: "24/7 Support",
      description: "Round-the-clock customer support for all your queries",
    },
  ];

  return (
    <section ref={refs.servicesRef} className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="text-4xl font-extrabold text-purple-900 mb-4">
            Our Legal Services
          </div>
          <hr className="w-24 h-[5px] rounded-3xl bg-gradient-to-r from-orange-500 via-white to-green-500 mx-auto mb-8" />
          <p className="text-gray-600 max-w-2xl mx-auto text-xl">
            Comprehensive legal solutions tailored to meet your needs with
            expertise and professionalism
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 px-10">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              color={service.color}
              title={service.title}
              items={service.items}
              data={servicesData.services[index]}
            />
          ))}
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-purple-800 mb-8">
            Why Choose Dakhil Now Services?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <BenefitCard
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button
            className="bg-[#3a0064] hover:bg-purple-900 text-white px-8 py-6 h-auto rounded-xl cursor-pointer"
            style={{
              animation: "pulse 1s infinite",
            }}
            onClick={() => scrollToSection(refs.consultationRef)}
          >
            Get Legal Assistance Now <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
        <style>
          {`
            @keyframes pulse {
              0%, 100% {
                transform: scale(1);
              }
              50% {
                transform: scale(1.05);
              }
            }
          `}
        </style>
      </div>
    </section>
  );
}
