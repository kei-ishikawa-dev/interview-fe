import axios from 'axios';
import type { Article } from '../types/get';
import { type CreatePayload } from '../types/create';

type CreateProps = {
  onClick: () => void;
};
export function Create({ onClick }: CreateProps) {
  return <button onClick={onClick}>+</button>;
}
