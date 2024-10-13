import dynamoDB from '../../../utils/dynamoClient';

export default async function handler(req, res) {
    const { method } = req;

    if (method === 'GET') {
        try {
            const params = {
                TableName: 'Rooms',
            };
            const data = await dynamoDB.scan(params).promise();
            res.status(200).json({ success: true, data: data.Items });
        } catch (error) {
            console.error('Error fetching rooms:', error); // Logs the error to the console
            res.status(500).json({ success: false, message: 'Failed to fetch rooms', error: error.message });
        }
    } else {
        res.status(405).json({ success: false, message: 'Method Not Allowed' });
    }
}