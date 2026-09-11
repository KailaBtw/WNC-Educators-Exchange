import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
} & Omit<HTMLMotionProps<"div">, "children">;

export default function Reveal({ children, delay = 0, y = 36, className, ...rest }: Props) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, scale: 0.97, rotate: -0.6, filter: "blur(1px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.16, margin: "0px 0px -10% 0px" }}
      transition={{
        type: "spring",
        stiffness: 110,
        damping: 20,
        mass: 0.7,
        delay,
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
