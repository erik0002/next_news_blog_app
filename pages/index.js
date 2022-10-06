import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [{
    id: 'm1',
    title: 'A First Meetup',
    image: 'https://media.cntraveler.com/photos/57d87670fd86274a1db91acd/master/pass/most-beautiful-paris-pont-alexandre-iii-GettyImages-574883771.jpg',
    address: 'Minsk, Oxford street 5',
    description: 'First meetup!'
}, {
    id: 'm2',
    title: 'A First Meetup',
    image: 'https://cdn.mos.cms.futurecdn.net/pD3bsKPrjsqNiFDGRL5oq6.jpg',
    address: 'Gomel, Oxford street 10, 456789',
    description: 'Second meetup!'
},]

function HomePage(props) {
    return <MeetupList meetups={props.meetups}/>;
}

// export async function getServerSideProps(context) {
//
//     const req = context.req;
//     const res = context.res;
//
//     //fetch data from an API
//
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         }
//     };
// }

export async function getStaticProps() {
    return {
        props: {
            meetups: DUMMY_MEETUPS
        },
        revalidate: 10
    };
}

export default HomePage;
