export default function Map() {
  return (
    <section className="w-full bg-enterprise-black border-t-4 border-action-orange relative">
      {/* Optional Overlay string to make the iframe non-interactive while scrolling on mobile but keeping it clickable if touched deliberately. A simple pointer-events-none can block it, but usually interactive is better. We'll leave it interactive. */}
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
        marginHeight={0}
        marginWidth={0}
        src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=1521%20MacArthur%20Dr.%20Alexandria,%20LA+(Walls%20Tree%20Service)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
        className="w-full h-[400px] md:h-[500px] lg:h-[600px]"
        title="Walls Tree Service Alexandria Location"
      ></iframe>
    </section>
  );
}
