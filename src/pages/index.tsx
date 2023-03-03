import { type NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import TimeInput from "~/components/Input";
import computeTotalTime from "~/helpers/computeTotalTime";

const DISTANCE_SEMIMARATHON = 21.0975;

const Home: NextPage = () => {
  const [mins, setMins] = useState(0);
  const [secs, setSecs] = useState(0);

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
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Time my Run
          </h1>
          <div className="flex items-center justify-center rounded-lg bg-white">
            <TimeInput setTime={setMins} className="text-xl" />
            <span>:</span>
            <TimeInput setTime={setSecs} className="text-xl" />
          </div>
          <div className="text-xl text-white">
            You would run the semi-marathon in{" "}
            {computeTotalTime({
              runningSpeedPerKm: mins * 1000 * 60 + secs * 1000,
              totalDistance: DISTANCE_SEMIMARATHON,
            })}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
