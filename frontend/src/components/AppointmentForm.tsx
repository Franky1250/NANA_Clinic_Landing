import React, { useState, useEffect, useRef } from "react";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";

const AppointmentForm = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    problem: "",
    address: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: null, message: "" });
  
    const submissionData = {
      name: formData.name,
      mobile: formData.mobile,
      explanation: formData.problem,
      address: formData.address,
    };
  
    try {
      console.log("Submitting data:", submissionData); // Debug log
      
      const response = await fetch(
        "https://nana-clinic-landing-prateek2.vercel.app/send-email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(submissionData),
        }
      );
  
      console.log("Response status:", response.status); // Debug log
      
      // Check for HTTP errors
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log("Response data:", data); // Debug log
      
      setFormStatus({
        type: "success",
        message: "Your appointment request has been submitted successfully!",
      });
      setFormData({ name: "", mobile: "", problem: "", address: "" });
    } catch (error) {
      console.error("Submission error:", error);
      setFormStatus({
        type: "error",
        message: error.message || "There was an error submitting your request.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section id="appointment" className="py-1 bg-white" ref={sectionRef}>
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div
              className="bg-clinic-secondary rounded-xl shadow-lg p-8 reveal"
              style={{ transitionDelay: "300ms" }}
            >
              <h3 className="text-2xl font-bold text-clinic-accent mb-6">
                Request an Appointment
              </h3>

              {/* Status messages */}
              {formStatus.type && (
                <div
                  className={`p-4 rounded-lg mb-6 ${
                    formStatus.type === "success"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {formStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="input-field"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="mobile"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    required
                    className="input-field"
                    placeholder="Enter your mobile number"
                    pattern="[0-9]{10}"
                    title="Please enter a valid 10-digit mobile number"
                  />
                </div>

                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Location *
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="input-field"
                    placeholder="Enter your location"
                  />
                </div>

                <div>
                  <label
                    htmlFor="problem"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Describe Your Problem *
                  </label>
                  <textarea
                    id="problem"
                    name="problem"
                    value={formData.problem}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="input-field resize-none"
                    placeholder="Please describe your ear condition or concerns"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full button-primary flex items-center justify-center ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      Processing...
                    </>
                  ) : (
                    "Book Appointment"
                  )}
                </button>

                <p className="text-xs text-gray-500 text-center mt-4">
                  By submitting this form, you agree to our Privacy Policy and
                  Terms of Service.
                </p>
              </form>
            </div>

            {/* Clinic Details */}
            <div className="space-y-6">
              <span className="inline-block px-4 py-1.5 bg-clinic-muted text-clinic-primary rounded-full text-sm font-medium reveal">
                Book an Appointment
              </span>
              <h2
                className="text-3xl md:text-4xl font-bold text-clinic-accent reveal"
                style={{ transitionDelay: "100ms" }}
              >
                Schedule Your <span className="text-clinic-primary">Visit</span>{" "}
                Today
              </h2>
              <p
                className="text-gray-600 reveal"
                style={{ transitionDelay: "200ms" }}
              >
                Take the first step towards better hearing health by booking an
                appointment with our specialists. Fill out the form, and we'll
                contact you promptly to confirm your visit.
              </p>

              <div
                className="space-y-4 reveal"
                style={{ transitionDelay: "300ms" }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-clinic-muted flex items-center justify-center flex-shrink-0 mt-1">
                    <IoCallOutline className="h-5 w-5 text-clinic-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-clinic-accent">Phone</h3>
                    <p className="text-gray-600">+91 720 545 4269</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-clinic-muted flex items-center justify-center flex-shrink-0 mt-1">
                    <MdOutlineEmail className="h-5 w-5 text-clinic-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-clinic-accent">Email</h3>
                    <p className="text-gray-600">
                      nana.healthcareclinic@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-clinic-muted flex items-center justify-center flex-shrink-0 mt-1">
                    <IoTimeOutline className="h-5 w-5 text-clinic-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-clinic-accent">
                      Working Hours
                    </h3>
                    <p className="text-gray-600">
                      Monday - Saturday: 9:00 AM - 8:00 PM
                    </p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="reveal" style={{ transitionDelay: "400ms" }}>
                <img
                  src="/images/form-picture.jpg"
                  alt="Modern reception area"
                  className="rounded-xl shadow-lg w-full h-64 object-cover"
                />
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default AppointmentForm;