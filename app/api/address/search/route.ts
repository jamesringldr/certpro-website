import { NextRequest, NextResponse } from 'next/server'

const NOMINATIM_USER_AGENT = 'CertPro Plumbing Website (info@certproplumbing.com)'

type NominatimResult = {
  display_name: string
  lat: string
  lon: string
}

export async function GET(request: NextRequest): Promise<NextResponse> {
  const query = request.nextUrl.searchParams.get('q')?.trim() ?? ''

  if (query.length < 3) {
    return NextResponse.json({ results: [] })
  }

  const searchUrl = new URL('https://nominatim.openstreetmap.org/search')
  searchUrl.searchParams.set('format', 'json')
  searchUrl.searchParams.set('addressdetails', '1')
  searchUrl.searchParams.set('countrycodes', 'us')
  searchUrl.searchParams.set('limit', '6')
  searchUrl.searchParams.set('q', `${query}, Kansas City Missouri`)

  try {
    const upstream = await fetch(searchUrl, {
      headers: {
        'User-Agent': NOMINATIM_USER_AGENT,
        Accept: 'application/json',
      },
      next: { revalidate: 0 },
    })

    if (!upstream.ok) {
      return NextResponse.json({ results: [] }, { status: 200 })
    }

    const data = (await upstream.json()) as NominatimResult[]
    const results = data.map((item) => ({
      label: item.display_name,
      lat: item.lat,
      lon: item.lon,
    }))

    return NextResponse.json({ results })
  } catch {
    return NextResponse.json({ results: [] }, { status: 200 })
  }
}
