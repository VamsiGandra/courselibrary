
import Layout from '../components/Layout';

const Index = () => (
    <Layout>
    <div className="ui container">
       <br></br>
        <div>Loading data from { process.env.BACKEND_URL }</div>
        <p>TODO : Plan the next elements of the page - and how the authentication can be done using firebase</p>
    </div>
    </Layout>
  )
  
export default Index;