import React, { useState } from "react";
import { Shield, Clock, Users, FileText, ArrowRight } from "lucide-react";
import { Button, Input, TextArea, Select, Checkbox } from "./ui";
import { config } from "../config/config";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ConsultationSection({ ref }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    serviceType: "",
    details: "",
    agreeToTerms: false,
  });

  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (
      droppedFile &&
      [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ].includes(droppedFile.type)
    ) {
      setFile(droppedFile);
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData, file);

    const templateParams = {
      full_name: formData.fullName,
      email_address: formData.email,
      phone_number: formData.phone,
      city: formData.city,
      service_type: formData.serviceType,
      additional_details: formData.details,
      to_email: config.emailJsAdminEmail,
    };

    try {
      setLoading(true);
      // Send email using Email.js

      await emailjs.send(
        config.emailJsServiceId2,
        config.emailJsTemplateId2,
        templateParams,
        config.emailJsPublicKey2
      );

      // alert("Consultation request sent successfully!");
      toast.success(
        "Consultation request sent successfully!, We will reach out to you soon! ✌️",
        {
          position: "top-center",
        }
      );

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        city: "",
        serviceType: "",
        details: "",
        agreeToTerms: false,
      });
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send consultation request");
    } finally {
      setLoading(false);
    }
  };

  const benefits = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Expert Legal Advice",
      description:
        "Our team of experienced legal professionals provides tailored solutions for your specific needs.",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Timely Assistance",
      description:
        "Quick responses and prompt handling of your legal matters to meet important deadlines.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Personalized Approach",
      description:
        "We understand that each case is unique, and provide customized guidance accordingly.",
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Transparent Process",
      description:
        "Clear communication, upfront pricing, and regular updates throughout the legal process.",
    },
  ];

  const steps = [
    "Submit your consultation request",
    "Receive confirmation with order details",
    "Our legal team reviews your information",
    "Schedule a detailed consultation",
    "Get comprehensive legal guidance",
  ];

  return (
    <section ref={ref} className="py-16 bg-gray-50 text-gray-800">
      <div className="w-full mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-4">
            General <span className="text-purple-800">Consultation</span>
          </h2>
          <hr className="w-24 h-[3px] rounded-3xl bg-amber-500 mx-auto mb-8 border-none" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get expert legal advice tailored to your specific needs. Fill out
            the form below to schedule a consultation with our experienced legal
            team.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 w-[90%] justify-center mx-auto">
          {/* Consultation Form */}
          <div className="bg-white text-black rounded-xl shadow-md p-6 md:p-8 w-full md:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Full Name*</label>
                  <Input
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email Address*</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Phone Number*</label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">City*</label>
                  <Input
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Service Type*</label>
                <Select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select a service</option>
                  <option value="insurance">Insurance Claims</option>
                  <option value="startup">
                    Startup & Company Registration
                  </option>
                  <option value="trademark">
                    Trademark & Intellectual Property
                  </option>
                  <option value="gst">GST Services</option>
                  <option value="income-tax">Income Tax Services</option>
                  <option value="legal">Legal Consultancy</option>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Additional Details
                </label>
                <TextArea
                  name="details"
                  value={formData.details}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Please provide any additional information about your case..."
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Upload Documents (Optional)
                </label>
                <div
                  className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
                    isDragging
                      ? "border-purple-500 bg-purple-50"
                      : "border-gray-300 hover:border-gray-400"
                  }`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  onClick={() => document.getElementById("file-upload").click()}
                >
                  <input
                    id="file-upload"
                    type="file"
                    className="hidden"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                  />
                  <div className="flex flex-col items-center gap-2">
                    <ArrowRight className="h-8 w-8 text-gray-400 rotate-90" />
                    <div>
                      <span className="text-purple-700">Click to upload</span>
                      <span className="text-gray-600"> or drag and drop</span>
                    </div>
                    <span className="text-sm text-gray-500">
                      PDF, DOC, JPG (MAX. 10MB)
                    </span>
                  </div>
                  {file && (
                    <div className="mt-4 text-sm text-gray-600">
                      Selected file: {file.name}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Checkbox
                  id="terms"
                  checked={formData.agreeToTerms}
                  onChange={(checked) =>
                    setFormData((prev) => ({ ...prev, agreeToTerms: checked }))
                  }
                  required
                  className="cursor-pointer"
                />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  I agree to the{" "}
                  <a 
                    href="/docs/Policy/TERMS AND CONDITIONS FOR DAAKHIL NOW SERVICES WEBSITE.pdf" 
                    rel="noopener noreferrer"
                    className="text-purple-700 hover:underline"
                    type="application/pdf"
                    target="_blank"
                  >
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a 
                    href="/docs/Policy/PRIVACY POLICY FOR DAAKHIL NOW SERVICES.pdf"
                    rel="noopener noreferrer"
                    type="application/pdf"
                    target="_blank"
                    className="text-purple-700 hover:underline"
                  >
                    Privacy Policy
                  </a>
                </label>
              </div>

              <Button
                type="submit"
                className="w-full bg-purple-800 hover:bg-purple-900 text-white cursor-pointer"
                disabled={loading}
              >
                {loading ? (
                  "Submitting..."
                ) : (
                  <>
                    {"Submit General Consultation"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Information Card */}
          <div className="space-y-8 w-full md:w-1/2">
            <div className="bg-gradient-to-br from-[#560172] to-[#3e0170] text-white rounded-xl p-6 md:p-8 h-full flex flex-col justify-between">
              <div className="space-y-6">
                <h3 className="text-xl font-bold mb-6">
                  Why Choose Our Legal Consultation?
                </h3>
                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-purple-700 rounded-full flex items-center justify-center">
                        {benefit.icon}
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">{benefit.title}</h4>
                        <p className="text-purple-100 text-md">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-10 bg-gradient-to-r from-[#5F278B] to-[#531D7F] p-6 rounded-2xl">
                <h3 className="text-xl font-bold mb-4">What Happens Next?</h3>
                <ol className="space-y-3">
                  {steps.map((step, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-700 flex items-center justify-center text-sm">
                        {index + 1}
                      </span>
                      <span className="text-sm">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
