import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-32 pb-20 px-4 max-w-4xl mx-auto prose prose-gray">
        <h1>Privacy Policy</h1>
        <p>Fiber One Asia respects your privacy. This policy explains how we collect and use information submitted through our website forms and communications.</p>
        <h2>Information We Collect</h2><p>We may collect your name, email address, company, phone number, project details, and other information you voluntarily submit.</p>
        <h2>How We Use Information</h2><p>We use submitted information to respond to inquiries, provide project consultations, improve our services, and communicate relevant updates.</p>
        <h2>Contact</h2><p>For privacy questions, contact sales@fiber-transmission.com.</p>
      </main>
      <Footer />
    </div>
  );
}
