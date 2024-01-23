import logo from './logo.svg';
import './App.css';

function handleAdd(){
  setimages([,...Images])
}

function handleChange(){
  console.log('working input')
}

function App() {
  return (
    <section>
      <div className='flex flex-wrapenter'>
        <ShowImage/>
      </div>
      <div className='flex justify-between my-5'>
        <input 
        type='text'
        className='p-2 border border-gray-800 shadow rounded'
        onChange={handleChange}
        />
        <button className='p-2 bg-green-600 text-white' onClick={handleAdd}>Add New</button>
      </div>
    </section>
  );
}

export default App;
