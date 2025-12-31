import { Typography } from "@mui/material";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        🌦️ Weather App
      </Typography>
    </motion.div>
  );
};

export default Header;
