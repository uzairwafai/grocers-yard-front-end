function Error({ msg }) {
  return (
    <div className="bg-red-500 text-white p-1">
      {msg || "Something went wrong, please check and try again..."}
    </div>
  );
}
export default Error;
