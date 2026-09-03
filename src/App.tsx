import Header from "./components/header/Header";
import Main from "./components/main/Main";

function App() {
  return (
    <>
      <div className=" w-screen h-screen bg-error px-8 py-17 bg-[url(/images/bg-intro-mobile.png)] flex flex-col items-center justify-center lg:flex-row lg:gap-12 lg:bg-[url(/images/bg-intro-desktop.png)] ">
        <header>
          <Header />
        </header>
        <main className="mt-16">
          <Main />
        </main>
      </div>
    </>
  );
}

export default App;
