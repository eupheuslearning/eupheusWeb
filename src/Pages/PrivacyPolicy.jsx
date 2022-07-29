import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import GoToTop from "../Components/Top";
// import Banner_1 from "../assets/mediaBanner.png";
import grayBg from "../assets/grayBg.png";
import { useNavigate } from "react-router-dom";

// import img1 from "../assets/news/1.png";
// import img2 from "../assets/news/2.png";
// import img3 from "../assets/news/3.png";
import { TagTwoTone } from "@mui/icons-material";

const PrivacyPolicy = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "News - Eupheus";
  }, []);
  return (
    <div
      className="bg-[#dbdbdb] overflow-hidden"
      style={{ backgroundImage: `url(${grayBg})` }}
    >
      <Navbar highlight={"media"} />

      {/* <div className="sm:h-[100vh] relative w-[100vw]">
        <img
          className="sm:h-[100vh] h-auto sm:mt-0 mt-[9rem] object-cover w-[100vw]"
          src={Banner_1}
          alt=""
        />
      </div> */}

      <div className="w-full flex justify-center items-center lg:mt-[8rem] 2xl:mt-[10rem] md:mt-[7rem] sm:mt-[11rem] mt-[11rem]">
        <h1 className="text-[2rem] underline sm:text-[3rem] text-red-700 font-bold">
          PRIVACY POLICY
        </h1>
      </div>

      <div className="flex flex-col my-8  sm:px-[3rem] px-[1.5rem] gap-4">
        <span>
          <span className="text-xl font-semibold underline">Purpose</span>{" "}
          <br />
          <span className="text-sm">
            Eupheus Learning is committed to protecting any personal information
            that we may receive while you access our website. We believe it is
            important for you to know how we treat information about you that we
            may receive when you engage with us. This Privacy Policy is devised
            to help you feel more confident about the privacy and security of
            your personal details. 'You' shall mean You, the User of the Website
            and ‘Yourself’ interpreted accordingly. 'We' / 'Us' means Eupheus
            Learning and its Parent Company: Proficiency Learning Solutions Pvt.
            Ltd. and 'Our' interpreted accordingly. 'Users' means the Users of
            the Website collectively and/or individually as the context allows.
          </span>
        </span>
        <span>
          <span className="text-xl font-semibold underline">Eligibility</span>{" "}
          <br />
          <span className="text-sm">
            The Website is intended for all persons who are interested in
            learning opportunities, knowledge enrichment and who seek
            opportunities and knowledge related to careers in computer coding.
          </span>
        </span>
        <span>
          <span className="text-xl font-semibold underline">
            The Information We Collect
          </span>{" "}
          <br />
          <span className="text-sm">
            We receive both information that is directly provided to Us, such as
            personal information You provide when You visit the Website, and
            information that is passively or automatically collected from You,
            such as information collected from the browser or device You used to
            access Our Website or Services. In this Privacy Policy, we refer to
            all this as the ‘User Information’. To explain further,
          </span>
        </span>
        <span>
          <span className="text-xl font-semibold underline">
            Information You Provide To Us
          </span>{" "}
          <br />
          <span className="text-sm">
            There are portions of this Website / Application where We may need
            to collect personal information from You for a specific purpose. For
            e.g. You can register, apply for participation in an event, or live
            engagement activities. In the course of these various offerings, We
            often seek to collect from You various forms of information, such
            as: name, address, e-mail address, mobile number, gender, date of
            birth and student’s class details. At some instances, You may also
            be able to submit Information about your career plan. For example,
            You might submit answers specific to your career for related
            activities on the portal.
          </span>
        </span>
        <span>
          <span className="text-xl font-semibold underline">
            Information that is Automatically Collected
          </span>{" "}
          <br />
          <span className="text-sm">
            In general, You can visit this Website without telling Us who You
            are or revealing any information about Yourself. We, and Our third
            party service providers, if any, or other business partners, if any,
            (collectively ‘Partners’) may use automated means to collect various
            types of Information about You, Your computer or other device used
            to access Our Website. A representative, non-exhaustive list of the
            types of automatically collected information may include: network or
            Internet protocol address and type of browser You are using (e.g.,
            Chrome, Safari, Firefox, Internet Explorer, Microsoft Edge or
            Opera), the type of operating system You are using, (e.g., Microsoft
            Windows or Mac OS), mobile network, device identifiers, device
            settings, browser settings, the web pages of the Website You have
            visited, Website visited before and after You visited our Website,
            the type of handheld or mobile device used to view the Website
            (e.g., iOS, Android), location information, and the content and
            advertisements You have accessed, seen, forwarded and/or clicked on.
            Please see our Section titled Cookies, for more information about
            how the foregoing Information may be collected and used.
          </span>
        </span>
        <span>
          <span className="text-xl font-semibold underline">
            Payment and billing information
          </span>{" "}
          <br />
          <span className="text-sm">
            We might collect your billing name, billing address and payment
            method when you buy a product or service from the website. We NEVER
            collect your credit card number or credit card expiry date or other
            details pertaining to your credit card on our website. Credit card
            information will be obtained and processed by our online payment
            partner Razorpay.
          </span>
        </span>
        <span>
          <span className="text-xl font-semibold underline">
            How We may use the User Information
          </span>{" "}
          <br />
          <span className="text-sm">
            By entering Your User Information, You accept that We may retain
            Your User Information and that it may be held by Us or any Partners
            that processes it on Our behalf. We, along with Our Partners, shall
            be entitled to Use Your User Information for the following purposes:
          </span>
        </span>
        <span>
          <TagTwoTone />
          &nbsp; provide and communicate with You about feedback, follow up on
          programs you’ve applied for or queries submitted to the team
        </span>
        <span>
          <TagTwoTone />
          &nbsp; Fulfil your requests regarding the services, including without
          limitation respond to your inquiries, communicate with You about our
          products or services that We believe may be of interest to you
        </span>
        <span>
          <TagTwoTone />
          &nbsp; Enforce the legal terms (including without limitation our
          policies and terms of service) that govern your use of our Services,
          and/or for the purposes for which you provided the Information,
        </span>
        <span>
          <TagTwoTone />
          &nbsp; Provide technical support for the Website or in connection with
          Our services and Offerings,
        </span>
        <span>
          <TagTwoTone />
          &nbsp; Prevent fraud or potentially illegal activities (including,
          without limitation, copyright infringement) on or through Our Website
          or Services,
        </span>
        <span>
          {" "}
          <TagTwoTone />
          &nbsp;Protect the safety of our other subscribers or Users,
        </span>
        <span>
          <TagTwoTone />
          &nbsp; Perform analysis regarding how you use the Services or any part
          thereof such market research, including statistical analysis of User
          behaviour which We may disclose to third parties in depersonalised,
          aggregated form.
        </span>
        <span>
          <TagTwoTone />
          &nbsp; In order to enable Us to comply with any requirements imposed
          on Us by law.
        </span>
        <span>
          <TagTwoTone />
          &nbsp; In order to send You periodic communications (this may include
          e-mail), about features, products and services, events and special
          offers. Such communications from Us may include promotion of programs
          being organized by third parties on our website.
        </span>
        <span>
          <span className="text-xl font-semibold underline">
            Access to Information
          </span>{" "}
          <br />
          <span className="text-sm">
            You can access your information, including your name, address,
            payment options, profile information, and purchase history in the
            "Your Account" section of the website. To request access to personal
            information that is not available through Your Account you can
            submit a request to info@eupheus.in.
          </span>
        </span>
        <span>
          <span className="text-xl font-semibold underline">
            Cookies and Web Becons
          </span>{" "}
          <br />
          <span className="text-sm">
            You should be aware that information and data may be automatically
            collected through the Use of Cookies or web beacons or similar
            tracking technologies. "Cookies" are text files placed in your
            computer browser that store basic information that a Website can use
            to recognise repeat site visits and as an example, recall Your name
            if this has been previously supplied. We may use this to understand
            Your service and internet usage, observe behaviour and compile
            aggregate data in order to improve or customize our products,
            services offerings or the Website, target the advertising and assess
            general effectiveness of such advertising. Cookies do not attach to
            Your system and damage Your files. If You do not want information
            collected through the Use of Cookies, there is a simple procedure in
            most browsers that allows You to deny or accept the Cookie feature.
            Note, however, that "personalised" services may be affected if the
            cookie option is disabled. For example, We may use Cookies to
            personalize Your experience at our Services (e.g., to recognize You
            by name when You return to Our Website), save your password in
            password-protected areas. We also may use Cookies or other tracking
            technologies to help Us offer You products, offerings or services
            that may be of interest to You when You visit this Website. We or a
            third party platform with whom We work may place or recognize a
            unique cookie on your browser to enable You to receive customized
            offers, services on this Website. These Cookies contain no
            information intended to identify You personally. The Cookies may be
            associated with de-identified demographic or other data linked to or
            derived from data You voluntarily have submitted to Us (e.g., your
            email address) that we may share with a service provider solely in
            hashed, non-human readable form.
          </span>
        </span>
        <span>
          <span className="text-xl font-semibold underline">
            Security and Data Storing
          </span>{" "}
          <br />
          <span className="text-sm">
            Security is very important to Us. All security procedures are in
            place to protect the confidentiality, integrity and availability of
            Your User Information. We maintain strict physical, electronic, and
            administrative safeguards to protect Your User Information including
            your personal information from unauthorized or inappropriate access.
            We follow generally accepted standards to collect, store and protect
            personal data, including the use of encryption. We retain personal
            data for as long as it is needed to provide the services you have
            requested, and thereafter for legal and service purposes. These may
            include retention periods mandated by legal, contractual, or similar
            obligations; for resolving, preserving, enforcing or defending our
            legal and contractual rights; needed to maintain adequate and
            accurate business and financial records or how you access, update,
            or delete your data etc. This website will take all reasonable
            efforts to ensure the confidentiality of personal data, uploaded
            information etc. and will take reasonable efforts to ensure that the
            information received from you is not misused. This website also
            reveals personal data/information uploaded by you in connection with
            any lawful process. While this website will take the above
            reasonable measures to guard against misuse of personal
            data/information submitted to it by you, this website cannot
            guarantee that someone will not overcome our security measures,
            including, without limitation, the security measures implemented on
            this Web site. Therefore, your posting of personal data/ information
            on this Web site constitutes your acceptance of this risk, and by
            posting of personal data/information, you waive any right to seek
            legal relief from this website due to any misuse of your
            information.
          </span>
        </span>
        <span>
          <span className="text-xl font-semibold underline">
            Information Sharing and Disclosures
          </span>{" "}
          <br />
          <span className="text-sm">
            We may disclose the User Information as follows:
          </span>
          <br />
          <span className="text-sm">
            To service providers or Partners that we have engaged to perform
            business-related functions on our behalf. This may include service
            providers that:
          </span>
          <br />
          <span className="text-sm">(a) conduct research and analytics.</span>
          <br />
          <span className="text-sm">(b) create content.</span>
          <br />
          <span className="text-sm">
            (c) provide customer, technical or operational support.
          </span>
          <br />
          <span className="text-sm">
            (d) conduct or support marketing (such as email or advertising
            platforms).
          </span>
          <br />
          <span className="text-sm">
            (e) fulfill orders and user requests.{" "}
          </span>
          <br />
          <span className="text-sm">
            (f) host our Services, forums and online communities.
          </span>
          <br />
          <span className="text-sm">(g) administer the Website.</span>
          <br />
          <span className="text-sm">(h) maintain databases.</span>
          <br />
          <span className="text-sm">(i) otherwise support our Services.</span>
          <br />
          <br />
          <span className="text-sm">
            Any answers submitted by you for a specific program or innovation
            challenge will be shared with the partners who are a part of that
            specific Innovation Hunt. In response to legal process, for example,
            in response to a court order or a subpoena, a law enforcement or
            government agency's request or similar request. With third parties
            in order to investigate, prevent, or take action (in our sole
            discretion) regarding potentially illegal activities, suspected
            fraud, situations involving potential threats to any person, us, or
            the Website, or violations of our policies, the law or our Terms of
            Use, to verify or enforce compliance with the policies governing our
            Website.
          </span>
          <br />
          <span className="text-sm">
            We may share the User Information with Our affiliates or group
            companies, so they can provide, improve and communicate with You
            about their own, or their marketing partners’ products and services.
          </span>
          <br />
          <span className="text-sm">
            We reserve the right to disclose and transfer the User Information
            outside India. We will comply with all relevant Data Protection
            legislation in relation to the period for which We retain any User
            Information.
          </span>
        </span>
        <span>
          <span className="text-xl font-semibold underline">
            Refund / Cancellation Policy
          </span>{" "}
          <br />
          <span className="text-sm">
            Orders placed on this website are on non-returnable / non-refundable
            basis
          </span>
        </span>
        <span>
          <span className="text-xl font-semibold underline">
            Technical issue / Multiple Payments / Others
          </span>{" "}
          <br />
          <span className="text-sm">
            In case of any technical issue due to which the payment gets
            deducted (or multiple payment instances) and does not reflect in the
            company’s account. In such cases, please send the payment receipt
            copy on accounts@eupheus.in and info@eupheus.in to initiate the
            payment (refund – in case of multiple payments) settlement process
            manually. It shall take us not more than 7-10 working days to settle
            the payment issues. It is advisable to reach out to us directly on
            the address given below in case you are still not satisfied with the
            resolution.
          </span>
          <br />
          <span>
            <span className="text-base font-semibold">Contact Address</span>{" "}
            <br />
            <span className="text-sm">Accounts Department</span>
            <br />
            <span className="text-sm">
              Proficiency Learning Solutions Private Limited
            </span>
            <br />
            <span className="text-sm">
              Office Address: A-12, Second Floor, Mohan Cooperative Industrial
              Estate, Main Mathura Road, Near Sarita Vihar Metro Station, New
              Delhi – 110044
            </span>
            <br />
            <span className="text-sm">
              Tel: 011-61400200 | Website: www.eupheus.in; E-Mail:
              accounts@eupheus.in
            </span>
            <br />
            <span className="text-sm">Facebook: Fb.com/eupheuslearning</span>
            <br />
            <span className="text-sm">
              You may contact us during office hours: Timings: 10:30 AM to 6:00
              PM (Monday to Friday)
            </span>
          </span>
        </span>
        <span>
          <span className="text-xl font-semibold underline">
            Relationship between website and legal name
          </span>{" "}
          <br />
          <span className="text-sm">
            Proficiency Learning Solutions Private Limited is the parent company
            of Eupheus Learning.
          </span>
          <br />
          <span className="text-sm">
            PayTm is the payment gateway provider for online fee payment
          </span>
        </span>
        <span>
          <span className="text-xl font-semibold underline">
            Linked Services
          </span>{" "}
          <br />
          <span className="text-sm">
            Our Website may contain links to or integrations with other services
            such as Facebook, Twitter, LinkedIn, and other media services and
            platforms whose information practices may be different than ours.
            Visitors should consult these other services' privacy notices as we
            have no control over information that is submitted to, or collected
            by, these third parties.
          </span>
          <br />
          <span className="text-base font-semibold">
            Acceptance of the Policy:
          </span>
          <br />
          <span className="text-sm">
            By visiting our website, signing up or logging into the website,
            uploading information on our website; you acknowledge and
            unconditionally accept the policy. If you do not agree with this
            Policy, do not use our website and services or provide here any of
            your personal data.
          </span>
        </span>
        <span>
          <span className="text-xl font-semibold underline">
            Governing Law and Jurisdiction
          </span>{" "}
          <br />
          <span className="text-sm">
            This Privacy Policy is governed by and operated in accordance with
            the laws of India. If any of the parties wish to seek legal
            recourse, they may do so by using the courts of law in New Delhi.
          </span>
        </span>
        <span>
          <span className="text-xl font-semibold underline">Updates</span>{" "}
          <br />
          <span className="text-sm">
            We may change this privacy policy from time to time and You should
            check these regularly. Your use of the Website will be deemed an
            acceptance of the privacy policy existing at that time.
          </span>
        </span>
        <span>
          <span className="text-xl font-semibold underline">
            Grievance Officer
          </span>{" "}
          <br />
          <span className="text-sm">
            In accordance with Information Technology Act 2000 and rules made
            there under, the name and contact details of the Grievance Officer
            are provided below:
          </span>
          <br />
          <span className="text-base">Mr. Ranjit Singh</span>
          <br />
          <span className="text-base font-semibold">
            Proficiency Learning Solutions Private Limited
          </span>
          <br />
          <span className="text-sm">
            Office Address: A-12, Second Floor, Mohan Cooperative Industrial
            Estate, Main Mathura Road, Near Sarita Vihar Metro Station, New
            Delhi – 110044
          </span>
          <br />
          <span className="text-sm">Phone: +91-11- 61400200</span>
          <br />
          <span className="text-sm">Email: hrteam@eupheus.in</span>
          <br />
          <span className="text-sm">
            If you have any questions about this Policy or other privacy
            concerns, you can also email us at info@eupheus.in.
          </span>
        </span>
      </div>

      <Footer />
      <GoToTop />
    </div>
  );
};

export default PrivacyPolicy;
