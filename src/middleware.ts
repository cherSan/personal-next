import { NextResponse, NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
    const isMaintenance = process.env.MAINTENANCE_MODE === 'true';
    const pathname = req.nextUrl.pathname;

    if (!isMaintenance && pathname.startsWith('/maintenance')) {
        console.info('maintenance mode is off, redirecting to root');
        const publicUrl = req.nextUrl.clone();
        publicUrl.pathname = '/';
        return NextResponse.redirect(publicUrl);
    }

    if (isMaintenance) {
        const maintenanceUrl = req.nextUrl.clone();
        maintenanceUrl.pathname = '/maintenance';
        return NextResponse.rewrite(maintenanceUrl);
    }

    return NextResponse.next();
}
