import "./App.css"
import TrainBlock from "./components/TrainBlock"

function App() {
  return (
    <div className='App'>
      <TrainBlock
        trainId={1}
        title='This is the Header'
      >
        <header className='homepage-header'>
          <h1>Welcome to My Website</h1>
          <p>This is a simple React page template.</p>
        </header>
      </TrainBlock>
      <main className='homepage-main'>
        <TrainBlock
          trainId={2}
          title='Here about us'
        >
          <section>
            <h2>About Us</h2>
            <p>Here is some information about our project.</p>
          </section>
        </TrainBlock>
        <TrainBlock
          trainId={3}
          title='Our Services'
        >
          <section>
            <h2>Services</h2>
            <p>We offer a variety of services to meet your needs.</p>
          </section>
        </TrainBlock>
      </main>
      <TrainBlock
        trainId={4}
        title='This is the Footer, last step!'
      >
        <footer className='homepage-footer'>
          <p>© 2024 My Website. All rights reserved.</p>
        </footer>
      </TrainBlock>
    </div>
  )
}

export default App
