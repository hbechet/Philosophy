async function HandleFetch() {

    try {
        const res = await fetch('http://localhost:5000/api/endpoint/data', {
            method: 'GET',
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
    //return response;
};

export default HandleFetch;