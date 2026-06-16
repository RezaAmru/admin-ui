import Card from "../components/Elements/Card.jsx";
import MainLayout from "../components/Layouts/MainLayout.jsx";

const description =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, autem porro asperiores numquam sed veritatis debitis beatae amet laboriosam fuga pariatur sapiente suscipit culpa facere voluptatem.";

function Dashboard({ onLogout, user }) {
  return (
    <MainLayout onLogout={onLogout} user={user}>
      <div className="grid min-h-full auto-rows-fr gap-6 sm:grid-cols-12 sm:grid-rows-3">
        <div className="sm:col-span-4">
          <Card title="Total Balance" desc={description} />
        </div>
        <div className="sm:col-span-4">
          <Card title="Goals" desc={description} />
        </div>
        <div className="sm:col-span-4">
          <Card title="Upcoming Bill" link="/bill" desc={description} />
        </div>
        <div className="sm:col-span-4 sm:row-span-2">
          <Card
            title="Recent Transactions"
            link="/transactions"
            desc={description}
          />
        </div>
        <div className="sm:col-span-8">
          <Card title="Statistics" desc={description} />
        </div>
        <div className="sm:col-span-8">
          <Card title="Expenses Breakdown" desc={description} />
        </div>
      </div>
    </MainLayout>
  );
}

export default Dashboard;
