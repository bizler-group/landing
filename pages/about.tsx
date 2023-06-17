import Image from 'next/image'
import { nunitoSans } from '.'

export default function About() {
  return (
    <main
      className={`container text-white ${nunitoSans.className} px-5 pb-20 overflow-hidden relative z-50`}
    >
      <Image
        className="mx-auto my-10 max-md:my-20 max-h-40"
        src="/images/logo/white.svg"
        alt="Bizler logo"
        width={1000}
        height={500}
      />

      <h2 className="text-2xl font-bold mb-5">About Us</h2>

      <p className="mb-4 text-lg">
        At Bizler, we are passionate about harnessing the power of technology to
        transform businesses and drive innovation. As a leading software
        company, we specialize in delivering cutting-edge software solutions
        that empower our clients to streamline their operations, enhance their
        productivity, and achieve their business goals. With a team of highly
        skilled professionals and a commitment to excellence, we strive to be
        the trusted technology partner for organizations across industries.
      </p>

      <h3 className="text-xl font-bold mb-4">Our Mission</h3>

      <p className="text-lg mb-4">
        Our mission is to revolutionize the way businesses operate by leveraging
        the latest technological advancements. We aim to provide innovative
        software solutions that not only meet our clients&apos; current needs
        but also anticipate their future requirements. Through our expertise and
        dedication, we strive to empower businesses to adapt to changing market
        dynamics and gain a competitive edge in their respective industries.
      </p>

      <h3 className="text-xl font-bold mb-4">Why Choose Us?</h3>

      <ol className="text-lg ml-5 mb-4 list-decimal list-inside">
        <li className="mb-3">
          Expertise and Experience: With [number of years] of experience in the
          software industry, we have honed our skills and acquired deep domain
          knowledge. Our team of talented software engineers, designers, and
          project managers are experts in their respective fields and stay
          up-to-date with the latest industry trends and technologies. We bring
          this expertise to every project we undertake, ensuring top-notch
          solutions for our clients.
        </li>
        <li className="mb-3">
          Customized Solutions: We understand that every business is unique and
          has specific requirements. That&apos;s why we offer tailor-made
          software solutions that address our clients&apos; distinct challenges
          and objectives. By closely collaborating with our clients, we develop
          a deep understanding of their needs and design customized software
          solutions that align with their vision and goals.
        </li>
        <li className="mb-3">
          Full-Cycle Development: From conceptualization to deployment and
          ongoing support, we provide end-to-end software development services.
          Our comprehensive approach ensures that we cover every aspect of the
          software development life cycle, including requirements gathering,
          design, coding, testing, and maintenance. This seamless process allows
          our clients to focus on their core business while we handle the
          technical aspects.
        </li>
        <li className="mb-3">
          Quality Assurance: Quality is at the heart of everything we do. We
          adhere to industry best practices and employ rigorous quality
          assurance processes to deliver robust and reliable software solutions.
          Our team conducts extensive testing and validation to ensure that our
          products meet the highest standards of performance, security, and
          scalability.
        </li>
        <li className="mb-3">
          Customer-Centric Approach: We believe in building long-term
          partnerships with our clients based on trust, transparency, and
          exceptional service. We prioritize open communication, actively listen
          to our clients&apos; feedback, and provide ongoing support and
          maintenance to ensure the continued success of their software
          applications. Your satisfaction is our ultimate goal.
        </li>
        <li className="mb-3">
          Innovation and Future-Readiness: We are passionate about staying at
          the forefront of technology. Our team embraces innovation and
          constantly explores emerging trends and technologies to offer
          forward-thinking solutions. By leveraging the power of artificial
          intelligence, machine learning, cloud computing, and other
          transformative technologies, we help our clients future-proof their
          businesses.
        </li>
      </ol>

      <h3 className="text-xl font-bold mb-4">Join the Bizler Community</h3>

      <p className="text-lg mb-4">
        We invite you to join the growing community of businesses that have
        benefited from our software solutions. Together, we can drive digital
        transformation, improve operational efficiency, and achieve remarkable
        business outcomes. Whether you need a custom software application,
        mobile app development, e-commerce solutions, or software integration
        services, Bizler is here to exceed your expectations.
      </p>

      <p className="text-lg">
        Contact us today to discuss your software needs and let us embark on a
        journey of innovation and success together. Experience the power of
        technology with Bizler.
      </p>
    </main>
  )
}
