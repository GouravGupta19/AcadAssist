import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'visits.json');

export async function GET(request) {
    try {
        let fileExists = true;
        try {
            await fs.access(dataFilePath);
        } catch (error) {
            fileExists = false;
        }

        if (!fileExists) {
            await fs.writeFile(dataFilePath, JSON.stringify({ count: 0 }));
        }

        const fileData = await fs.readFile(dataFilePath, 'utf8');
        const data = JSON.parse(fileData);
        
        data.count += 1;

        await fs.writeFile(dataFilePath, JSON.stringify(data));

        return NextResponse.json({ count: data.count });
    } catch (error) {
        console.error('Error handling visit counter:', error);
        return NextResponse.json({ error: 'Failed to update visit count' }, { status: 500 });
    }
}
