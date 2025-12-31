import { Card, Typography } from "@mui/material";
import { motion } from "framer-motion";

const Forecast = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Card sx={{ p: 2, mt: 3 }}>
        <Typography align="center">
          🌤️ Forecast Feature (Next Step)
        </Typography>
      </Card>
    </motion.div>
  );
};

export default Forecast;
