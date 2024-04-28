import React from 'react';
import TimeCard from './components/TimeCard';
import Footer from './components/Footer';

function App() {
  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 3);

  return (
    <main>
      <div className="wrapper">
        <h1>we&apos;re are launching soon</h1>
        <TimeCard launchDate={launchDate} />
      </div>
      <Footer />
    </main>
  );
}

export default App;
