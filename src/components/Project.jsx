import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

export const Project = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 ">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((item, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <a href={item.link} target="_blank" rel="noreferrer">
                <img
                  src={item.image}
                  width={150}
                  height={150}
                  alt={item.title}
                  className="mb-6 rounded"
                />
              </a>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">
                <a href={item.link} target="_blank" rel="noreferrer">
                  {item.title}
                </a>
              </h6>
              <p className="mb-4 text-neutral-400">{item.description}</p>
              {item.technologies.map((item, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                >
                  {item}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};
