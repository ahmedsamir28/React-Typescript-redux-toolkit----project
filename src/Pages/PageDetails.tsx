interface IProps { }

const PageDetails = () => {
  return (
    <div className="card card-side bg-base-100 shadow-xl my-10 border w-9/12 container ">
      <figure><img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie" /></figure>
      <div className="card-body">
        <h6>category</h6>
        <h2 className="card-title">New movie is released!</h2>
        <p>Click the button to watch on Jetflix app.</p>

        <div className="card-actions justify-end flex items justify-between">
        <span>$8000</span>
          <button className="btn btn-primary">add to cart</button>
        </div>
      </div>
    </div>)
}

export default PageDetails