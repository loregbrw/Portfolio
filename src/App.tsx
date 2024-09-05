import { Header } from "./components/header";

export const App = ({ children }: any) => {
  return (
    <>
      <Header />
      { children }
    </>
  );
}
