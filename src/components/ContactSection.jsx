import React, { useState } from "react";
import { Button, Input, TextArea, Select, Checkbox } from "./ui";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Twitter,
  Instagram,
  Facebook,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { config } from "../config/config";

export default function ContactSection({ ref }) {  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    agreeToTerms: false,
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.fullName,
      from_email: formData.email,
      phone_number: formData.phone,
      subject: formData.subject,
      message: formData.message,
      to_email: config.emailJsAdminEmail,
    };

    try {
      setLoading(true);
      // Send email using Email.js
      await emailjs.send(
        config.emailJsServiceId,
        config.emailJsTemplateId, 
        templateParams,
        config.emailJsPublicKey,
      );

      // alert("Contact request sent successfully!");
      toast.success("We got your message, we will reach out to you soon! 😊", {
        position: "top-center"
      });

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        agreeToTerms: false,
      });
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send consultation request");
    } finally {
      setLoading(false);
    }
  };

  const socialLinks = [
    { icon: <Twitter className="h-5 w-5" />, href: "#" },
    { icon: <Instagram className="h-5 w-5" />, href: config.instagramUrl },
    { icon: <Facebook className="h-5 w-5" />, href: config.facebookUrl },
  ];

  return (
    <section ref={ref} className="py-16 bg-gray-50 text-black">
      <ToastContainer />
      <div className="px-4 w-full mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Get in <span className="text-purple-800">Touch</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or need assistance? Reach out to our team for
            professional legal guidance and support.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 w-[90%] justify-center mx-auto">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8 md:w-[50%] w-full">
            <h3 className="text-xl font-bold mb-6">Send Us a Message</h3>
            <form
              onSubmit={handleSubmit}
              className="space-y-6 flex flex-col justify-between h-[90%]"
            >
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
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  <label className="text-sm font-medium">Subject*</label>
                  <Select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="consultation">Consultation Request</option>
                    <option value="support">Technical Support</option>
                    <option value="billing">Billing Question</option>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Message*</label>
                <TextArea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  required
                />
              </div>

              <div className="flex items-center gap-2">
                <Checkbox
                  id="terms"
                  checked={formData.agreeToTerms}
                  onChange={(checked) =>
                    setFormData((prev) => ({ ...prev, agreeToTerms: checked }))
                  }
                  required
                />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  I agree to the{" "}
                  <a href="#" className="text-purple-700 hover:underline">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-purple-700 hover:underline">
                    Privacy Policy
                  </a>
                </label>
              </div>

              <Button
                type="submit"
                className="w-full bg-purple-800 cursor-pointer hover:bg-purple-900 text-white"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-br from-[#560172] to-[#3e0170] rounded-xl p-8 text-white md:w-[50%] w-full">
            <h3 className="text-xl font-bold mb-8">Our Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Head Office</h4>
                  <p className="text-purple-100">
                    Dakhil Now Tower, 123 Justice Avenue
                    <br />
                    New Delhi - 110001, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <p className="text-purple-100">
                    Customer Support: +91 82526 70079
                    <br />
                    Business Inquiries: +91 82526 70079
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-purple-100">
                    sale.daakhilnow@gmail.com
                    <br />
                    info.daakhilnow@gmail.com 
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Business Hours</h4>
                  <p className="text-purple-100">
                    Monday to Friday: 9:00 AM - 6:00 PM
                    <br />
                    Saturday: 10:00 AM - 4:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold mb-4">Connect With Us</h4>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="bg-purple-700 hover:bg-purple-600 p-2 rounded-full transition-colors cursor-pointer"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
