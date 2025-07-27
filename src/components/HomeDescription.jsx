import React, { useEffect, useState } from 'react';

import { motion } from "framer-motion";
import { useTypewriter } from '../hook/user-type-writer';

const HomeDescription = () => {
    const [hasLoaded, setHasLoaded] = useState(false);

    const description = "I build interactive, visually polished web experiences using React, JavaScript, TypeScript, and modern frontend frameworks — blending clean design with efficient code to deliver fast, user-friendly interfaces."
    const { displayedText, isComplete } = useTypewriter(description, 30);

    useEffect(() => {
        setHasLoaded(true);
    }, [])
    return (
        <motion.p
            className="w-auto font-normal leading-7 mb-6 min-h-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
        >
            {hasLoaded ? (
                displayedText.split("").map((char, index) => (
                    <motion.span
                        key={index}
                        initial={{ color: "rgb(156 163 175)" }}
                        animate={{
                            color: isComplete ? "rgb(156 163 175)" : "rgb(55 65 81)",
                        }}
                        transition={{ duration: 0.5, delay: index * 0.03 }}
                    >
                        {char}
                    </motion.span>
                ))
            ) : (
                <span className="text-white/60">{description}</span>
            )}
        </motion.p>
    );
};

export default HomeDescription;