import './App.css';
import AddTask from './components/AddTask';
import TodoCard from './components/TodoCard';

function App() {
  return (
    <div className='w-screen h-screen bg-slate-900 pt-6'>
       <div className='w-[95%] md:w-[80%] lg:w-[45%]  mx-auto h-[98%] border-[1px] border-slate-200 flex flex-col gap-4'>
         <h1 className='text-center text-slate-200 mt-2 text-2xl font-semibold'>Todo List App</h1>
         <AddTask/>
         <TodoCard/>
       </div>
    </div>
  );
}

export default App;
