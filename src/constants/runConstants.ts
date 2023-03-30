export interface Run {
  id: string;
  label: string;
  distanceLabel?: string;
  distance: number;
}

export const DEFAULT_RUN: Run = {
  id: '10k',
  label: '10 km',
  distance: 10,
};

export const runs: Run[] = [
  {
    id: '5k',
    label: '5 km',
    distance: 5,
  },
  {
    id: '10k',
    label: '10 km',
    distance: 10,
  },
  {
    id: '15k',
    label: '15 km',
    distance: 15,
  },
  {
    id: 'half-marathon',
    label: 'Half marathon',
    distanceLabel: '21,10 km',
    distance: 21.0975
  },
  {
    id: 'marathon',
    label: 'Marathon',
    distanceLabel: '42,20 km',
    distance: 42.195
  },
]