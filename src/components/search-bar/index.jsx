import propTypes from 'prop-types'
export const Search = ({ handleSetFilter = () => null }) => {
    return (
        <input type="text" onChange={(e) => handleSetFilter(e.target.value)} placeholder="search todo" className="form-control" />
    )
}

Search.propTypes = {
    handleSetFilter:propTypes.func,
}