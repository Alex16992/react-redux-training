import { useSelector, useDispatch } from "react-redux"
import { next, previous, reset } from "../redux/counterSlice"
import "./TrainBlock.css"

function TrainBlock({ children, trainId, title }) {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div
      className={`TrainBlock ${count === trainId ? "active" : "inactive"} ${
        count > 4 ? "active" : ""
      }`}
    >
      {children}
      {count === trainId && (
        <div className='TrainBlock-popup'>
          <div className='TrainBlock-popup-content'>
            <p>{title}</p>
            <div className='TrainBlock-buttons'>
              <button
                {...{ disabled: count === 1 }}
                onClick={() => dispatch(previous())}
              >
                Previous
              </button>
              {count} / 4<button onClick={() => dispatch(next())}>Next</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default TrainBlock
