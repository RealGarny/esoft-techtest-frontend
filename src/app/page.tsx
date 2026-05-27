import { redirect } from 'next/navigation';
import { ClientRouter } from '../services/clientRouter/ClientRouter';

export default function Home() {
  redirect(ClientRouter.tasks.get());
}
