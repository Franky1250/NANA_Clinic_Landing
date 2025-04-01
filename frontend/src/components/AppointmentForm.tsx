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
    setFormData((prev) => ({ ...prev, [name]: value }));
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

    // Facebook Pixel Tracking
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq('track', 'Lead', {
        name: formData.name,
        mobile: formData.mobile,
        address: formData.address,
        problem: formData.problem,
      });
    }

    try {
      const response = await fetch(
        "https://nana-clinic-landing-prateek2.vercel.app/send-email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(submissionData),
        }
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }

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
    <section id="appointment" className="py-1 bg-white" ref={sectionRef}>
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-clinic-secondary rounded-xl shadow-lg p-8 reveal">
            <h3 className="text-2xl font-bold text-clinic-accent mb-6">Request an Appointment</h3>
            {formStatus.type && (
              <div className={`p-4 rounded-lg mb-6 ${formStatus.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                {formStatus.message}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-5">
              <input type="text" name="name" value={formData.name} onChange={handleInputChange} required placeholder="Full Name" />
              <input type="tel" name="mobile" value={formData.mobile} onChange={handleInputChange} required placeholder="Mobile Number" />
              <input type="text" name="address" value={formData.address} onChange={handleInputChange} required placeholder="Location" />
              <textarea name="problem" value={formData.problem} onChange={handleInputChange} required placeholder="Describe Your Problem" />
              <button type="submit" disabled={isSubmitting} className="w-full button-primary">
                {isSubmitting ? "Processing..." : "Book Appointment"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;
