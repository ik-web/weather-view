/// <reference types="react-scripts" />

export interface InfoItem {
  icon: string,
  title: string,
  value: string,
}

export interface TDay {
  id: number,
  name: string,
  dayDate: string,
  tempDay: string,
  tempNight: string,
  info: string,
}

export interface TButton {
  id: number,
  name: string
}
