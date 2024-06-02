const LoadingButton = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div>
        <button className="btn">
          <span className="loading loading-spinner"></span>
          loading
        </button>
      </div>
    </div>
  );
};

export default LoadingButton;
