import { type NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Results from "~/components/Results";
import TimeInput from "~/components/TimeInput";
import ToggleRun from "~/components/ToggleRun";
import computeTotalTime from "~/helpers/computeTotalTime";
import { DISTANCE_SEMIMARATHON } from "~/helpers/distanceConstants";
import { DEFAULT_AVERAGE_TIME } from "~/helpers/timeConstants";

const Home: NextPage = () => {
  const [time, setTime] = useState(DEFAULT_AVERAGE_TIME);
  const [distance, setDistance] = useState(DISTANCE_SEMIMARATHON);

  const { hours, minutes, seconds } = computeTotalTime({ runningSpeedPerKm: time, totalDistance: distance })

  return (
    <>
      <Head>
        <title>Time my Run</title>
        <meta
          name="Time my Run"
          content="Calculate your runs duration based on your running speed"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Time my Run
          </h1>
          <ToggleRun distance={distance} setDistance={setDistance}/>
          <TimeInput
            time={time}
            setTime={setTime}
            className="w-20 text-center text-xl rounded-lg bg-white p-2"
          />
          <Results distance={distance} hours={hours} minutes={minutes} seconds={seconds}/>
        </div>
      </main>
    </>
  );
};

export default Home;
