import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { stats } from '../../data/content';
import './Stats.css';

const CounterItem = ({ targetValue, decimals = 0 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, targetValue, {
        duration: 2.2,
        ease: [0.25, 0.8, 0.25, 1],
        onUpdate: (latest) => {
          setCount(decimals > 0 ? parseFloat(latest.toFixed(decimals)) : Math.round(latest));
        }
      });
      return () => controls.stop();
    }
  }, [isInView, targetValue, decimals]);

  return <span ref={ref}>{count}</span>;
};

export const Stats = () => {

  return (
    <motion.section 
      className="statsSection"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
    >
      <div className="container">
        <div className="statsGrid">
          {stats.map((stat, index) => {
            const decimals = stat.value % 1 !== 0 ? 1 : 0;
            return (
              <motion.div 
                key={stat.label || index}
                className="statCard"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.12, ease: [0.25, 0.8, 0.25, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
              >
                <div className="statNumber">
                  <CounterItem targetValue={stat.value} decimals={decimals} />
                  <span className="statNumberPlus">{stat.suffix}</span>
                </div>
                <p className="statLabel">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};
