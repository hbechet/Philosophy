async function DeleteElement(id, collection) {

    try {
        const res = await fetch(`http://localhost:5000/api/${collection}/delete/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const data = await res.json();  // Convert to text
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return ('Error fetching data');  // Show error message in case of error
    }

};

export default DeleteElement;