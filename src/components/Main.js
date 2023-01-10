import QuickNav from "./QuickNav";
import QuickLink from "./Quicklink";

const Main = () => {
  return (
    <main className='main-container'>
      <div className='upper-main'>
        <p className='intro'>👋 Hello there, I am</p>
        <h1 className='name'>
          Chheang
        </h1>
        <h2 className='statement'>
          Full stack developer
        </h2>
        <p>I am a prospect of <span className='accent'>AUPP</span>,  
          <span className='accent'> self-taught</span> developer, 
          and open to <span className='accent'>opportunities</span>.
          That's all you need to know, or maybe...
        </p>
      </div>
      <div className='bottom-main'>
        <QuickNav />
        <QuickLink />
      </div>
    </main>
  )
}

export default Main;