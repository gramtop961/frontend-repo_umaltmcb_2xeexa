import Header from "./components/Header";
import Hero from "./components/Hero";
import ContentSections from "./components/ContentSections";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-[Inter] text-gray-900 antialiased">
      <Header />
      <main className="pt-16">
        <Hero />
        <ContentSections />
      </main>
      <Footer />
    </div>
  );
}

export default App;
