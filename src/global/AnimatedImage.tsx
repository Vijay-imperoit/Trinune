import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

interface AnimatedImg {
    src: string;
    alt: string;
    width: any;
    height: any;
    className: any,
    loading?: any
}

const AnimatedImage: React.FC<AnimatedImg> = ({ src, alt, width, height, className, loading }) => {
    const [loaded, setLoaded] = useState(false);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
        ref={ref}
        initial={{ zIndex:4}}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
    >
        <motion.img
            // initial={{ opacity: 0 }}
            // animate={{ opacity: loaded ? 1 : 0 }}
            initial={{zIndex:4, filter: "blur(10px)" }}
        animate={
          loaded
            ? { opacity: 1, filter: "blur(0px)" }
            : { zIndex:4, filter: "blur(10px)" }
        }
            transition={{ duration: 1, ease: "easeOut"  }}
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

export default AnimatedImage;
