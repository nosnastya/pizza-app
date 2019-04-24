import React from 'react';
import Layout from "./components/Layout/Layout";
import PizzaBuilder from "./containers/PizzaBuilder/PizzaBuilder";

function App() {
  return (
      <Layout>
        <PizzaBuilder/>
      </Layout>
  );
}

export default App;
