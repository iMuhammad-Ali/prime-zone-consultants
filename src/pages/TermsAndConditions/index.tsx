const TermsAndConditions = () => {
  return (
    <section className="mx-auto pt-[20vw] sm:pt-[8vw] lg:pt-[6vw] pb-[8vw] sm:pb-[6vw] lg:pb-[4vw] space-y-[6vw] sm:space-y-[4vw] lg:space-y-[2vw] max-w-[90vw] sm:max-w-[80vw] lg:max-w-[60vw] px-[4vw] sm:px-[3vw] lg:px-[2vw] text-justify">
      <h2 className="text-[6vw] sm:text-[4vw] lg:text-[3vw] font-bold text-foreground text-center">
        Terms and Conditions
      </h2>

      <p className="text-muted-foreground text-[3.5vw] sm:text-[2.5vw] lg:text-[1vw] leading-relaxed">
        These Terms and Conditions ("Terms") govern your use of our website and
        services. By accessing or using our platform, you agree to be bound by
        these Terms. If you do not agree with any part of the Terms, you may not
        access the service.
      </p>

      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold text-foreground">
            1. Use of Service
          </h3>
          <p className="text-muted-foreground 2xl:text-[1vw]">
            You agree to use our services only for lawful purposes and in a way
            that does not infringe on the rights of, restrict, or inhibit anyone
            else's use and enjoyment of the service.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground">
            2. User Accounts
          </h3>
          <p className="text-muted-foreground 2xl:text-[1vw]">
            You may be required to create an account to access certain features.
            You are responsible for maintaining the confidentiality of your
            account information and all activities that occur under your
            account.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground">
            3. Intellectual Property
          </h3>
          <p className="text-muted-foreground 2xl:text-[1vw]">
            All content on this website, including text, graphics, logos, and
            images, is the property of the company or its licensors and is
            protected by copyright and other intellectual property laws.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground">
            4. Prohibited Conduct
          </h3>
          <p className="text-muted-foreground 2xl:text-[1vw]">
            You may not use the service to transmit any harmful, threatening,
            abusive, defamatory, obscene, or otherwise objectionable material.
            Unauthorized use may result in termination of your access.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground">
            5. Third-Party Links
          </h3>
          <p className="text-muted-foreground 2xl:text-[1vw]">
            Our website may contain links to third-party websites. We do not
            control or endorse these websites and are not responsible for their
            content or privacy practices.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground">
            6. Termination
          </h3>
          <p className="text-muted-foreground 2xl:text-[1vw]">
            We may suspend or terminate your access to our services at any time,
            without notice, for conduct that violates these Terms or is harmful
            to other users or us.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground">
            7. Disclaimer of Warranties
          </h3>
          <p className="text-muted-foreground 2xl:text-[1vw]">
            Our services are provided "as is" without warranties of any kind. We
            do not guarantee that the services will be secure, error-free, or
            available at all times.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground">
            8. Limitation of Liability
          </h3>
          <p className="text-muted-foreground 2xl:text-[1vw]">
            To the maximum extent permitted by law, we are not liable for any
            indirect, incidental, or consequential damages resulting from your
            use of our services.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground">
            9. Changes to Terms
          </h3>
          <p className="text-muted-foreground 2xl:text-[1vw]">
            We reserve the right to update these Terms at any time. Your
            continued use of the service after any changes indicates your
            acceptance of the updated Terms.
          </p>
        </div>

        <p className="text-muted-foreground 2xl:text-[1vw]">
          If you have any questions about these Terms, please contact us at{" "}
          <a href="mailto:support@example.com" className="underline">
            support@example.com
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default TermsAndConditions;
