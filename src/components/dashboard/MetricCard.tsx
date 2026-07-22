"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";
import { ReactNode } from "react";

type MetricCardProps = {
  title: string;
  value: number;
  suffix?: string;
  icon: ReactNode;
  color?: string;
};

export default function MetricCard({
  title,
  value,
  suffix = "",
  icon,
  color = "text-blue-400",
}: MetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-400">{title}</p>

          <h3 className="mt-2 text-3xl font-bold text-white">
            <CountUp end={value} duration={2} />
            {suffix}
          </h3>
        </div>

        <div className={`text-3xl ${color}`}>
          {icon}
        </div>
      </div>
    </motion.div>
  );
}