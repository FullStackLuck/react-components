import './App.css';
import Dashboard from './components/dashboard';
import Reviews from './components/reviews';
import Website from './components/websiteVisitors';
import Sentiment from './components/sentimentAnalysis';
import Average from './components/averageRating';

function App(){
  return(<>
<div className='dashboard'><Dashboard/></div>
<div className="reviews"><Reviews/></div>
<div className='website'><Website/></div>
<div className='sentiment'><Sentiment/></div>
<div className='average'><Average/></div>
    </>
  )
}
export default App;
