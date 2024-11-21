function ErrorMessage({ message }) {
  return (
    <div className="bg-red-500/20 border border-red-300 text-white px-4 py-3 rounded-lg">
      <p>{message}</p>
    </div>
  );
}

export default ErrorMessage;