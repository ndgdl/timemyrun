type RunId = '5k' | '10k' | '15k' | 'half-marathon' | 'marathon'
export interface Run {
  id: RunId;
  label: string;
  distanceLabel?: string;
  distance: number;
}

export const isRunId = (id: string): id is RunId => id in RUNS;

export const RUNS: Record<RunId, Run> = {
  '5k': {
    id: '5k',
    label: '5 km',
    distance: 5,
  },
  '10k': {
    id: '10k',
    label: '10 km',
    distance: 10,
  },
  '15k': {
    id: '15k',
    label: '15 km',
    distance: 15,
  },
  'half-marathon': {
    id: 'half-marathon',
    label: 'Half marathon',
    distanceLabel: '21,10 km',
    distance: 21.0975
  },
  'marathon': {
    id: 'marathon',
    label: 'Marathon',
    distanceLabel: '42,20 km',
    distance: 42.195
  },
};

export const DEFAULT_RUN: Run = RUNS['10k'];

export const RUN_OPTIONS: Run[] = Object.values(RUNS);