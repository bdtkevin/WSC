import SHeader from './styled/SHeader';

export default function Header() {
  return (
    <SHeader>
      <div className='logo-container'>
        <p>WSC</p>
      </div>
      <div className=''>
        <form>
          <input type='text' />
        </form>
        <div>
          <p>Login</p>
        </div>
      </div>
    </SHeader>
  );
}
