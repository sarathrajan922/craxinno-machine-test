//importing types of server
import { Server } from "http";
import configKeys from "../../config";

const port = configKeys.PORT;
//config server method

const serverConfig = (server: Server) => {
  const startServer = () => {
    server.listen(port, () => {
      console.log(`server listening on port ${port}`);
    });
  };
  return { startServer };
};

export default serverConfig;
