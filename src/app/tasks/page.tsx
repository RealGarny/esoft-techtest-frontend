import { Header } from '@/src/components/bricks/Header';
import { TasksBlock } from '@/src/components/bricks/Tasks/TasksBlock/TasksBlock';

const Page = async () => {
  return (
    <div className='max-h-screen relative flex flex-col'>
      <Header />
      <TasksBlock />
    </div>
  );
};

export default Page;
