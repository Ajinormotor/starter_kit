

export const containerVariants = {
    inital: { y: "50px", opacity: "0.7"},
    enter: {
y: 0,
opaccity: "1",
transition: {
    duration: 1,
    ease: [0.25, 0,7, 0 ,1],
    staggerChildren: 0.3
}
    },
    exit: {
y: "50px"
    }
}
export const itemVariants = {
    initial: { y: "30px", opacity: 0 },
    enter: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.7, 0, 1],
      },
    },
    exit: {
      y: "30px",
      opacity: 0,
    },
  };
  

