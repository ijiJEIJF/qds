import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Lista delle route permesse
const allowedRoutes = [
  '/',              // homepage
  '/sparizione',    // sparizione card
  '/api',           // API routes
]

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Permetti l'accesso ai file statici di Next.js e alle immagini
  if (
    pathname.startsWith('/_next/') ||    // File statici di Next.js
    pathname.startsWith('/images/') ||   // Immagini
    pathname.startsWith('/badges/') ||   // Badge icons
    pathname.startsWith('/sparizione/') || // Immagini di Sparizione
    pathname === '/favicon.ico'          // Favicon
  ) {
    return NextResponse.next()
  }

  // Controlla se il pathname inizia con una delle route permesse
  const isAllowedRoute = allowedRoutes.some(route => 
    pathname === route || pathname.startsWith(`${route}/`)
  )

  // Se la route non è permessa, reindirizza alla pagina 404
  if (!isAllowedRoute) {
    return NextResponse.rewrite(new URL('/404', request.url))
  }

  return NextResponse.next()
} 