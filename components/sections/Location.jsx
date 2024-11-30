import Head from "next/head";

export default function LocationPage({ location }) {
  return (
    <>
      <Head>
        <title>{`Krishali Wellness - ${location.name}`}</title>
        <meta
          name="description"
          content={`Explore ${location.name}. ${location.description}`}
        />
        <meta property="og:title" content={`Krishali Wellness - ${location.name}`} />
        <meta property="og:description" content={location.description} />
        <meta property="og:url" content={`https://krishali-wellness.com/${location.slug}`} />
        <meta property="og:image" content="/path-to-image.jpg" />
        <meta name="keywords" content="wellness, spa, pools, Abu Dhabi, Corniche, Hamdan Street, Al Bustan" />
      </Head>
      <section>
        <h1>{location.name}</h1>
        <p>{location.description}</p>
      </section>
    </>
  );
}
