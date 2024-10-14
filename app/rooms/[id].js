"use client";

import dynamoDB from '../../../utils/dynamoClient';
import { GetCommand } from '@aws-sdk/lib-dynamodb';

export default async function handler(req, res) {
    const { id } = req.query;

    if (req.method === 'GET') {
        try {
            const params = {
                TableName: 'Rooms',
                Key: { id },
            };
            const command = new GetCommand(params);
            const data = await dynamoDB.send(command);

            if (!data.Item) {
                return res.status(404).json({ success: false, message: 'Room not found' });
            }
            res.status(200).json({ success: true, data: data.Item });
        } catch (error) {
            console.error('Error fetching room:', error);
            res.status(500).json({ success: false, message: 'Failed to fetch room', error: error.message });
        }
    } else {
        res.status(405).json({ success: false, message: 'Method Not Allowed' });
    }
}
