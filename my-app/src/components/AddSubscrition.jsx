import "./AddSubscrition.css"

function AddSubscrition() {
    return (
        <div className="container">
            <h2>Subscription Form</h2>
            <form>
                <div className="form-group">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required/>
                </div>
                <div className="form-group">
                    <label for="date">Date:</label>
                    <input type="date" id="date" name="date" required/>
                </div>
                <div className="form-group">
                    <label for="price">Price:</label>
                    <input type="number" id="price" name="price" min="0" step="0.01" required/>
                </div>
                <button type="submit" className="btn">Add Subscription</button>
            </form>
        </div>
    )
}

export default AddSubscrition
