import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';

function App() {

  return (
    <main>
      <div className="container">
        <h3>questions</h3>
        <section className="info">
          {data.map(question => {
            return (<SingleQuestion 
              key={question.id} 
              id={question.id}
              title={question.title}
              info={question.info}
            />)
          })
          }
        </section>
      </div>
    </main>
  );
}

export default App;
