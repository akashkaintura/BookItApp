import dynamoDB from '../../../utils/dynamoClient';
import { ScanCommand, PutCommand } from '@aws-sdk/lib-dynamodb';

export default async function handler(req, res) {
    const { method } = req;

    if (method === 'GET') {
        try {
            const params = {
                TableName: 'Rooms',
            };
            const command = new ScanCommand(params);
            const data = await dynamoDB.send(command);
            res.status(200).json({ success: true, data: data.Items });
        } catch (error) {
            console.error('Error fetching rooms:', error);
            res.status(500).json({ success: false, message: 'Failed to fetch rooms', error: error.message });
        }
    } else if (method === 'POST') {
        try {
            const { name, capacity } = req.body;
            const params = {
                TableName: 'Rooms',
                Item: {
                    id: new Date().getTime().toString(), // Simple ID generation
                    name,
                    capacity,
                },
            };
            const command = new PutCommand(params);
            await dynamoDB.send(command);
            res.status(201).json({ success: true, data: params.Item });
        } catch (error) {
            console.error('Error creating room:', error);
            res.status(500).json({ success: false, message: 'Failed to create room', error: error.message });
        }
    } else {
        res.status(405).json({ success: false, message: 'Method Not Allowed' });
    }
}