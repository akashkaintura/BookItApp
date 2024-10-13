import dynamoDB from '../../../utils/dynamoClient';
import { v4 as uuidv4 } from 'uuid';

export default async function handler(req, res) {
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const params = {
                    TableName: 'Bookings',
                };
                const data = await dynamoDB.scan(params).promise();
                res.status(200).json({ success: true, data: data.Items });
            } catch (error) {
                res.status(500).json({ success: false, error: error.message });
            }
            break;

        case 'POST':
            try {
                const { roomId, name, date, time } = req.body;
                const params = {
                    TableName: 'Bookings',
                    Item: {
                        id: uuidv4(),
                        roomId,
                        name,
                        date,
                        time,
                    },
                };
                await dynamoDB.put(params).promise();
                res.status(201).json({ success: true, data: params.Item });
            } catch (error) {
                res.status(500).json({ success: false, error: error.message });
            }
            break;

        default:
            res.status(400).json({ success: false });
            break;
    }
}
