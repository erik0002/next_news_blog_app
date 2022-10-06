import MeetupDetail from "../../components/meetups/MeetupDetail";
import {MongoClient, ObjectId} from "mongodb";


function MeetupDetails(props) {
    return (
        <MeetupDetail
            img={props.meetupData.image}
            title={props.meetupData.title}
            address={props.meetupData.address}
            description={props.meetupData.description}
        />
    );
}

export async function getStaticPaths() {

    const client = await MongoClient.connect('mongodb+srv://Yeliazar:qwert22y@cluster0.ltqc0c9.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find({}, {_id: 1}).toArray();

    await client.close();

    console.log(meetups)

    return {
        fallback: false,
        paths: meetups.map((meetup) => ({
            params: { meetupId: meetup._id.toString() },
        })),
    };
}

export async function getStaticProps(context) {
    // fetch data for a single meetup
    const meetupId = context.params.meetupId;

    console.log(meetupId)

    const client = await MongoClient.connect('mongodb+srv://Yeliazar:qwert22y@cluster0.ltqc0c9.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const selectedMeetup = meetupsCollection.findOne({
        _id: ObjectId(meetupId),
    });

    client.close();


    console.log(meetupId);
    console.log(selectedMeetup);

    return {
        props: {
            meetupData: {
                id: selectedMeetup._id,
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                image: selectedMeetup.image,
                description: selectedMeetup.description
            },
        }
    }
}

export default MeetupDetails;
