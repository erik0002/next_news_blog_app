import MeetupDetail from "../../components/meetups/MeetupDetail";
import {useRouter} from "next/router";


function MeetupDetails() {
    return (
        <MeetupDetail
            img=''
            title='Text'
            address="text"
            description="text"
        />
    );
}

export async function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            {
                params: {
                    meetupsId: 'm1'
                }
            },
            {
                params: {
                    meetupsId: 'm2'
                }
            }
        ]
    }
}

export async function getStaticProps(context) {
    // fetch data for a single meetup

    const meetupId = context.params.meetupId;

    console.log(meetupId);

    return {
        props: {
            meetupData: {
                img: '',
                id: meetupId,
                title: 'text',
                address: 'text',
                description: 'text'
            }
        }
    }
}

export default MeetupDetails;
