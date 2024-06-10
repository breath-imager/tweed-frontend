import { useAuth } from '@paytweed/core-react';

function DemoPage() {
  const { isAuthenticated, connect, logout, accessToken } = useAuth();

  async function handleConnect() {
    await connect();
  }

  return (
    <>
      <div>
        <h1>access token: ${accessToken}</h1>
        <button onClick={handleConnect}>connect</button>
      </div>
    </>
  );
}

export default DemoPage;
