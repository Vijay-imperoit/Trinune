import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

interface AnimatedImg {
  src: string;
  alt: string;
  className?: any;
  width?: any;
  height?: any;
  loading?: any;
}

const AnimatedImageWithHeight: React.FC<AnimatedImg> = ({
  src,
  alt,
  width,
  height,
  className,
  loading,
}) => {
  const [loaded, setLoaded] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: "easeOut" }}
      style={{
        height: "100%",
      }}
    >
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 1 }}
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        onLoad={() => setLoaded(true)}
        loading={loading}
      />
    </motion.div>
  );
};

export default AnimatedImageWithHeight;
