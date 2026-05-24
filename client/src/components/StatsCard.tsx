const StatsCards = ({ text, count, month }) => {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm">
      <p className="text-gray-500">{text}</p>

      <h2 className="text-4xl font-bold mt-3">{count}</h2>

      <p className="text-green-500 mt-2 font-medium">{month}</p>
    </div>
  );
};

export default StatsCards;
