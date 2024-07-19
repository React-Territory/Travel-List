import Icons from "./components/Icons";
import Title from "./components/Title";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import "./Css/app.css";

export default function App() {
  return (
    <div className="container w-full flex justify-center items-center">
      <div
        className="app-list w-3/4 flex h-screen flex-col"
        style={{ color: "#434A4A" }}
      >
        <Icons />
        <Title />
        <Form />
        <PackingList />
        <Stats />
      </div>
    </div>
  );
}
