import "../addactivity/addactivity";


const List = ({ list, remove, edit }) => {

  return (
    <div className="allactivities">
      <div className="all-container">
        <h1>All Activities</h1>
        <div className="list-tag">
          <li>Activity</li>
          <li>Date&Time</li>
          <li>Duration</li>
          <li>Calories</li>
          <li>Note</li>
        </div>
        {list.map((item) => (
          <div className="all-item" key={item.id}>
            <div>{item.type}</div>
            <div>{item.date}</div>
            <div>{item.durations}</div>
            <div>{item.calories}</div>
            <div>{item.note}</div>
            <div className="button-container">
              <button
                onClick={() => {
                  edit(item.id);
                }}
              >
                <i className="uil uil-edit"></i>
              </button>
              <button
                onClick={() => {
                  remove(item,item.id);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
