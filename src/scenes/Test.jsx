import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

export default function Test() {
  return (
    <section
      id="test"
      /* className="pt-32 pb-16" */ className="lg:pt-80 pb-80 md:pt-60 pb-60 xxs:pt-48 pb-48"
    >
      {/* HEADING */}
      <motion.div
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5 text-red">
          My services
        </p>
        <LineGradient width="mx-auto w-2/5" />
        <p className="mt-10">Here's my services</p>
      </motion.div>

      {/* TESTIMONIALS */}
      <div className="flex items-center text-center gap-8">
        <motion.div
          className="w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <div className="flex-1">1</div>
        </motion.div>
        <motion.div
          className="w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <div className="flex-1">2</div>
        </motion.div>
        <motion.div
          className="w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <div className="flex-1">3</div>
        </motion.div>
      </div>
    </section>
  );
}
