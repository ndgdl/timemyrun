import { type NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Results from "~/components/Results";
import TimeInput from "~/components/TimeInput";
import ToggleRun from "~/components/ToggleRun";
import ToggleTimeSetting from "~/components/ToggleSpeedSetting";
import computeTotalTime from "~/helpers/computeTotalTime";
import { DISTANCE_SEMIMARATHON } from "~/helpers/distanceConstants";
import { DEFAULT_SPEED_TIME, DEFAULT_SPEED_SETTING, HOUR, SPEED_SETTINGS } from "~/helpers/timeConstants";

const Home: NextPage = () => {
  const [time, setTime] = useState(DEFAULT_SPEED_TIME);
  const [speedSetting, setSpeedSetting] = useState(DEFAULT_SPEED_SETTING)
  const [distance, setDistance] = useState(DISTANCE_SEMIMARATHON);
  
  const { hours, minutes, seconds } = computeTotalTime({ runningSpeedPerKm: time, totalDistance: distance })
  const otherSpeedSetting = SPEED_SETTINGS.find((otherSpeedSetting) => otherSpeedSetting.id !== speedSetting.id)
  const otherTime = Math.floor((HOUR / time) * 100) / 100;
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
          <div className="relative">
            <TimeInput
              time={time}
              setTime={setTime}
              className="w-20 text-center text-xl rounded-lg bg-white p-2"
            />
            <ToggleTimeSetting
              time={time}
              setTime={setTime}
              speedSetting={speedSetting}
              setSpeedSetting={setSpeedSetting}
              className="absolute top-[calc(50%_-_0.75rem)] left-[calc(100%_+_1rem)]"
            />
          </div>
          <p className="text-white">e.g. {`${otherTime} ${otherSpeedSetting?.label ?? ''}`} </p>
          <Results distance={distance} hours={hours} minutes={minutes} seconds={seconds}/>
        </div>
      </main>
    </>
  );
};

export default Home;
