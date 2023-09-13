import { Btn, Inp, Navbar } from "@/components/shared";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      Hello World !
      <Btn size="xs" variant="primary" label="Primary" />
      <Btn size="sm" variant="primary" label="Primary" />
      <Inp type="text" placeholder="Enter Your Email" />
      <Btn size="md" variant="secondary" label="Secondary" />
      <Btn size="lg" loading variant="denger" label="Denger" />
    </div>
  );
};

export default Home;
