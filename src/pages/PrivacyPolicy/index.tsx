const PrivacyPolicy = () => {
  return (
    <section className="mx-auto pt-32 pb-24 space-y-8">
      <h2 className="text-4xl font-bold text-foreground text-center">
        Privacy Policy
      </h2>

      <p className="text-muted-foreground">
        Your privacy is important to us. This privacy policy explains how we
        collect, use, and protect your personal information.
      </p>

      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold text-foreground">
            1. Information We Collect
          </h3>
          <p className="text-muted-foreground">
            We collect personal information you provide directly to us when
            using our services, such as your name, email address, and other
            relevant details.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground">
            2. How We Use Your Information
          </h3>
          <p className="text-muted-foreground">
            We use your information to provide and improve our services,
            communicate with you, and comply with legal obligations.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground">
            3. Sharing Your Information
          </h3>
          <p className="text-muted-foreground">
            We do not sell or rent your personal information to third parties.
            We may share it with service providers who help us operate our
            business.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground">4. Cookies</h3>
          <p className="text-muted-foreground">
            We use cookies to enhance your experience and gather analytics. You
            can control cookies through your browser settings.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground">5. Security</h3>
          <p className="text-muted-foreground">
            We take reasonable measures to protect your information from
            unauthorized access, disclosure, or destruction.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground">
            6. Your Rights
          </h3>
          <p className="text-muted-foreground">
            You have the right to access, correct, or delete your personal
            information. Contact us for any such requests.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground">
            7. Changes to This Policy
          </h3>
          <p className="text-muted-foreground">
            We may update this privacy policy from time to time. We encourage
            you to review it periodically.
          </p>
        </div>

        <p className="text-muted-foreground">
          If you have any questions about this privacy policy, please contact us
          at support@example.com.
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
