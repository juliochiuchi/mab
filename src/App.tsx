import "antd/dist/reset.css";
import "./styles/global.css";

import Home from "./pages/Home";
import { ConfigProvider, } from "antd";
import ptBR from "antd/locale/pt_BR";

const App = () => {
  return (
    <ConfigProvider locale={ptBR}>
      <Home />
    </ConfigProvider>
  );
}

export default App;
