import { type NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Results from "~/components/Results";
import SpeedInput from "~/components/SpeedInput";
import ToggleRun from "~/components/ToggleRun";
import { paceToString } from "~/helpers/convertToString";
import { stringToPace } from "~/helpers/parseString";
import { DEFAULT_PACE, DEFAULT_SPEED, type SpeedType } from "~/constants/speedConstants";
import { DEFAULT_RUN } from "~/constants/runConstants";
import { toPace, toSpeed } from "~/helpers/convert";

const Home: NextPage = () => {
  const [pace, setPace] = useState(DEFAULT_PACE);
  const [speed, setSpeed] = useState(DEFAULT_SPEED);
  const [active, setActive] = useState<SpeedType>('pace');

  const [run, setRun] = useState(DEFAULT_RUN);

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
          <ToggleRun activeRun={run} setDistance={setRun}/>
            <div className="grid grid-cols-1 space-y-2">
              <SpeedInput
                label="min/km"
                speedType="pace"
                speed={paceToString(pace)}
                onChange={(event) => {
                    const paceString = event.currentTarget.value;
                    const pace = stringToPace(paceString);
                    console.log(event.currentTarget.value)
                    setPace(pace);
                    console.log('pace:', pace);

                    if (pace > 0) {
                      const speed = toSpeed(pace);
                      console.log('speed:', speed);
                      setSpeed(speed);
                    }
                  }
                }
                disabled={active !== 'pace'}
                onClick={() => setActive('pace')}
              /> 
              <SpeedInput
                label="km/h"
                speed={speed}
                speedType="speed"
                onChange={(event) => {
                    
                    const speed = Number(event.currentTarget.value);
                    setSpeed(speed);

                    if  (speed > 0) {
                      const pace = toPace(speed);
                      setPace(pace);
                    }
                  }
                }
                disabled={active !== 'speed'}
                onClick={() => setActive('speed')}
              />
            </div>
          </div>
          <Results run={run} speedType={active} speed={active === 'pace' ? pace : speed}/>
      </main>
    </>
  );
};

export default Home;
