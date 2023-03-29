export const HOUR = 1000 * 60 * 60;
export const MINUTE = 1000 * 60;
export const SECOND = 1000;

export interface SpeedSetting {
  id: string;
  label: string;
}

export const SPEED_SETTINGS: SpeedSetting[] = [
  {
    id: 'minPerKm',
    label: 'min/km'
  },
  {
    id: 'kmPerHour',
    label: 'km/h'
  }
]

export const DEFAULT_SPEED_TIME = 5 * 1000 * 60;                       // 5:00
export const DEFAULT_SPEED_SETTING = SPEED_SETTINGS[0] as SpeedSetting; // min/km
