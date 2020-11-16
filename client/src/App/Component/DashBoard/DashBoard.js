import WithAuth from '../WithAuth/WithAuth';
function DashBoard() {
  return (
    <div>
      <h1>This Is DashBoard</h1>
    </div>
  );
}

export default WithAuth(DashBoard);
