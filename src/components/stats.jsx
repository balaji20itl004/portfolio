import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const stats = [
    { number: 3, suffix: "+", title: "Major Projects" },
    { number: 10, suffix: "+", title: "Technologies" },
    { number: 2, suffix: "+", title: "Certificates" },
    { number: 1, suffix: "", title: "Internship" },
  ];

  return (
    <section className="stats" ref={ref}>
      {stats.map((item, index) => (
        <div className="stat-card" key={index}>
          <h2>
            {inView ? (
              <CountUp
                end={item.number}
                duration={2}
              />
            ) : (
              0
            )}
            {item.suffix}
          </h2>

          <p>{item.title}</p>
        </div>
      ))}
    </section>
  );
}

export default Stats;