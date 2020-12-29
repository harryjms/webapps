import Head from "next/head";

const About = () => {
  return (
    <div>
      <Head>
        <title>About - {process.env.SITE_TITLE}</title>
      </Head>
      <h1>About</h1>
      <p>
        Based in Bexleyheath, Jarman Building Services does exactly what the
        name suggests! We specialise in the chalet style of house found
        throughout Bexley, Dartford, Bromley and Greenwich.
      </p>
      <p>
        The chalet style of house throws up issues and problems not frequently
        found in the conventional style of house. We feel we have now
        encountered all that the Chalet has to throw at us. We recognise these
        issues early during our work planning rather than stumbling across them
        “while we have your roof off!”
      </p>
      <p>
        We are able to take your project from design to completion, dealing
        directly with the local council through the planning and building
        stages, taking all the stress away from you.
      </p>
      <p>
        All tradesmen who come on site are qualified in their respective fields,
        are reputable and trustworthy. A high percentage of our work comes by
        way of recommendation. This speaks volumes about the quality of our
        work.
      </p>
      <p>
        All materials used are sourced from companies that are known for
        supplying quality products.
      </p>
      <p>
        We will endeavour to carry out the work with minimal disruption to you ,
        the client. The site will be left tidy and safe at the end of each
        working day. Many of our previous clients had young children who would
        love to see what “Bob the Builder” has been doing during the day. We
        can’t have them falling down foundation trenches or through your lounge
        ceiling!
      </p>
      <p>
        We recognise that you want the work completed and to have your house
        back as quickly as possible. Our philosophy is to get in, get the job
        done and get out of your hair without any unnecessary delays. This is
        achieved by having tradesmen on-site every day.
      </p>
      <p>
        <strong>Our services include:</strong>
      </p>
      <ul>
        <li>
          First level full or part roof conversions, giving you additional
          bedrooms and bathrooms.
        </li>
        <li>
          Ground floor kitchen / dining room extensions, resulting in that big
          kitchen you’ve always wanted.
        </li>
        <li>Internal wall removal.</li>
        <li>Chimney breast removal.</li>
        <li>Installation of structural steels.</li>
        <li>Kitchen fitting, including all appliances.</li>
        <li>Bathroom fitting, including tiling.</li>
        <li>Installation of under floor heating.</li>
        <li>Electrical work. Certified by NICEIC</li>
        <li>Plumbing and Gas. Certified by GasSafe</li>
        <li>Carpentry.</li>
        <li>Plastering.</li>
        <li>Decorating.</li>
      </ul>
    </div>
  );
};

export default About;
