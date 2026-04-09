import { NextResponse } from 'next/server';

let visitCount = 0;

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const increment = searchParams.get('increment');

        if (increment === 'true') {
            visitCount += 1;
        }

        return NextResponse.json({ count: visitCount });
    } catch (error) {
        console.error('Error handling visit counter:', error);
        return NextResponse.json({ error: 'Failed to update visit count' }, { status: 500 });
    }
}
