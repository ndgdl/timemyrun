import { type NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import TimeInput from "~/components/TimeInput";
import computeTotalTime from "~/helpers/computeTotalTime";

const DISTANCE_SEMIMARATHON = 21.0975;
const DISTANCE_MARATHON = 42.195;

const DEFAULT_TIME = 5 * 1000 * 60; // 5:00

const Home: NextPage = () => {
  const [time, setTime] = useState(DEFAULT_TIME);
  const [distance, setDistance] = useState(DISTANCE_SEMIMARATHON);

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
          <div className="grid grid-cols-2 divide-x overflow-hidden rounded-lg border-white bg-slate-200 ">
            <button
              onClick={() => setDistance(DISTANCE_SEMIMARATHON)}
              data-active={distance === DISTANCE_SEMIMARATHON}
              className="group flex flex-col items-center p-2 opacity-20 data-[active=true]:bg-slate-500 data-[active=true]:text-white data-[active=true]:opacity-100 data-[active=true]:shadow-inner"
            >
              <span>Semi-marathon</span>
              <span className="text-xs text-slate-700 group-data-[active=true]:text-white">
                21,0975 km
              </span>
            </button>
            <button
              onClick={() => setDistance(DISTANCE_MARATHON)}
              data-active={distance === DISTANCE_MARATHON}
              className="group flex flex-col items-center p-2 opacity-20 data-[active=true]:bg-slate-500 data-[active=true]:text-white data-[active=true]:opacity-100 data-[active=true]:shadow-inner"
            >
              <span>Marathon</span>
              <span className="text-xs text-slate-700 group-data-[active=true]:text-white">
                42,195 km
              </span>
            </button>
          </div>

          <div className="flex items-center justify-center rounded-lg bg-white">
            <TimeInput
              time={time}
              setTime={setTime}
              className="w-20 text-center text-xl"
            />
          </div>
          <div className="text-xl text-white">
            You would run the{" "}
            {distance === DISTANCE_MARATHON ? "marathon" : "semi-marathon"} in{" "}
            {computeTotalTime({
              runningSpeedPerKm: time,
              totalDistance: distance,
            })}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
