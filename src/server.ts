import { app } from "./app";
import morgan from "morgan";

app.use(morgan("tiny"));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server listening to port ${PORT}`));
