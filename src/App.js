import React, { useState } from 'react';
import Nav from './components/Nav';
import Landing from './components/Landing';
import About from './components/About';
import Work from './components/Work';
import ContactForm from './components/Contact';
import Head from './components/Head';

function App() {

  return (
    <div>
      <main>
        <Head/>
        <Landing />
      </main>
    </div>
  );
}

export default App;
