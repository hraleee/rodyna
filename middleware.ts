import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getSessionFromCookie } from './lib/session'

export async function middleware(request: NextRequest) {
  const sessionCookie = request.cookies.get('session')?.value
  // Proteggi solo le route che iniziano con /area-riservata
  if (request.nextUrl.pathname.startsWith('/area-riservata')) {
    // Recupera il cookie di sessione
    const session = await getSessionFromCookie(sessionCookie)
    if (!session) {
      // Se non autenticato, reindirizza al login
      const loginUrl = new URL('/area-riservata', request.url)
      return NextResponse.redirect(loginUrl)
    }
    // Se vuoi, puoi aggiungere controlli su ruoli, scadenza, ecc.
  }
  // Altrimenti lascia passare la richiesta
  return NextResponse.next()
}

// (Opzionale) Limita il middleware solo a certe route
export const config = {
  matcher: ['/area-riservata/dashboard/:path*']
} 