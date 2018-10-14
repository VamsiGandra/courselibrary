import Header from './Header';
import Head from 'next/head';


const Layout = (props) =>(

    <div>
        <Head>
            <title>Course Library </title>
            <link rel="stylesheet" type="text/css" 
            href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"/>
          <script
             src="https://code.jquery.com/jquery-3.1.1.min.js"
            integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
            crossorigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.js"></script>
            <script src="https://code.jquery.com/jquery-3.3.1.min.js
"></script>

        </Head>
        <Header/>
        {props.children}
    </div>
);

export default Layout;