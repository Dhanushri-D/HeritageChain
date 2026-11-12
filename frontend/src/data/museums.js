import { HERITAGE_INSTITUTIONS } from './institutions';

export const DEMO_MUSEUMS = HERITAGE_INSTITUTIONS.map((inst) => ({
  ...inst,
  artifacts: 0,
  verified: 0,
  pending: 0
}));
