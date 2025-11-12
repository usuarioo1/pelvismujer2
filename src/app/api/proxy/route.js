import { NextResponse } from 'next/server';

/**
 * GET: Consumir endpoint del backend
 * Uso: fetch('/api/route?path=/tu-endpoint')
 */
export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const path = searchParams.get('path') || '/';
        
        // Variable de entorno privada (NO usa NEXT_PUBLIC_)
        const backendUrl = process.env.API_URL;
        const fullUrl = `${backendUrl}${path}`;
        
        // Hacer petición al backend
        const response = await fetch(fullUrl);
        
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        
        const data = await response.json();
        return NextResponse.json(data);
        
    } catch (error) {
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        );
    }
}

/**
 * POST: Enviar datos al backend
 * Uso: fetch('/api/route?path=/tu-endpoint', {
 *   method: 'POST',
 *   body: JSON.stringify({ datos })
 * })
 */
export async function POST(request) {
    try {
        const { searchParams } = new URL(request.url);
        const path = searchParams.get('path') || '/';
        
        const backendUrl = process.env.API_URL;
        const fullUrl = `${backendUrl}${path}`;
        
        const body = await request.text();
        
        const response = await fetch(fullUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body
        });
        
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        
        const data = await response.json();
        return NextResponse.json(data);
        
    } catch (error) {
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        );
    }
}