import { useRouter } from "next/router";
import  Head from "next/head";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  
  const router = useRouter();

  const addMeetupHandler = async (enteredMeetupData) => {
    const res = await fetch('/api/new-meetup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(enteredMeetupData)
    });

    const data  = await res.json();
    console.log(data);

    router.push('/')

  };

  return <>
  <Head>
        <title>Add a New Meetup</title>
        <meta
          name="description"
          content="Add your own meetups and create amazing networking opportunities."
        />
      </Head>
  <NewMeetupForm onAddMeetup={addMeetupHandler} />
  </>
};

export default NewMeetupPage;
