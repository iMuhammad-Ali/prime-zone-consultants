const PrivacyPolicy = () => {
  return (
    <section className="mx-auto pt-[20vw] sm:pt-[8vw] lg:pt-[6vw] pb-[8vw] sm:pb-[6vw] lg:pb-[4vw] space-y-[6vw] sm:space-y-[4vw] lg:space-y-[2vw] max-w-[90vw] sm:max-w-[80vw] lg:max-w-[60vw] px-[4vw] sm:px-[3vw] lg:px-[2vw] text-justify">
      <h2 className="text-[6vw] sm:text-[4vw] lg:text-[3vw] font-bold text-foreground text-center">
        Privacy Policy
      </h2>

      <p className="text-muted-foreground text-[3.5vw] sm:text-[2.5vw] lg:text-[1vw] leading-relaxed">
        Your privacy is important to us. This privacy policy explains how we
        collect, use, and protect your personal information when you use our
        consultancy services for abroad study, visa applications, courses, and
        university guidance.
      </p>

      <div className="space-y-8">
        <div>
          <h3 className="text-lg  font-semibold text-foreground">
            1. Information We Collect
          </h3>
          <p className="text-muted-foreground 2xl:text-[1vw]">
            We collect personal information you provide directly, such as your
            name, contact details, educational background, and documents related
            to your visa and study applications. We may also collect information
            about your preferences and interests to tailor our advice and
            services.
          </p>
        </div>

        <div>
          <h3 className="text-lg  font-semibold text-foreground">
            2. How We Use Your Information
          </h3>
          <p className="text-muted-foreground 2xl:text-[1vw]">
            Your information is used to provide personalized consultancy, assist
            with visa and course applications, communicate updates, and improve
            our services. We may also use your information to send you relevant
            offers or educational opportunities if you consent to receive
            marketing communications.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground">
            3. Sharing Your Information
          </h3>
          <p className="text-muted-foreground 2xl:text-[1vw]">
            We do not sell or rent your personal data. We may share your
            information with universities, visa agencies, or other educational
            partners strictly for application and consultation purposes, and
            only with your consent. We also share data with trusted service
            providers who assist in delivering our services under strict
            confidentiality agreements.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground">4. Cookies</h3>
          <p className="text-muted-foreground 2xl:text-[1vw]">
            We use cookies and similar tracking technologies to improve your
            browsing experience, analyze usage, and deliver personalized
            content. You can control cookie settings via your browser
            preferences.
          </p>
        </div>

        <div>
          <h3 className="text-lg  font-semibold text-foreground">
            5. Data Security
          </h3>
          <p className="text-muted-foreground 2xl:text-[1vw]">
            We implement reasonable security measures to protect your personal
            data from unauthorized access, alteration, or disclosure.
          </p>
        </div>

        <div>
          <h3 className="text-lg  font-semibold text-foreground">
            6. Your Rights
          </h3>
          <p className="text-muted-foreground 2xl:text-[1vw]">
            You have the right to access, correct, or request deletion of your
            personal information. You can also opt-out of marketing
            communications at any time by contacting us.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground">
            7. Retention of Data
          </h3>
          <p className="text-muted-foreground 2xl:text-[1vw]">
            We retain your personal information only as long as necessary to
            provide our services and fulfill legal requirements.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground">
            8. Changes to This Policy
          </h3>
          <p className="text-muted-foreground 2xl:text-[1vw]">
            We may update this privacy policy occasionally to reflect changes in
            our practices or legal requirements. We encourage you to review it
            periodically.
          </p>
        </div>

        <p className="text-muted-foreground 2xl:text-[1vw]">
          If you have any questions or concerns about this privacy policy or our
          data practices, please contact us at{" "}
          <a href="mailto:support@example.com" className="underline">
            support@example.com
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
