export default function AddMemberCard() {
  return (
    <div className="w-44 bg-white dark:bg-white rounded-xl shadow-md p-5 flex flex-col items-center justify-center cursor-pointer hover:opacity-90 transition-colors duration-300">
      <div className="w-20 h-20 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-3xl font-bold text-black dark:text-black">
        +
      </div>
      <p className="mt-2 font-semibold text-black dark:text-black">Add Member</p>
    </div>
  );
}