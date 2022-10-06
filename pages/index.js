import MeetupList from "../components/meetups/MeetupList";
import Head from "next/head";
import {MongoClient} from "mongodb";
import {Fragment} from "react";

function HomePage(props) {
    return (
        <Fragment>
            <Head>
                <title>React Meetups</title>
                <meta
                    name="description"
                    content="Browse a huge list of highly active React meetups"
                />
            </Head>
            <MeetupList meetups={props.meetups}/>
        </Fragment>
    )
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

    const client = await MongoClient.connect('mongodb+srv://Yeliazar:qwert22y@cluster0.ltqc0c9.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find().toArray();

    await client.close();

    return {
        props: {
            meetups: meetups.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString(),
                description: meetup.description
            }))
        },
        revalidate: 10
    };
}

export default HomePage;
