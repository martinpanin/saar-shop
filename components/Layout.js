import '../sass/style.scss';
const Layout = (props) => (
        <section className="container">
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
            <script src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" id="snipcart" data-api-key="MTA2MzRlMjEtMmEwOC00YWI1LWFjNGItYWIzNzQ2YTVkMzNhNjM2MzgyOTkzMjcwMDM5OTk0"></script>
            <link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" type="text/css" rel="stylesheet" />
            {props.children}
        </section>
);
export default Layout;