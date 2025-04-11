const MyFooter = function () {
  return (
    <div className="bg-primary text-white text-center p-3">
      <h6>EpiMeteo! - {new Date().getFullYear()}</h6>
    </div>
  );
};

export default MyFooter;
