import "./style.css";
import propTypes from 'prop-types';
export const TodoItem = ({ item = {
    id: 0,
    title: "default title",
    isFinished:false
}, removeFun, checkFun }) => {
    return (
        <div className="card mb-3">
            <div className="card-body">
                <div className="row">
                    <div className="col-md-9">
                        <h3 className={item.isFinished ? "card-title text-through" : "card-title"}>{item.title}</h3>
                    </div>
                    <div className="col-md-3">
                        <button onClick={()=>removeFun(item.id)} className="btn btn-danger">X</button>
                        <button onClick={()=>checkFun(item.id)} className="btn btn-success">V</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

TodoItem.propTypes = {
    removeFun: propTypes.func.isRequired,
    checkFun: propTypes.func.isRequired,
    item: propTypes.exact({
        id: propTypes.number,
        title: propTypes.string,
        isFinished:propTypes.bool
    })
}